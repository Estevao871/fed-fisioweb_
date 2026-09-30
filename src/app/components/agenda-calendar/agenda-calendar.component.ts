import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService, SessaoApi } from '../../core/api.service';

interface CalendarDay {
  iso: string;        // yyyy-MM-dd
  day: number;
  sessoes: number;
  avaliacoes: number;
}

const TIPOS_AVALIACAO = ['avaliacao', 'reavaliacao'];
const STATUS_INATIVOS = ['cancelada'];

function toIso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

@Component({
  selector: 'app-agenda-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agenda-calendar.component.html',
  styleUrl: './agenda-calendar.component.scss',
})
export class AgendaCalendarComponent implements OnInit {
  /** Dia selecionado (yyyy-MM-dd) — use [(selectedDate)] */
  @Input()  selectedDate = toIso(new Date());
  @Output() selectedDateChange = new EventEmitter<string>();

  readonly weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  readonly today = toIso(new Date());

  viewYear  = 0;
  viewMonth = 0;   // 1-12
  weeks: (CalendarDay | null)[][] = [];
  loading = false;
  error   = false;
  totalSessoes    = 0;
  totalAvaliacoes = 0;

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    const [y, m] = this.selectedDate.split('-').map(Number);
    this.viewYear  = y;
    this.viewMonth = m;
    this.reload();
  }

  get monthLabel(): string {
    const label = new Date(this.viewYear, this.viewMonth - 1, 1)
      .toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  get isCurrentMonth(): boolean {
    return this.today.startsWith(`${this.viewYear}-${String(this.viewMonth).padStart(2, '0')}`);
  }

  prevMonth(): void { this.shiftMonth(-1); }
  nextMonth(): void { this.shiftMonth(1); }

  goToday(): void {
    const [y, m] = this.today.split('-').map(Number);
    this.select(this.today);
    if (y !== this.viewYear || m !== this.viewMonth) {
      this.viewYear  = y;
      this.viewMonth = m;
      this.reload();
    }
  }

  select(iso: string): void {
    this.selectedDate = iso;
    this.selectedDateChange.emit(iso);
  }

  /** Recarrega as contagens do mês visível (chamado pelo pai após salvar prontuário). */
  reload(): void {
    const ano = this.viewYear;
    const mes = this.viewMonth;
    this.weeks   = this.buildWeeks(ano, mes, []);
    this.loading = true;
    this.error   = false;

    this.api.getSessoesMes(ano, mes).subscribe({
      next: (sessoes) => {
        if (ano !== this.viewYear || mes !== this.viewMonth) return; // resposta de mês antigo
        this.weeks   = this.buildWeeks(ano, mes, sessoes);
        this.loading = false;
      },
      error: () => {
        if (ano !== this.viewYear || mes !== this.viewMonth) return;
        this.loading = false;
        this.error   = true;
      },
    });
  }

  private shiftMonth(delta: number): void {
    const d = new Date(this.viewYear, this.viewMonth - 1 + delta, 1);
    this.viewYear  = d.getFullYear();
    this.viewMonth = d.getMonth() + 1;
    this.reload();
  }

  /** Monta semanas de segunda a sexta (fim de semana é bloqueado no agendamento). */
  private buildWeeks(ano: number, mes: number, sessoes: SessaoApi[]): (CalendarDay | null)[][] {
    const counts = new Map<string, { sessoes: number; avaliacoes: number }>();
    for (const s of sessoes) {
      if (STATUS_INATIVOS.includes(s.status?.toLowerCase())) continue;
      const iso = toIso(new Date(s.dataHora));
      const c = counts.get(iso) ?? { sessoes: 0, avaliacoes: 0 };
      if (TIPOS_AVALIACAO.includes(s.tipo?.toLowerCase())) c.avaliacoes++; else c.sessoes++;
      counts.set(iso, c);
    }

    this.totalSessoes    = 0;
    this.totalAvaliacoes = 0;
    const weeks: (CalendarDay | null)[][] = [];
    let week: (CalendarDay | null)[] = [];
    const ultimoDia = new Date(ano, mes, 0).getDate();

    for (let d = 1; d <= ultimoDia; d++) {
      const date = new Date(ano, mes - 1, d);
      const dow  = date.getDay();
      if (dow === 0 || dow === 6) continue;

      const col = dow - 1;
      if (col === 0 && week.length) { weeks.push(week); week = []; }
      while (week.length < col) week.push(null);

      const iso = toIso(date);
      const c   = counts.get(iso) ?? { sessoes: 0, avaliacoes: 0 };
      this.totalSessoes    += c.sessoes;
      this.totalAvaliacoes += c.avaliacoes;
      week.push({ iso, day: d, ...c });
    }
    if (week.length) {
      while (week.length < 5) week.push(null);
      weeks.push(week);
    }
    return weeks;
  }
}
