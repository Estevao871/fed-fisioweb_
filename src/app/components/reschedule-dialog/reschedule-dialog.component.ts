import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { HORARIOS_ATENDIMENTO } from '../../core/agenda';

@Component({
  selector: 'app-reschedule-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reschedule-dialog.component.html',
  styleUrl: './reschedule-dialog.component.scss',
})
export class RescheduleDialogComponent implements OnChanges {
  @Input()  open = false;
  @Input()  patientName = '';
  @Input()  appointmentId = '';
  /** Horário atual, "dd/MM/yyyy às HH:mm" — mostrado no subtítulo e usado para preencher o formulário. */
  @Input()  atual = '';
  @Input()  hasSerie = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() rescheduled = new EventEmitter<void>();

  readonly horarios = HORARIOS_ATENDIMENTO;
  readonly maxMotivo = 200;

  date = '';
  time = '';
  escopo = 'SOMENTE_ESTA';
  motivo = '';
  loading = false;
  loadingSlots = false;
  success = false;
  error = '';

  private dataOriginal = '';
  private horaOriginal = '';
  private disponivel: Record<string, boolean> = {};

  constructor(private readonly api: ApiService) {}

  get dateMin(): string {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  }

  get fimDeSemana(): boolean {
    if (!this.date) return false;
    const dia = new Date(`${this.date}T12:00:00`).getDay();
    return dia === 0 || dia === 6;
  }

  get semMudanca(): boolean {
    return this.date === this.dataOriginal && this.time === this.horaOriginal && this.escopo === 'SOMENTE_ESTA';
  }

  get isValid(): boolean {
    return !!(this.date && this.time) && !this.fimDeSemana && this.date >= this.dateMin && this.livre(this.time) && !this.semMudanca;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open'] || !this.open) return;

    const m = this.atual.match(/^(\d{2})\/(\d{2})\/(\d{4}) às (\d{2}:\d{2})$/);
    this.dataOriginal = m ? `${m[3]}-${m[2]}-${m[1]}` : '';
    this.horaOriginal = m ? m[4] : '';
    this.date = this.dataOriginal;
    this.time = this.horaOriginal;
    this.escopo = 'SOMENTE_ESTA';
    this.motivo = '';
    this.loading = false;
    this.success = false;
    this.error = '';
    this.disponivel = {};
    if (this.date) this.carregarHorarios();
  }

  onDateChange(): void {
    this.error = '';
    this.carregarHorarios();
  }

  private carregarHorarios(): void {
    this.disponivel = {};
    if (!this.date || this.fimDeSemana) return;
    this.loadingSlots = true;
    // excludeId: a própria sessão não conta como ocupando o horário atual dela
    this.api.getDisponibilidade(this.date, this.appointmentId).subscribe({
      next: (lista) => {
        const map: Record<string, boolean> = {};
        for (const s of lista) map[s.horario] = s.disponivel;
        this.disponivel = map;
        if (this.time && map[this.time] === false) this.time = '';
        this.loadingSlots = false;
      },
      error: () => { this.loadingSlots = false; },
    });
  }

  livre(h: string): boolean {
    return this.disponivel[h] !== false;
  }

  get dataFormatada(): string {
    if (!this.date) return '';
    const [a, m, d] = this.date.split('-');
    return `${d}/${m}/${a}`;
  }

  confirmar(): void {
    if (!this.isValid || this.loading) return;
    this.loading = true;
    this.error = '';

    // A API recebe um Instant (UTC); a data/hora escolhida é no fuso local
    const [y, m, d] = this.date.split('-');
    const [h, min] = this.time.split(':');
    const dataHora = new Date(+y, +m - 1, +d, +h, +min).toISOString();

    this.api.remarcarSessaoV2(this.appointmentId, {
      dataHora,
      escopo: this.escopo,
      motivo: this.motivo.trim() || undefined,
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.rescheduled.emit();
      },
      error: (err) => {
        this.loading = false;
        const msg = (err as { error?: { mensagem?: string } })?.error?.mensagem;
        this.error = msg ?? 'Não foi possível reagendar. Confira o horário escolhido.';
      },
    });
  }

  close(): void {
    if (this.loading) return;
    this.openChange.emit(false);
  }

  onBackdrop(ev: MouseEvent): void {
    if (ev.target === ev.currentTarget) this.close();
  }
}
