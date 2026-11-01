import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService, SessaoApi, SessaoHistoricoApi } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Appointment, ProgressNote } from '../../core/models';

/** WhatsApp da clínica (mesmo número fictício da seção de contato do site). */
const CLINICA_WHATSAPP = '5511900000000';
const DURACAO_SESSAO_MIN = 45;

@Component({
  selector: 'app-paciente-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './paciente-dashboard.component.html',
  styleUrl: './paciente-dashboard.component.scss',
})
export class PacienteDashboardComponent implements OnInit {
  tab: 'agenda' | 'progresso' | 'exercicios' = 'agenda';

  readonly userName = this.authService.getNome();
  readonly primeiroNome = this.userName.trim().split(/\s+/)[0] ?? '';
  readonly duracao = DURACAO_SESSAO_MIN;

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

  /** Circunferência do anel de progresso (r = 26). */
  readonly ringLength = 2 * Math.PI * 26;

  get ringOffset(): number {
    return this.ringLength * (1 - this.progress / 100);
  }

  /** Próximas sessões sem evolução registrada — aparecem no topo da linha do tempo. */
  get proximaNota(): { session: number; date: string } | null {
    const next = this.nextAppointment;
    if (!next) return null;
    const maior = this.notes.reduce((m, n) => Math.max(m, n.session), 0);
    return { session: maior + 1, date: next.date };
  }

  /** "Terça, 20/10 às 19:00" */
  dataLonga(a: Appointment): string {
    return `${this.diaSemana(a)}, ${a.date.slice(0, 5)} às ${a.time}`;
  }

  diaSemana(a: Appointment): string {
    const d = this.toDate(a).toLocaleDateString('pt-BR', { weekday: 'long' }).split('-')[0];
    return d.charAt(0).toUpperCase() + d.slice(1);
  }

  mesCurto(a: Appointment): string {
    return this.toDate(a).toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase();
  }

  tipoLabel(a: Appointment): string {
    return a.type === 'avaliacao' ? 'Avaliação inicial' : a.type === 'reavaliacao' ? 'Reavaliação' : 'Sessão de fisioterapia';
  }

  whatsapp(msg = ''): string {
    const texto = msg || `Olá! Sou ${this.userName}, paciente da clínica.`;
    return `https://wa.me/${CLINICA_WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }

  remarcarLink(a: Appointment): string {
    return this.whatsapp(`Olá! Sou ${this.userName} e gostaria de remarcar minha sessão de ${this.dataLonga(a)}.`);
  }

  private loadData(): void {
    this.loading = true;
    this.api.getSessoes({ periodo: 'todos' }).subscribe({
      next: (pagina) => {
        const sessoes = pagina.content;
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
          .map(item => this.historyToNote(item))
          .sort((x, y) => y.session - x.session);
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
