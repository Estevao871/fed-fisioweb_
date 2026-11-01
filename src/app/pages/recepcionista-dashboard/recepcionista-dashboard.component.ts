import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppointmentsTableComponent } from '../../components/appointments-table/appointments-table.component';
import { RescheduleDialogComponent } from '../../components/reschedule-dialog/reschedule-dialog.component';
import { SchedulingDialogComponent, LeadOpcao, PacienteOpcao } from '../../components/scheduling-dialog/scheduling-dialog.component';
import { UserManagementPanelComponent } from '../../components/user-management-panel/user-management-panel.component';
import { PatientSessionsDialogComponent } from '../../components/patient-sessions-dialog/patient-sessions-dialog.component';
import { ApiService, LeadApi, SessaoApi, UsuarioApi } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Appointment } from '../../core/models';

/** Pedido de avaliação (lead) como a triagem mostra. */
interface LeadCard {
  id: string;
  nome: string;
  iniciais: string;
  telefone: string;
  email: string;
  interesse: string;
  queixa: string;
  status: 'novo' | 'contatado';
  recebidoEm: string;
}

type Aba = 'contatos' | 'avaliacoes' | 'agendamentos' | 'usuarios';

@Component({
  selector: 'app-recepcionista-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    SchedulingDialogComponent,
    RescheduleDialogComponent,
    AppointmentsTableComponent,
    UserManagementPanelComponent,
    PatientSessionsDialogComponent,
  ],
  templateUrl: './recepcionista-dashboard.component.html',
  styleUrl: './recepcionista-dashboard.component.scss',
})
export class RecepcionistaDashboardComponent implements OnInit {
  tab: Aba = 'contatos';
  contactSearch = '';
  leads: LeadCard[] = [];
  allAppointments: Appointment[] = [];
  avaliacaoSessoes: SessaoApi[] = [];
  fisioterapeutas: UsuarioApi[] = [];
  loading = false;

  /* Avaliações: filtro por dia + paginação */
  avaliacaoFiltroData = this.hojeIso();
  avaliacaoPage = 0;
  readonly avaliacaoPageSize = 10;

  /* indicadores */
  statsContatos = 0;
  statsHoje = 0;
  statsPendentes = 0;
  statsTotal = 0;

  /* modais */
  schedulingOpen = false;
  rescheduleOpen = false;
  patientSessionsOpen = false;
  selectedLeadId = '';
  selectedPatient = '';
  selectedPatientId = '';
  selectedAvaliacaoId = '';
  selectedPatientName = '';
  selectedAppointmentId = '';
  selectedAppointmentAtual = '';
  selectedHasSerie = false;

  confirmandoChegada: string | null = null;
  leadEmAcao: string | null = null;
  sessaoIdsAgendadas = new Set<string>();
  pendingScheduleSessaoId = '';

  readonly userName = this.authService.getNome() ?? 'Usuário';
  readonly iniciais = this.iniciaisDe(this.userName);
  readonly hojeExtenso = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

  constructor(
    private readonly api:         ApiService,
    private readonly router:      Router,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.api.getFisioterapeutas().subscribe({
      next: (lista) => { this.fisioterapeutas = lista; },
      error: () => { this.fisioterapeutas = []; },
    });
  }

  loadData(): void {
    this.loading = true;

    this.api.getLeads(true, 0, 200).subscribe({
      next: (pagina) => {
        this.leads = pagina.content.map(l => this.toLeadCard(l));
        this.statsContatos = pagina.content.filter(l => l.status === 'novo').length;
        this.loading = false;
      },
      error: () => {
        this.leads = [];
        this.statsContatos = 0;
        this.loading = false;
      },
    });

    this.api.getSessoes({ periodo: 'todos', size: 500 }).subscribe({
      next: (pagina) => {
        const sessoes = pagina.content;
        this.allAppointments = sessoes.map(s => this.sessaoToAppointment(s));
        this.avaliacaoSessoes = sessoes.filter(s => s.tipo === 'avaliacao');

        const hoje = new Date().toDateString();
        this.statsHoje = sessoes.filter(s =>
          new Date(s.dataHora).toDateString() === hoje && s.status !== 'cancelada'
        ).length;

        /* Pendentes = avaliações que ainda aguardam a chegada do paciente */
        this.statsPendentes = sessoes.filter(s =>
          s.tipo === 'avaliacao' && (s.status === 'marcada' || s.status === 'remarcada')
        ).length;

        /* Pacientes distintos com sessões de tratamento ativas */
        this.statsTotal = new Set(
          sessoes
            .filter(s => s.tipo === 'sessao' && s.status !== 'cancelada' && s.status !== 'faltou' && s.pacienteId)
            .map(s => s.pacienteId as string)
        ).size;
      },
      error: () => {
        this.allAppointments = [];
        this.avaliacaoSessoes = [];
      },
    });
  }

  /* ── Triagem ── */

  /** O formulário do site grava "Interesse: X\n\n<queixa>" na observação do lead. */
  private toLeadCard(l: LeadApi): LeadCard {
    const nome = `${l.nome} ${l.sobrenome ?? ''}`.trim();
    const obs = (l.observacao ?? '').trim();
    const match = obs.match(/^Interesse:\s*(.+?)\s*\n+([\s\S]*)$/);
    const criado = l.criadoEm ? new Date(l.criadoEm) : null;
    return {
      id: l.id,
      nome,
      iniciais: this.iniciaisDe(nome),
      telefone: l.telefone,
      email: l.email?.includes('.temp') ? '' : (l.email ?? ''),
      interesse: match ? match[1] : '',
      queixa: match ? match[2].trim() : obs,
      status: l.status === 'contatado' ? 'contatado' : 'novo',
      recebidoEm: criado ? criado.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : '—',
    };
  }

  filteredLeads(): LeadCard[] {
    const s = this.contactSearch.trim().toLowerCase();
    if (!s) return this.leads;
    const digitos = s.replace(/\D/g, '');
    return this.leads.filter(l =>
      l.nome.toLowerCase().includes(s)
      || l.email.toLowerCase().includes(s)
      || (!!digitos && l.telefone.replace(/\D/g, '').includes(digitos)),
    );
  }

  telLink(telefone: string): string {
    return 'tel:+55' + telefone.replace(/\D/g, '');
  }

  /** Ao ligar, o pedido passa de "Pendente" para "Contatado". */
  registrarLigacao(lead: LeadCard): void {
    if (lead.status !== 'novo') return;
    this.api.executarAcaoLead(lead.id, 'REGISTRAR_CONTATO').subscribe({
      next: () => {
        lead.status = 'contatado';
        this.statsContatos = this.leads.filter(l => l.status === 'novo').length;
      },
    });
  }

  descartarLead(lead: LeadCard): void {
    if (!window.confirm(`Descartar o pedido de ${lead.nome}? Ele sai da triagem.`)) return;
    this.leadEmAcao = lead.id;
    this.api.executarAcaoLead(lead.id, 'CANCELAR').subscribe({
      next: () => {
        this.leads = this.leads.filter(l => l.id !== lead.id);
        this.statsContatos = this.leads.filter(l => l.status === 'novo').length;
        this.leadEmAcao = null;
      },
      error: () => { this.leadEmAcao = null; },
    });
  }

  /* ── Novo agendamento ── */

  get leadOpcoes(): LeadOpcao[] {
    return this.leads.map(l => ({ id: l.id, nome: l.nome, telefone: l.telefone, email: l.email, queixa: l.queixa }));
  }

  /** Pacientes com sessões, montados a partir da agenda (traz telefone e fisio de uma vez). */
  get pacienteOpcoes(): PacienteOpcao[] {
    const porId = new Map<string, PacienteOpcao>();
    for (const a of this.allAppointments) {
      if (!a.pacienteId || porId.has(a.pacienteId)) continue;
      porId.set(a.pacienteId, {
        id: a.pacienteId,
        nome: a.patient,
        telefone: a.phone ?? '',
        fisioterapeutaId: a.fisioterapeutaId ?? '',
      });
    }
    return [...porId.values()].sort((x, y) => x.nome.localeCompare(y.nome));
  }

  openScheduling(): void {
    this.selectedLeadId = '';
    this.schedulingOpen = true;
  }

  scheduleLead(lead: LeadCard): void {
    this.selectedLeadId = lead.id;
    this.schedulingOpen = true;
  }

  /* ── Avaliações ── */

  confirmarChegada(sessao: SessaoApi): void {
    this.confirmandoChegada = sessao.id;
    this.api.marcarCompareceuAvaliacao(sessao.id).subscribe({
      next: (updated) => {
        const idx = this.avaliacaoSessoes.findIndex(s => s.id === sessao.id);
        if (idx >= 0) this.avaliacaoSessoes[idx] = updated;
        this.statsPendentes = Math.max(0, this.statsPendentes - 1);
        this.confirmandoChegada = null;
      },
      error: () => { this.confirmandoChegada = null; },
    });
  }

  abrirAgendamentoSessoes(sessao: SessaoApi): void {
    this.selectedPatientId = sessao.pacienteId ?? '';
    this.selectedAvaliacaoId = '';
    this.selectedPatientName = sessao.pacienteNome ?? 'Paciente';
    this.pendingScheduleSessaoId = sessao.id;
    this.patientSessionsOpen = true;
  }

  onSessionsScheduled(): void {
    if (this.pendingScheduleSessaoId) {
      this.sessaoIdsAgendadas.add(this.pendingScheduleSessaoId);
      this.pendingScheduleSessaoId = '';
    }
    this.loadData();
  }

  statusAvaliacaoLabel(status: string): string {
    const map: Record<string, string> = {
      marcada: 'Agendado',
      remarcada: 'Reagendado',
      aguardando_avaliacao: 'Em avaliação',
      avaliada: 'Avaliado',
      faltou: 'Faltou',
      cancelada: 'Cancelado',
    };
    return map[status] ?? status;
  }

  statusAvaliacaoBadge(status: string): string {
    const map: Record<string, string> = {
      marcada: 'badge-purple',
      remarcada: 'badge-purple',
      aguardando_avaliacao: 'badge-yellow',
      avaliada: 'badge-green',
      faltou: 'badge-red',
      cancelada: 'badge-gray',
    };
    return map[status] ?? 'badge-gray';
  }

  hora(dataHora: string): string {
    return new Date(dataHora).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  data(dataHora: string): string {
    return new Date(dataHora).toLocaleDateString('pt-BR');
  }

  get filtroDataLabel(): string {
    if (!this.avaliacaoFiltroData) return 'em todas as datas';
    const [a, m, d] = this.avaliacaoFiltroData.split('-');
    return `em ${d}/${m}/${a}`;
  }

  get avaliacoesFiltradas(): SessaoApi[] {
    /* Pacientes que já têm sessões de tratamento agendadas saem da fila */
    const pacientesComSessoes = new Set(
      this.allAppointments
        .filter(a => a.type === 'sessao' && a.status !== 'cancelado')
        .map(a => a.pacienteId)
        .filter((id): id is string => !!id)
    );

    const lista = this.avaliacaoSessoes.filter(av =>
      !this.sessaoIdsAgendadas.has(av.id) &&
      av.status !== 'cancelada' &&
      !(av.pacienteId && pacientesComSessoes.has(av.pacienteId))
    );

    if (!this.avaliacaoFiltroData) return lista;
    const filtro = this.avaliacaoFiltroData;
    return lista
      .filter(av => this.isoLocal(new Date(av.dataHora)) === filtro)
      .sort((x, y) => x.dataHora.localeCompare(y.dataHora));
  }

  get avaliacoesPaginadas(): SessaoApi[] {
    const start = this.avaliacaoPage * this.avaliacaoPageSize;
    return this.avaliacoesFiltradas.slice(start, start + this.avaliacaoPageSize);
  }

  get totalPaginas(): number {
    return Math.ceil(this.avaliacoesFiltradas.length / this.avaliacaoPageSize);
  }

  proximaPagina(): void { if (this.avaliacaoPage < this.totalPaginas - 1) this.avaliacaoPage++; }
  paginaAnterior(): void { if (this.avaliacaoPage > 0) this.avaliacaoPage--; }
  onFiltroDataChange(): void { this.avaliacaoPage = 0; }

  /* ── Todos os agendamentos ── */

  onReassignFisio(evento: { pacienteId: string; fisioterapeutaId: string }): void {
    this.api.atribuirFisioterapeuta(evento.pacienteId, evento.fisioterapeutaId).subscribe({
      next: () => this.loadData(),
      error: () => this.loadData(),
    });
  }

  onReschedule(item: Appointment): void {
    this.selectedPatient = item.patient;
    this.selectedAppointmentId = item.id;
    this.selectedAppointmentAtual = `${item.date} às ${item.time}`;
    this.selectedHasSerie = !!item.serieId;
    this.rescheduleOpen = true;
  }

  onEdit(item: Appointment): void {
    this.onReschedule(item);
  }

  onDelete(id: string): void {
    if (!window.confirm('Tem certeza que deseja cancelar este agendamento?')) return;
    this.api.cancelarSessao(id).subscribe({
      next: () => { this.allAppointments = this.allAppointments.filter(a => a.id !== id); },
    });
  }

  /* ── utilitários ── */

  private sessaoToAppointment(s: SessaoApi): Appointment {
    const dateObj = new Date(s.dataHora);
    return {
      id: s.id,
      patient: s.pacienteNome ?? 'Paciente',
      phone: s.pacienteTelefone ?? undefined,
      date: dateObj.toLocaleDateString('pt-BR'),
      time: dateObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      type: (s.tipo as 'avaliacao' | 'sessao' | 'reavaliacao') ?? 'sessao',
      status: this.mapStatus(s.status),
      duration: 45,
      pacienteId: s.pacienteId ?? undefined,
      serieId: s.serieId ?? undefined,
      fisioterapeuta: s.fisioterapeutaNome ?? undefined,
      fisioterapeutaId: s.fisioterapeutaId ?? undefined,
    };
  }

  private mapStatus(s: string): Appointment['status'] {
    const map: Record<string, Appointment['status']> = {
      marcada: 'agendado',
      remarcada: 'agendado',
      compareceu: 'concluido',
      aguardando_avaliacao: 'em-andamento',
      avaliada: 'concluido',
      faltou: 'cancelado',
      cancelada: 'cancelado',
    };
    return map[s] ?? 'agendado';
  }

  private iniciaisDe(nome: string): string {
    const partes = nome.trim().split(/\s+/).filter(Boolean);
    if (partes.length === 0) return '?';
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : (partes[0][1] ?? '');
    return (partes[0][0] + ultima).toUpperCase();
  }

  private hojeIso(): string {
    return this.isoLocal(new Date());
  }

  private isoLocal(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }
}
