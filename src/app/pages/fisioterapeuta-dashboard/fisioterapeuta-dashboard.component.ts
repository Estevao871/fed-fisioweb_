import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalRecordDialogComponent } from '../../components/medical-record-dialog/medical-record-dialog.component';
import { ApiService, AvaliacaoPendenteApi, AvaliacaoHistoricoApi, PacienteAtivoApi, SessaoApi } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Appointment, Patient } from '../../core/models';

@Component({
  selector: 'app-fisioterapeuta-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MedicalRecordDialogComponent],
  templateUrl: './fisioterapeuta-dashboard.component.html',
  styleUrl: './fisioterapeuta-dashboard.component.scss',
})
export class FisioterapeutaDashboardComponent implements OnInit {
  tab: 'agenda' | 'pacientes' | 'avaliacoes' | 'historico' = 'agenda';
  searchTerm = '';
  recordOpen = false;
  selectedPatientName = '';
  selectedPatientAge = 0;
  selectedCondition = '';
  isInitialEvaluation = false;
  selectedAvaliacaoId = '';
  selectedSessaoId = '';
  selectedPacienteId = '';
  loading = false;
  iniciandoAvaliacao: string | null = null;
  readonly Math = Math;

  appointments: Appointment[] = [];
  patients: Patient[] = [];
  avaliacoesPendentes: AvaliacaoPendenteApi[] = [];
  avaliacoesHistorico: AvaliacaoHistoricoApi[] = [];
  loadingHistorico  = false;
  historicoSearch   = '';
  historicoPage     = 0;
  readonly historicoPageSize = 10;

  filteredHistorico(): AvaliacaoHistoricoApi[] {
    const s = this.historicoSearch.toLowerCase();
    if (!s) return this.avaliacoesHistorico;
    return this.avaliacoesHistorico.filter(h => h.paciente.toLowerCase().includes(s));
  }

  get pagedHistorico(): AvaliacaoHistoricoApi[] {
    const start = this.historicoPage * this.historicoPageSize;
    return this.filteredHistorico().slice(start, start + this.historicoPageSize);
  }

  get historicoTotalPages(): number {
    return Math.ceil(this.filteredHistorico().length / this.historicoPageSize);
  }

  /* Pacientes pagination — server-side */
  pacientePage       = 0;
  pacienteTotalPages = 0;
  pacientesLoading   = false;
  meusPacientes      = true;
  readonly pacientePageSize = 20;

  statsConsultasHoje = 0;
  statsPacientesAtivos = 0;
  statsAvaliacoesPendentes = 0;
  statsTaxaRecuperacao = '—';

  readonly userName = this.authService.getNome();

  constructor(
    private readonly api:         ApiService,
    private readonly router:      Router,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.loading = true;
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    this.api.getSessoes({ date: today }).subscribe({
      next: (pagina) => {
        this.appointments = pagina.content.map(s => this.sessaoToAppointment(s));
        this.statsConsultasHoje = pagina.totalElements;
        this.loading = false;
      },
      error: () => {
        this.appointments = [];
        this.statsConsultasHoje = 0;
        this.loading = false;
      },
    });

    this.loadPacientes(0);

    this.api.getAvaliacoesPendentes(0, 100).subscribe({
      next: (pagina) => {
        this.avaliacoesPendentes = pagina.content;
        this.statsAvaliacoesPendentes = pagina.totalElements;
      },
      error: () => {
        this.statsAvaliacoesPendentes = 0;
      },
    });

    this.api.getEstatisticas().subscribe({
      next: (stats) => {
        if (typeof stats['compareceu'] === 'number' && typeof stats['total'] === 'number') {
          const taxa = stats['total'] > 0
            ? Math.round(((stats['compareceu'] as number) / (stats['total'] as number)) * 100)
            : 0;
          this.statsTaxaRecuperacao = taxa + '%';
        }
      },
      error: () => { this.statsTaxaRecuperacao = '—'; },
    });
  }

  toggleMeusPacientes(): void {
    this.meusPacientes = !this.meusPacientes;
    this.loadPacientes(0);
  }

  loadPacientes(page: number): void {
    this.pacientePage     = page;
    this.pacientesLoading = true;
    this.api.getPacientesAtivos(page, this.pacientePageSize, this.meusPacientes).subscribe({
      next: (result) => {
        this.patients              = result.content.map(p => this.pacienteToPatient(p));
        this.pacienteTotalPages    = result.totalPages;
        this.statsPacientesAtivos  = result.totalElements;
        this.pacientesLoading      = false;
      },
      error: () => {
        this.patients           = [];
        this.pacienteTotalPages = 0;
        this.pacientesLoading   = false;
      },
    });
  }

  iniciarAvaliacao(av: AvaliacaoPendenteApi): void {
    this.iniciandoAvaliacao = av.idSessao;

    this.api.converterLeadParaPaciente(av.idSessao).subscribe({
      next: (result) => {
        this.api.iniciarAvaliacao(result.avaliacaoId).subscribe({
          next: () => {
            this.selectedPatientName = result.pacienteNome;
            this.selectedPatientAge = 0;
            this.selectedCondition = '';
            this.isInitialEvaluation = true;
            this.selectedAvaliacaoId = result.avaliacaoId;
            this.selectedSessaoId = av.idSessao;
            this.selectedPacienteId = result.pacienteId;
            this.iniciandoAvaliacao = null;
            this.recordOpen = true;

            this.avaliacoesPendentes = this.avaliacoesPendentes.filter(a => a.idSessao !== av.idSessao);
            this.statsAvaliacoesPendentes = this.avaliacoesPendentes.length;
          },
          error: () => { this.iniciandoAvaliacao = null; },
        });
      },
      error: (err) => {
        const msg: string = err?.error?.mensagem ?? '';
        if (msg.includes('já está vinculada a um paciente') && av.idPaciente) {
          this.selectedPatientName = av.nome ?? 'Paciente';
          this.selectedPatientAge = 0;
          this.selectedCondition = '';
          this.isInitialEvaluation = true;
          this.selectedAvaliacaoId = '';
          this.selectedSessaoId = av.idSessao;
          this.iniciandoAvaliacao = null;
          this.recordOpen = true;
        } else {
          this.iniciandoAvaliacao = null;
        }
      },
    });
  }

  formatDataHora(dataHora: string): string {
    const d = new Date(dataHora);
    return d.toLocaleDateString('pt-BR') + ' · ' +
      d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
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
      fisioterapeuta: s.fisioterapeutaNome ?? undefined,
      fisioterapeutaId: s.fisioterapeutaId ?? undefined,
    };
  }

  private pacienteToPatient(p: PacienteAtivoApi): Patient {
    const statusMap: Record<string, string> = {
      aguardando:      'Aguardando avaliação',
      em_atendimento:  'Em avaliação',
      finalizada:      'Avaliação concluída',
      sem_avaliacao:   'Aguardando avaliação',
    };
    const total      = Number(p.totalSessoes);
    const realizadas = Number(p.sessoesRealizadas ?? 0);
    return {
      id:                p.idPaciente,
      name:              p.nome,
      age:               0,
      condition:         statusMap[p.statusClinico] ?? p.statusClinico ?? '—',
      sessionsCompleted: realizadas,
      totalSessions:     total,
      progress:          total > 0 ? Math.round((realizadas / total) * 100) : 0,
      nextAppointment:   p.proximaSessao
        ? new Date(p.proximaSessao).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
        : '—',
      fisioterapeuta:    p.fisioterapeutaNome ?? undefined,
    };
  }

  private mapStatus(s: string): Appointment['status'] {
    const map: Record<string, Appointment['status']> = {
      marcada: 'agendado', remarcada: 'agendado',
      compareceu: 'concluido', aguardando_avaliacao: 'em-andamento',
      avaliada: 'concluido', realizada: 'concluido',
      faltou: 'cancelado', cancelada: 'cancelado',
    };
    return map[s] ?? 'agendado';
  }

  filteredPatients(): Patient[] {
    const s = this.searchTerm.toLowerCase();
    return this.patients.filter(p =>
      p.name.toLowerCase().includes(s) || p.condition.toLowerCase().includes(s),
    );
  }

  openRecord(item: Appointment): void {
    const patient = this.patients.find(p => p.name === item.patient);
    this.selectedPatientName = item.patient;
    this.selectedPatientAge = patient?.age ?? 0;
    this.selectedCondition = patient?.condition ?? '';
    this.isInitialEvaluation = item.type === 'avaliacao';
    this.selectedAvaliacaoId = '';
    this.selectedSessaoId = item.id;
    this.selectedPacienteId = item.pacienteId ?? patient?.id ?? '';
    this.recordOpen = true;
  }

  openPatient(patient: Patient): void {
    this.selectedPatientName = patient.name;
    this.selectedPatientAge = patient.age;
    this.selectedCondition = patient.condition;
    this.isInitialEvaluation = false;
    this.selectedAvaliacaoId = '';
    this.selectedSessaoId = '';
    this.selectedPacienteId = patient.id;
    this.recordOpen = true;
  }

  typeLabel(type: string): string {
    const map: Record<string, string> = { avaliacao: 'Avaliação', sessao: 'Sessão', reavaliacao: 'Reavaliação' };
    return map[type] ?? type;
  }

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      agendado: 'Agendado', 'em-andamento': 'Em andamento',
      concluido: 'Concluído', confirmado: 'Confirmado',
      pendente: 'Pendente', cancelado: 'Cancelado',
    };
    return map[status] ?? status;
  }

  statusBadge(status: string): string {
    const map: Record<string, string> = {
      agendado: 'badge-blue', 'em-andamento': 'badge-yellow',
      concluido: 'badge-green', confirmado: 'badge-green',
      pendente: 'badge-yellow', cancelado: 'badge-red',
    };
    return map[status] ?? 'badge-gray';
  }

  editarAvaliacao(h: AvaliacaoHistoricoApi): void {
    this.selectedPatientName    = h.paciente;
    this.selectedPatientAge     = 0;
    this.selectedCondition      = h.resumo ?? '';
    this.isInitialEvaluation    = false;
    this.selectedAvaliacaoId    = h.idAvaliacao;
    this.selectedSessaoId       = '';
    this.selectedPacienteId     = '';
    this.recordOpen             = true;
  }

  loadHistoricoAvaliacoes(): void {
    this.loadingHistorico = true;
    this.historicoPage    = 0;
    this.api.getAvaliacoesHistorico(0, 200).subscribe({
      next: (pagina) => { this.avaliacoesHistorico = pagina.content; this.loadingHistorico = false; },
      error: () => { this.loadingHistorico = false; },
    });
  }

  formatData(iso: string | null): string {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('pt-BR');
  }

  onRecordSaved(): void {
    this.avaliacoesHistorico = [];
    this.loadData();
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }
}
