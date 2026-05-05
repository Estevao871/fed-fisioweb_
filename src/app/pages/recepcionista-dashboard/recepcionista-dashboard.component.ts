import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentsTableComponent } from '../../components/appointments-table/appointments-table.component';
import { RescheduleDialogComponent } from '../../components/reschedule-dialog/reschedule-dialog.component';
import { SchedulingDialogComponent } from '../../components/scheduling-dialog/scheduling-dialog.component';
import { UserManagementPanelComponent } from '../../components/user-management-panel/user-management-panel.component';
import { PatientSessionsDialogComponent } from '../../components/patient-sessions-dialog/patient-sessions-dialog.component';
import { ApiService, LeadApi, SessaoApi } from '../../core/api.service';
import { Appointment, Contact } from '../../core/models';

@Component({
  selector: 'app-recepcionista-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
  tab: 'contatos' | 'avaliacoes' | 'agendamentos' | 'usuarios' = 'contatos';
  contactSearch = '';
  contacts: Contact[] = [];
  allAppointments: Appointment[] = [];
  avaliacaoSessoes: SessaoApi[] = [];
  loading = false;

  /* Avaliações filter + pagination */
  avaliacaoFiltroData = new Date().toISOString().split('T')[0];
  avaliacaoPage = 0;
  readonly avaliacaoPageSize = 10;

  /* stats */
  statsContatos = 0;
  statsHoje = 0;
  statsPendentes = 0;
  statsTotal = 0;

  /* dialogs */
  schedulingOpen = false;
  rescheduleOpen = false;
  patientSessionsOpen = false;
  selectedContactName = '';
  selectedContactPhone = '';
  selectedContactEmail = '';
  selectedContactId = '';
  selectedPatient = '';
  selectedPatientId = '';
  selectedAvaliacaoId = '';
  selectedPatientName = '';
  selectedAppointmentId = '';
  selectedHasSerie = false;

  confirmandoChegada: string | null = null;
  sessaoIdsAgendadas = new Set<string>();
  pendingScheduleSessaoId = '';

  constructor(
    private readonly api: ApiService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;

    this.api.getLeads(true).subscribe({
      next: (leads) => {
        this.contacts = leads.map(l => this.leadToContact(l));
        this.statsContatos = leads.length;
        this.loading = false;
      },
      error: () => {
        this.contacts = [];
        this.statsContatos = 0;
        this.loading = false;
      },
    });

    this.api.getSessoes({ periodo: 'todos' }).subscribe({
      next: (sessoes) => {
        this.allAppointments = sessoes.map(s => this.sessaoToAppointment(s));
        this.avaliacaoSessoes = sessoes.filter(s => s.tipo === 'avaliacao');

        const hoje = new Date().toDateString();
        this.statsHoje = sessoes.filter(s => new Date(s.dataHora).toDateString() === hoje).length;

        /* Pendentes = avaliações aguardando confirmação de chegada */
        this.statsPendentes = sessoes.filter(s =>
          s.tipo === 'avaliacao' && (s.status === 'marcada' || s.status === 'remarcada')
        ).length;

        /* Total = sessões de terapia não canceladas */
        this.statsTotal = sessoes.filter(s =>
          s.tipo === 'sessao' && s.status !== 'cancelada' && s.status !== 'faltou'
        ).length;
      },
      error: () => {
        this.allAppointments = [];
        this.avaliacaoSessoes = [];
      },
    });
  }

  private leadToContact(l: LeadApi): Contact {
    return {
      id: l.id,
      name: `${l.nome} ${l.sobrenome}`.trim(),
      phone: l.telefone,
      email: l.email ?? '',
      source: 'website',
      date: l.criadoEm ? new Date(l.criadoEm).toLocaleDateString('pt-BR') : '—',
      status: l.status === 'novo' ? 'pending' : l.status === 'contatado' ? 'contacted' : 'scheduled',
    };
  }

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

  filteredContacts(): Contact[] {
    const s = this.contactSearch.toLowerCase();
    return this.contacts.filter(
      (c) => c.name.toLowerCase().includes(s) || c.phone.includes(s),
    );
  }

  confirmarChegada(sessao: SessaoApi): void {
    this.confirmandoChegada = sessao.id;
    this.api.marcarCompareceuAvaliacao(sessao.id).subscribe({
      next: (updated) => {
        const idx = this.avaliacaoSessoes.findIndex(s => s.id === sessao.id);
        if (idx >= 0) this.avaliacaoSessoes[idx] = updated;
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
      marcada: 'Agendada',
      remarcada: 'Reagendada',
      aguardando_avaliacao: 'Em avaliação',
      avaliada: 'Avaliada',
      faltou: 'Faltou',
      cancelada: 'Cancelada',
    };
    return map[status] ?? status;
  }

  statusAvaliacaoBadge(status: string): string {
    const map: Record<string, string> = {
      marcada: 'badge-blue',
      remarcada: 'badge-purple',
      aguardando_avaliacao: 'badge-yellow',
      avaliada: 'badge-green',
      faltou: 'badge-red',
      cancelada: 'badge-gray',
    };
    return map[status] ?? 'badge-gray';
  }

  formatDataHora(dataHora: string): string {
    const d = new Date(dataHora);
    return d.toLocaleDateString('pt-BR') + ' · ' +
      d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  openScheduling(): void {
    this.selectedContactName = '';
    this.selectedContactPhone = '';
    this.selectedContactEmail = '';
    this.selectedContactId = '';
    this.schedulingOpen = true;
  }

  scheduleContact(contact: Contact): void {
    this.selectedContactName = contact.name;
    this.selectedContactPhone = contact.phone;
    this.selectedContactEmail = contact.email;
    this.selectedContactId = contact.id;
    this.schedulingOpen = true;
  }

  onReschedule(item: Appointment): void {
    this.selectedPatient = item.patient;
    this.selectedAppointmentId = item.id;
    this.selectedHasSerie = !!item.serieId;
    this.rescheduleOpen = true;
  }

  onEdit(item: Appointment): void {
    window.alert(`Editar agendamento de ${item.patient}.`);
  }

  onDelete(id: string): void {
    if (window.confirm('Tem certeza que deseja cancelar este agendamento?')) {
      this.api.cancelarSessao(id).subscribe({
        next: () => { this.allAppointments = this.allAppointments.filter(a => a.id !== id); },
        error: () => { this.allAppointments = this.allAppointments.filter(a => a.id !== id); },
      });
    }
  }

  get avaliacoesFiltradas(): SessaoApi[] {
    let lista = this.avaliacaoSessoes.filter(av => !this.sessaoIdsAgendadas.has(av.id));
    if (!this.avaliacaoFiltroData) return lista;
    const filtro = this.avaliacaoFiltroData;
    return lista.filter(av => {
      const d = new Date(av.dataHora).toISOString().split('T')[0];
      return d === filtro;
    });
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

  sourceLabel(source: string): string {
    const map: Record<string, string> = { website: 'Site', phone: 'Telefone', referral: 'Indicação' };
    return map[source] ?? source;
  }

  logout(): void {
    void this.router.navigateByUrl('/');
  }
}
