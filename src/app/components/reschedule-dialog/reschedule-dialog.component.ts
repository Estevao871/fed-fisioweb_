import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, DisponibilidadeApi } from '../../core/api.service';

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
  @Input()  hasSerie = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() rescheduled = new EventEmitter<void>();

  date = '';
  time = '';
  escopo = 'SOMENTE_ESTA';
  motivo = '';
  loading = false;
  loadingSlots = false;
  success = false;
  error = '';

  slots: DisponibilidadeApi[] = [];

  get dateMin(): string {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  }
  get isValid(): boolean { return !!(this.date && this.time); }
  get allSlotsOccupied(): boolean { return this.slots.length > 0 && this.slots.every(s => !s.disponivel); }

  constructor(private readonly api: ApiService) {}

  ngOnChanges(): void {
    if (this.open) {
      this.date = '';
      this.time = '';
      this.escopo = 'SOMENTE_ESTA';
      this.motivo = '';
      this.loading = false;
      this.success = false;
      this.error = '';
      this.slots = [];
    }
  }

  onDateChange(): void {
    this.time = '';
    this.error = '';
    if (!this.date) { this.slots = []; return; }
    this.loadingSlots = true;
    this.api.getDisponibilidade(this.date, this.appointmentId).subscribe({
      next: (s) => { this.slots = s; this.loadingSlots = false; },
      error: () => { this.slots = []; this.loadingSlots = false; },
    });
  }

  slotClass(slot: DisponibilidadeApi): string {
    if (!slot.disponivel) return 'slot-cheio';
    return this.time === slot.horario ? 'slot-selected' : 'slot-livre';
  }

  slotLabel(slot: DisponibilidadeApi): string {
    return slot.disponivel ? slot.horario : `${slot.horario} (cheio)`;
  }

  selectSlot(slot: DisponibilidadeApi): void {
    if (!slot.disponivel) return;
    this.time = slot.horario;
  }

  confirmar(): void {
    if (!this.isValid || this.loading) return;
    this.loading = true;
    this.error = '';

    /* Monta Instant no formato que Spring desserializa */
    const [y, m, d] = this.date.split('-');
    const [h, min] = this.time.split(':');
    const dt = new Date(+y, +m - 1, +d, +h, +min);
    const dataHoraInstant = dt.toISOString(); /* UTC — Spring Instant */

    this.api.remarcarSessaoV2(this.appointmentId, {
      dataHora: dataHoraInstant,
      escopo: this.escopo,
      motivo: this.motivo || undefined,
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.rescheduled.emit();
        setTimeout(() => { this.openChange.emit(false); this.success = false; }, 1500);
      },
      error: (err) => {
        this.loading = false;
        const msg = (err as { error?: { mensagem?: string } })?.error?.mensagem;
        this.error = msg ?? 'Não foi possível reagendar. Verifique o horário escolhido.';
      },
    });
  }

  close(): void { this.openChange.emit(false); }
}
