import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, UsuarioApi } from '../../core/api.service';
import { isValidEmail, isValidPhone } from '../../core/validators';

@Component({
  selector: 'app-scheduling-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scheduling-dialog.component.html',
  styleUrl: './scheduling-dialog.component.scss',
})
export class SchedulingDialogComponent implements OnChanges {
  @Input()  open = false;
  @Input()  contactName = '';
  @Input()  contactPhone = '';
  @Input()  contactEmail = '';
  @Input()  contactId = '';
  @Output() openChange = new EventEmitter<boolean>();
  @Output() scheduled  = new EventEmitter<void>();

  step = 1;
  stepLabels = ['Dados', 'Data/Hora', 'Confirmação'];

  patientName = '';
  patientPhone = '';
  patientEmail = '';
  appointmentType: 'avaliacao' | 'sessao' | 'reavaliacao' = 'avaliacao';
  date = this.today;
  time = '09:30';
  times = [
    '08:00','08:45','09:30','10:15','11:00','11:45',
    '13:00','13:45','14:00','14:45','15:30','16:15',
    '17:00','17:45','18:30','19:00',
  ];

  fisioterapeutas: UsuarioApi[] = [];
  fisioterapeutaId = '';
  horariosDisponiveis: Record<string, boolean> = {};
  loadingHorarios = false;
  contagemHojePorFisio: Record<string, number> = {};

  loading = false;
  error = '';
  success = false;
  lookingUp = false;
  cadastroEncontrado = false;

  get today(): string { return new Date().toISOString().split('T')[0]; }

  get typeLabel(): string {
    const map: Record<string, string> = {
      avaliacao: 'Avaliação Inicial',
      sessao: 'Sessão de Tratamento',
      reavaliacao: 'Reavaliação',
    };
    return map[this.appointmentType] ?? this.appointmentType;
  }

  get patientPhoneValido(): boolean { return isValidPhone(this.patientPhone); }
  get patientEmailValido(): boolean { return !this.patientEmail.trim() || isValidEmail(this.patientEmail); }

  get isStep1Valid(): boolean {
    return !!(this.patientName.trim() && this.patientPhone.trim() && this.patientPhoneValido
      && this.patientEmailValido && this.fisioterapeutaId);
  }

  get isStep2Valid(): boolean {
    return !!(this.date && this.time && this.horarioSelecionadoDisponivel);
  }

  get fisioterapeutaSelecionadaNome(): string {
    return this.fisioterapeutas.find(f => f.id === this.fisioterapeutaId)?.nome ?? '—';
  }

  contagemHoje(fisioId: string): number {
    return this.contagemHojePorFisio[fisioId] ?? 0;
  }

  get horarioSelecionadoDisponivel(): boolean {
    return this.horariosDisponiveis[this.time] !== false;
  }

  get algumHorarioDisponivel(): boolean {
    return this.times.some(t => this.horariosDisponiveis[t] !== false);
  }

  constructor(private readonly api: ApiService) {}

  ngOnChanges(): void {
    if (this.open) {
      this.success = false;
      this.error = '';
      this.loading = false;
      if (this.fisioterapeutas.length === 0) {
        this.api.getFisioterapeutas().subscribe({
          next: (lista) => { this.fisioterapeutas = lista; },
          error: () => { this.fisioterapeutas = []; },
        });
      }
      this.loadContagemHoje();
    }
    if (this.contactName)  this.patientName  = this.contactName;
    if (this.contactPhone) this.patientPhone = this.contactPhone;
    if (this.contactEmail) this.patientEmail = this.contactEmail;
  }

  private loadContagemHoje(): void {
    this.api.getSessoes({ date: this.today }).subscribe({
      next: (sessoes) => {
        const contagem: Record<string, number> = {};
        for (const s of sessoes) {
          if (!s.fisioterapeutaId || s.status === 'cancelada' || s.status === 'faltou') continue;
          contagem[s.fisioterapeutaId] = (contagem[s.fisioterapeutaId] ?? 0) + 1;
        }
        this.contagemHojePorFisio = contagem;
      },
      error: () => { this.contagemHojePorFisio = {}; },
    });
  }

  onDateOrFisioChange(): void {
    this.horariosDisponiveis = {};
    if (!this.date || !this.fisioterapeutaId) return;

    this.loadingHorarios = true;
    this.api.getDisponibilidade(this.date, undefined, this.fisioterapeutaId).subscribe({
      next: (lista) => {
        const map: Record<string, boolean> = {};
        for (const d of lista) map[d.horario] = d.disponivel;
        this.horariosDisponiveis = map;
        if (this.horariosDisponiveis[this.time] === false) {
          const proximo = this.times.find(t => this.horariosDisponiveis[t] !== false);
          if (proximo) this.time = proximo;
        }
        this.loadingHorarios = false;
      },
      error: () => { this.loadingHorarios = false; },
    });
  }

  onEmailBlur(): void {
    const email = this.patientEmail.trim();
    if (!email || !isValidEmail(email)) return;

    this.lookingUp = true;
    this.cadastroEncontrado = false;

    this.api.buscarLeadPorEmail(email).subscribe({
      next: (lead) => {
        this.patientName  = `${lead.nome} ${lead.sobrenome}`.trim();
        this.patientPhone = lead.telefone;
        this.appointmentType  = 'reavaliacao';
        this.cadastroEncontrado = true;
        this.lookingUp = false;
      },
      error: () => {
        this.lookingUp = false;
      },
    });
  }

  next(): void {
    if (this.step === 1 && !this.isStep1Valid) return;
    if (this.step === 2 && !this.isStep2Valid) return;
    const indoParaStep2 = this.step === 1;
    this.step = Math.min(3, this.step + 1);
    if (indoParaStep2) this.onDateOrFisioChange();
  }

  back(): void { this.step = Math.max(1, this.step - 1); }

  confirm(): void {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    const dataHora = `${this.date}T${this.time}:00`;

    if (this.contactId) {
      this.api.agendarAvaliacao(this.contactId, { dataHora, modoAgendamento: 'AVULSO', fisioterapeutaId: this.fisioterapeutaId })
        .subscribe({
          next: () => this.onSuccess(),
          error: (err) => this.onError(err),
        });
    } else {
      const parts = this.patientName.trim().split(' ');
      const nome = parts[0];
      const sobrenome = parts.slice(1).join(' ') || nome;

      this.api.criarLead({
        nome,
        sobrenome,
        telefone: this.patientPhone,
        email: this.patientEmail || `${nome.toLowerCase()}.contato@fisiolife.temp`,
      }).subscribe({
        next: (lead) => {
          this.api.agendarAvaliacao(lead.id, { dataHora, modoAgendamento: 'AVULSO', fisioterapeutaId: this.fisioterapeutaId })
            .subscribe({
              next: () => this.onSuccess(),
              error: (err) => this.onError(err),
            });
        },
        error: (err) => this.onError(err),
      });
    }
  }

  private onSuccess(): void {
    this.loading = false;
    this.success = true;
    this.scheduled.emit();
    setTimeout(() => {
      this.openChange.emit(false);
      this.reset();
    }, 1500);
  }

  private onError(err: unknown): void {
    this.loading = false;
    const msg = (err as { error?: { mensagem?: string } })?.error?.mensagem;
    this.error = msg ?? 'Erro ao agendar. Verifique as informações.';
    this.step = 3;
  }

  close(): void {
    this.openChange.emit(false);
    this.reset();
  }

  private reset(): void {
    this.step = 1;
    this.patientName = '';
    this.patientPhone = '';
    this.patientEmail = '';
    this.appointmentType = 'avaliacao';
    this.date = this.today;
    this.time = '09:30';
    this.fisioterapeutaId = '';
    this.horariosDisponiveis = {};
    this.loading = false;
    this.error = '';
    this.success = false;
    this.lookingUp = false;
    this.cadastroEncontrado = false;
  }
}
