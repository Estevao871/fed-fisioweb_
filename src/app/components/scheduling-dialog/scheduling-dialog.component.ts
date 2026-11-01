import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, UsuarioApi } from '../../core/api.service';
import { formatarTelefone, isValidPhone } from '../../core/validators';
import { HORARIOS_ATENDIMENTO } from '../../core/agenda';

/** Pedido de avaliação (lead) que pode ser escolhido no campo Paciente. */
export interface LeadOpcao {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  queixa: string;
}

/** Paciente já em tratamento (para agendar uma sessão avulsa). */
export interface PacienteOpcao {
  id: string;
  nome: string;
  telefone: string;
  fisioterapeutaId: string;
}

type Tipo = 'avaliacao' | 'sessao';

@Component({
  selector: 'app-scheduling-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scheduling-dialog.component.html',
  styleUrl: './scheduling-dialog.component.scss',
})
export class SchedulingDialogComponent implements OnChanges {
  @Input()  open = false;
  @Input()  leads: LeadOpcao[] = [];
  @Input()  pacientes: PacienteOpcao[] = [];
  @Input()  fisioterapeutas: UsuarioApi[] = [];
  /** Lead escolhido em "Agendar avaliação" na triagem — já vem preenchido. */
  @Input()  leadInicialId = '';
  @Output() openChange = new EventEmitter<boolean>();
  @Output() scheduled  = new EventEmitter<void>();

  readonly horarios = HORARIOS_ATENDIMENTO;
  readonly maxObs = 200;

  tipo: Tipo = 'avaliacao';
  nome = '';
  telefone = '';
  leadId = '';
  pacienteId = '';
  fisioterapeutaId = '';
  date = '';
  time = '';
  observacao = '';

  horariosDisponiveis: Record<string, boolean> = {};
  loadingHorarios = false;
  tocado: Record<string, boolean> = {};

  loading = false;
  error = '';
  success = false;

  constructor(private readonly api: ApiService) {}

  get today(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open'] && this.open) {
      this.reset();
      if (this.leadInicialId) {
        const lead = this.leads.find(l => l.id === this.leadInicialId);
        if (lead) this.aplicarLead(lead);
      }
    }
  }

  /* ── Paciente ── */

  get sugestoes(): { id: string; nome: string }[] {
    return this.tipo === 'avaliacao' ? this.leads : this.pacientes;
  }

  setTipo(tipo: Tipo): void {
    if (this.tipo === tipo) return;
    this.tipo = tipo;
    this.leadId = '';
    this.pacienteId = '';
    this.onNomeChange(this.nome);
  }

  /** Ao digitar/escolher o nome, liga ao lead ou paciente da lista quando o nome bate. */
  onNomeChange(valor: string): void {
    this.nome = valor;
    const alvo = valor.trim().toLowerCase();

    if (this.tipo === 'avaliacao') {
      const lead = this.leads.find(l => l.nome.toLowerCase() === alvo);
      if (lead) { this.aplicarLead(lead); return; }
      this.leadId = '';
    } else {
      const p = this.pacientes.find(x => x.nome.toLowerCase() === alvo);
      this.pacienteId = p?.id ?? '';
      if (p) {
        if (p.telefone) this.telefone = p.telefone;
        this.fisioterapeutaId = p.fisioterapeutaId;
        this.carregarHorarios();
      }
    }
  }

  private aplicarLead(lead: LeadOpcao): void {
    this.tipo = 'avaliacao';
    this.leadId = lead.id;
    this.nome = lead.nome;
    this.telefone = lead.telefone;
    if (!this.observacao && lead.queixa) this.observacao = lead.queixa.slice(0, this.maxObs);
  }

  onTelefone(valor: string): void {
    this.telefone = formatarTelefone(valor);
  }

  /* ── Data e horário ── */

  get fimDeSemana(): boolean {
    if (!this.date) return false;
    const dia = new Date(`${this.date}T12:00:00`).getDay();
    return dia === 0 || dia === 6;
  }

  carregarHorarios(): void {
    this.horariosDisponiveis = {};
    if (!this.date || this.fimDeSemana) return;

    this.loadingHorarios = true;
    this.api.getDisponibilidade(this.date, undefined, this.fisioterapeutaId || undefined).subscribe({
      next: (lista) => {
        const map: Record<string, boolean> = {};
        for (const d of lista) map[d.horario] = d.disponivel;
        this.horariosDisponiveis = map;
        if (this.time && map[this.time] === false) this.time = '';
        this.loadingHorarios = false;
      },
      error: () => { this.loadingHorarios = false; },
    });
  }

  livre(h: string): boolean {
    return this.horariosDisponiveis[h] !== false;
  }

  /* ── Validação ── */

  tocar(campo: string): void { this.tocado[campo] = true; }

  erro(campo: 'nome' | 'telefone' | 'fisio' | 'date' | 'time'): string {
    if (!this.tocado[campo]) return '';
    switch (campo) {
      case 'nome':
        if (!this.nome.trim()) return 'Informe o paciente.';
        if (this.tipo === 'sessao' && !this.pacienteId) return 'Escolha um paciente em tratamento da lista.';
        return '';
      case 'telefone':
        if (this.tipo === 'sessao' && this.pacienteId && !this.telefone) return '';
        if (!this.telefone.trim()) return 'Informe o telefone.';
        return isValidPhone(this.telefone) ? '' : 'Telefone incompleto.';
      case 'fisio':
        return this.tipo === 'avaliacao' && !this.fisioterapeutaId ? 'Escolha a fisioterapeuta.' : '';
      case 'date':
        if (!this.date) return 'Escolha a data.';
        if (this.date < this.today) return 'A data já passou.';
        return this.fimDeSemana ? 'Atendemos de segunda a sexta.' : '';
      case 'time':
        if (!this.time) return 'Escolha um horário.';
        return this.livre(this.time) ? '' : 'Esse horário lotou. Escolha outro.';
    }
    return '';
  }

  private valido(): boolean {
    (['nome', 'telefone', 'fisio', 'date', 'time'] as const).forEach(c => this.tocar(c));
    return (['nome', 'telefone', 'fisio', 'date', 'time'] as const).every(c => !this.erro(c));
  }

  get fisioDoPaciente(): string {
    return this.fisioterapeutas.find(f => f.id === this.fisioterapeutaId)?.nome ?? 'Sem fisioterapeuta definida';
  }

  /* ── Envio ── */

  confirm(): void {
    if (this.loading || !this.valido()) return;
    this.loading = true;
    this.error = '';

    const dataHora = `${this.date}T${this.time}:00`;
    const observacao = this.observacao.trim() || undefined;

    if (this.tipo === 'sessao') {
      this.api.agendarSessoesPaciente(this.pacienteId, { dataHora, observacao, modoAgendamento: 'AVULSO' })
        .subscribe({ next: () => this.onSuccess(), error: (err) => this.onError(err) });
      return;
    }

    const agendar = (leadId: string) =>
      this.api.agendarAvaliacao(leadId, { dataHora, observacao, modoAgendamento: 'AVULSO', fisioterapeutaId: this.fisioterapeutaId })
        .subscribe({ next: () => this.onSuccess(), error: (err) => this.onError(err) });

    if (this.leadId) {
      agendar(this.leadId);
      return;
    }

    // Paciente novo (ligou ou veio no balcão): cria o pedido e já agenda a avaliação.
    const [nome, ...resto] = this.nome.trim().split(/\s+/);
    const sufixo = Math.random().toString(36).slice(2, 8);
    this.api.criarLead({
      nome,
      sobrenome: resto.join(' '),
      telefone: this.telefone,
      email: `${nome.toLowerCase()}.${sufixo}@contato.temp`,
      observacao,
    }).subscribe({
      next: (lead) => agendar(lead.id),
      error: (err) => this.onError(err),
    });
  }

  private onSuccess(): void {
    this.loading = false;
    this.success = true;
    this.scheduled.emit();
  }

  private onError(err: unknown): void {
    this.loading = false;
    const msg = (err as { error?: { mensagem?: string } })?.error?.mensagem;
    this.error = msg ?? 'Não foi possível agendar. Confira os dados e tente novamente.';
  }

  get dataFormatada(): string {
    if (!this.date) return '';
    const [a, m, d] = this.date.split('-');
    return `${d}/${m}/${a}`;
  }

  close(): void {
    if (this.loading) return;
    this.openChange.emit(false);
  }

  onBackdrop(ev: MouseEvent): void {
    if (ev.target === ev.currentTarget) this.close();
  }

  private reset(): void {
    this.tipo = 'avaliacao';
    this.nome = '';
    this.telefone = '';
    this.leadId = '';
    this.pacienteId = '';
    this.fisioterapeutaId = '';
    this.date = '';
    this.time = '';
    this.observacao = '';
    this.horariosDisponiveis = {};
    this.tocado = {};
    this.loading = false;
    this.error = '';
    this.success = false;
  }
}
