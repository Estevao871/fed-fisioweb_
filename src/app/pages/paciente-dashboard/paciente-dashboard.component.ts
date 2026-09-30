import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, SessaoApi, SessaoHistoricoApi } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Appointment, ProgressNote } from '../../core/models';

@Component({
  selector: 'app-paciente-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paciente-dashboard.component.html',
  styleUrl: './paciente-dashboard.component.scss',
})
export class PacienteDashboardComponent implements OnInit {
  tab: 'agenda' | 'progresso' | 'exercicios' = 'agenda';

  readonly userName = this.authService.getNome();

  upcoming:  Appointment[]  = [];
  completed: Appointment[]  = [];
  notes:     ProgressNote[] = [];
  totalSessions = 0;
  loading = false;
  therapistName = '';

  exercises: { icon: string; name: string; sets: string; frequency: string }[] = [];

  constructor(
    private readonly api: ApiService,
    private readonly router:      Router,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  get progress(): number {
    if (!this.totalSessions) return 0;
    return Math.round((this.completed.length / this.totalSessions) * 100);
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }

  get nextAppointment(): Appointment | undefined {
    return this.upcoming[0];
  }

  private loadData(): void {
    this.loading = true;
    this.api.getSessoes({ periodo: 'todos' }).subscribe({
      next: (sessoes) => {
        const appointments = sessoes.map(s => this.sessaoToAppointment(s));
        this.upcoming = appointments
          .filter(a => a.status !== 'concluido' && a.status !== 'cancelado')
          .sort((a, b) => this.toDate(a).getTime() - this.toDate(b).getTime());
        this.completed = appointments
          .filter(a => a.status === 'concluido')
          .sort((a, b) => this.toDate(b).getTime() - this.toDate(a).getTime());
        this.totalSessions = sessoes.filter(s => s.status !== 'cancelada' && s.status !== 'faltou').length;
        this.loading = false;

        const pacienteId = sessoes.find(s => s.pacienteId)?.pacienteId;
        if (pacienteId) {
          this.loadHistory(pacienteId);
          this.loadTherapist(pacienteId);
        }
      },
      error: () => {
        this.upcoming = [];
        this.completed = [];
        this.totalSessions = 0;
        this.loading = false;
      },
    });
  }

  private loadHistory(pacienteId: string): void {
    this.api.getHistoricoSessoes(pacienteId).subscribe({
      next: (history) => {
        this.notes = history
          .filter(item => item.status !== 'cancelada' && item.status !== 'faltou')
          .map(item => this.historyToNote(item));
        this.exercises = this.notes.flatMap(note => note.exercises).filter((exercise, index, all) => all.indexOf(exercise) === index)
          .map(name => ({ icon: 'fitness_center', name, sets: 'Conforme orientação', frequency: 'Plano de tratamento' }));
      },
      error: () => {
        this.notes = [];
        this.exercises = [];
      },
    });
  }

  private loadTherapist(pacienteId: string): void {
    this.api.getAvaliacaoPorPaciente(pacienteId).subscribe({
      next: (evaluation) => {
        this.therapistName = evaluation.medico?.trim() ?? '';
      },
      error: () => { this.therapistName = ''; },
    });
  }

  private sessaoToAppointment(session: SessaoApi): Appointment {
    const date = new Date(session.dataHora);
    return {
      id: session.id,
      patient: session.pacienteNome ?? this.userName,
      date: date.toLocaleDateString('pt-BR'),
      time: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      type: (session.tipo as Appointment['type']) ?? 'sessao',
      status: this.mapStatus(session.status),
      pacienteId: session.pacienteId ?? undefined,
      serieId: session.serieId ?? undefined,
    };
  }

  private historyToNote(item: SessaoHistoricoApi): ProgressNote {
    return {
      id: item.id,
      date: new Date(item.dataHora).toLocaleDateString('pt-BR'),
      session: item.numeroOcorrencia ?? 0,
      notes: item.observacoes ?? '',
      exercises: item.exercicios ?? [],
      pain: item.nivelDor ?? undefined,
      mobility: item.mobilidade ?? undefined,
    };
  }

  private toDate(appointment: Appointment): Date {
    const [day, month, year] = appointment.date.split('/').map(Number);
    const [hour, minute] = appointment.time.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute);
  }

  private mapStatus(status: string): Appointment['status'] {
    const normalized = status.toLowerCase();
    if (['compareceu', 'avaliada', 'realizada', 'concluida', 'concluído'].includes(normalized)) return 'concluido';
    if (['cancelada', 'cancelado', 'faltou'].includes(normalized)) return 'cancelado';
    return 'agendado';
  }
}
