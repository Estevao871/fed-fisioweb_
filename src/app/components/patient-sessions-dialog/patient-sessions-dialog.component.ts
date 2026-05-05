import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';

const DIAS = [
  { code: 'SEG', label: 'Segunda' },
  { code: 'TER', label: 'Terça' },
  { code: 'QUA', label: 'Quarta' },
  { code: 'QUI', label: 'Quinta' },
  { code: 'SEX', label: 'Sexta' },
];

const HORARIOS = Array.from({ length: 25 }, (_, i) => {
  const h = Math.floor(i / 2) + 8;
  const m = i % 2 === 0 ? '00' : '30';
  if (h > 19 || (h === 19 && m === '30')) return null;
  return `${String(h).padStart(2, '0')}:${m}`;
}).filter(Boolean) as string[];

@Component({
  selector: 'app-patient-sessions-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-sessions-dialog.component.html',
  styleUrl: './patient-sessions-dialog.component.scss',
})
export class PatientSessionsDialogComponent implements OnChanges {
  @Input()  open = false;
  @Input()  pacienteId = '';
  @Input()  avaliacaoId = '';
  @Input()  pacienteNome = '';
  @Output() openChange = new EventEmitter<boolean>();
  @Output() sessionsScheduled = new EventEmitter<void>();

  readonly dias = DIAS;
  readonly horarios = HORARIOS;

  quantidadeSessoes = 9;
  frequenciaSemanal = 2;
  horario = '09:00';
  dataInicio = '';
  diasSelecionados: string[] = ['SEG', 'QUA'];

  loading = false;
  success = false;
  error = '';

  get validadeEmDias(): number { return 30; }

  get semanasNecessarias(): number {
    return Math.ceil(this.quantidadeSessoes / this.frequenciaSemanal);
  }

  get diasNecessarios(): number { return this.semanasNecessarias * 7; }

  get cabeDentro(): boolean { return this.diasNecessarios <= this.validadeEmDias; }

  get avisoValidade(): string {
    if (this.cabeDentro) return `${this.quantidadeSessoes} sessões em ${this.semanasNecessarias} semanas — cabe nos 30 dias`;
    return `${this.diasNecessarios} dias necessários — excede os 30 dias. Aumente a frequência.`;
  }

  get dataInicioMin(): string {
    return new Date().toISOString().split('T')[0];
  }

  get isValid(): boolean {
    return !!(this.dataInicio && this.horario && this.quantidadeSessoes > 0
      && this.frequenciaSemanal > 0 && this.diasSelecionados.length > 0 && this.cabeDentro);
  }

  ngOnChanges(): void {
    if (this.open) {
      this.success = false;
      this.error = '';
      this.loading = false;
      this.dataInicio = '';
      this.quantidadeSessoes = 9;
      this.frequenciaSemanal = 2;
      this.horario = '09:00';
      this.diasSelecionados = ['SEG', 'QUA'];
    }
  }

  toggleDia(code: string): void {
    const idx = this.diasSelecionados.indexOf(code);
    if (idx >= 0) {
      this.diasSelecionados = this.diasSelecionados.filter(d => d !== code);
    } else {
      this.diasSelecionados = [...this.diasSelecionados, code];
    }
  }

  isDiaSelecionado(code: string): boolean {
    return this.diasSelecionados.includes(code);
  }

  confirmar(): void {
    if (!this.isValid || this.loading) return;

    this.loading = true;
    this.error = '';

    const dataHora = `${this.dataInicio}T${this.horario}:00`;

    this.api.agendarSessoesPaciente(this.pacienteId, {
      dataHora,
      avaliacaoId: this.avaliacaoId,
      modoAgendamento: 'RECORRENTE',
      quantidadeSessoes: this.quantidadeSessoes,
      frequenciaSemanal: this.frequenciaSemanal,
      diasSemanaPreferidos: this.diasSelecionados,
      validadeGuiaDias: 30,
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.sessionsScheduled.emit();
        setTimeout(() => { this.openChange.emit(false); }, 2000);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.mensagem ?? 'Erro ao agendar sessões. Verifique os horários.';
      },
    });
  }

  close(): void {
    this.openChange.emit(false);
  }

  constructor(private readonly api: ApiService) {}
}
