import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalRecordDialogComponent } from '../../components/medical-record-dialog/medical-record-dialog.component';
import { ApiService, AvaliacaoPendenteApi, AvaliacaoHistoricoApi, PacienteAtivoApi, SessaoApi } from '../../core/api.service';
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
  loadingHistorico = false;

  /* Pacientes pagination */
  pacientePage = 0;
  readonly pacientePageSize = 10;
  get pacienteTotalPages(): number { return Math.ceil(this.filteredPatients().length / this.pacientePageSize); }
  get pacientesPaged(): Patient[] {
    const s = this.pacientePage * this.pacientePageSize;
    return this.filteredPatients().slice(s, s + this.pacientePageSize);
  }

  statsConsultasHoje = 0;
  statsPacientesAtivos = 0;
  statsAvaliacoesPendentes = 0;
  statsTaxaRecuperacao = '—';

  constructor(
    private readonly api: ApiService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.loading = true;
    const today = new Date().toISOString().split('T')[0];

    this.api.getSessoes({ date: today }).subscribe({
      next: (sessoes) => {
        this.appointments = sessoes.map(s => this.sessaoToAppointment(s));
        this.statsConsultasHoje = sessoes.length;
        this.loading = false;
      },
      error: () => {
        this.appointments = [];
        this.statsConsultasHoje = 0;
        this.loading = false;
      },
    });

    this.api.getPacientesAtivos().subscribe({
      next: (pacientes) => {
        this.patients = pacientes.map(p => this.pacienteToPatient(p));
        this.statsPacientesAtivos = pacientes.length;
      },
      error: () => {
        this.patients = [];
        this.statsPacientesAtivos = 0;
      },
    });

    this.api.getAvaliacoesPendentes().subscribe({
      next: (avs) => {
        this.avaliacoesPendentes = avs;
        this.statsAvaliacoesPendentes = avs.length;
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
    };
  }

  private pacienteToPatient(p: PacienteAtivoApi): Patient {
    return {
      id: p.idPaciente,
      name: p.nome,
      age: 0,
      condition: p.statusClinico ?? '—',
      sessionsCompleted: 0,
      totalSessions: Number(p.totalSessoes),
      progress: 0,
      nextAppointment: p.proximaSessao ?? '—',
    };
  }

  private mapStatus(s: string): Appointment['status'] {
    const map: Record<string, Appointment['status']> = {
      marcada: 'agendado', remarcada: 'agendado',
      compareceu: 'concluido', aguardando_avaliacao: 'em-andamento',
      avaliada: 'concluido', faltou: 'cancelado', cancelada: 'cancelado',
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

  loadHistoricoAvaliacoes(): void {
    if (this.avaliacoesHistorico.length > 0) return;
    this.loadingHistorico = true;
    this.api.getAvaliacoesHistorico().subscribe({
      next: (h) => { this.avaliacoesHistorico = h; this.loadingHistorico = false; },
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
    void this.router.navigateByUrl('/');
  }
}
