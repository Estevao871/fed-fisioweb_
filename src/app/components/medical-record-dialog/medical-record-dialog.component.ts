import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, AvaliacaoDetalheApi, SessaoHistoricoApi } from '../../core/api.service';

interface ExerciseItem { id: string; name: string; }

const CONDUTA_OPTIONS = [
  'Cinesioterapia', 'Eletroterapia', 'Termoterapia',
  'Hidroterapia', 'Terapia Manual', 'RPG', 'Pilates Terapêutico',
  'Mobilização Articular', 'Acupuntura', 'Dry Needling',
];

@Component({
  selector: 'app-medical-record-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medical-record-dialog.component.html',
  styleUrl: './medical-record-dialog.component.scss',
})
export class MedicalRecordDialogComponent implements OnChanges {
  @Input()  open = false;
  @Input()  patientName = '';
  @Input()  patientAge = 0;
  @Input()  condition = '';
  @Input()  isInitialEvaluation = false;
  @Input()  avaliacaoId = '';
  @Input()  sessaoId = '';
  @Input()  pacienteId = '';
  @Output() openChange = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<void>();

  readonly condutaOptions = CONDUTA_OPTIONS;

  tab: 'avaliacao' | 'evolucao' | 'historico' = 'avaliacao';
  saving = false;
  saveSuccess = false;
  error = '';
  loadingHistorico = false;
  loadingAvaliacao = false;
  avaliacaoJaFinalizada = false;

  /** Sessão selecionada a partir do histórico (override do input sessaoId) */
  activeSessaoId = '';
  /** Modo leitura da ficha clínica aberta a partir do histórico */
  viewingHistoryEvaluation = false;
  /** AvaliacaoId encontrado via by-paciente para mostrar o botão "Ver Ficha" */
  historicAvaliacaoId = '';

  /* ── Avaliação inicial ── */
  medico = '';
  hda = '';
  hpp = '';
  testesRealizados = '';
  goniometria = '';
  condutaSelecionada: string[] = [];
  diagnostico = '';
  prognostico = '';
  desfecho = '';
  comodidade = '';
  medicamentos = '';
  cirurgia = '';

  /* ── Evolução de sessão ── */
  sessionNotes = '';
  sessionPain: number | null = null;
  sessionMobility: number | null = null;
  sessionExercises: ExerciseItem[] = [];

  /* ── Histórico da API ── */
  sessionHistory: SessaoHistoricoApi[] = [];

  get today(): string { return new Date().toLocaleDateString('pt-BR'); }

  get effectiveSessaoId(): string { return this.activeSessaoId || this.sessaoId; }

  get conditionLabel(): string {
    const m: Record<string, string> = {
      aguardando: 'Aguardando avaliação', em_atendimento: 'Em avaliação',
      finalizada: 'Avaliação concluída', sem_avaliacao: 'Sem avaliação',
    };
    return m[this.condition] ?? this.condition;
  }

  get currentTabHasSave(): boolean {
    if (this.tab === 'avaliacao' && this.isInitialEvaluation && !!this.avaliacaoId && !this.avaliacaoJaFinalizada) return true;
    if (this.tab === 'avaliacao' && this.viewingHistoryEvaluation) return false;
    if (this.tab === 'evolucao' && !!this.effectiveSessaoId) return true;
    return false;
  }

  get saveLabel(): string {
    if (this.saving) return 'Salvando...';
    return this.tab === 'avaliacao' ? 'Salvar Avaliação' : 'Salvar Evolução';
  }

  constructor(private readonly api: ApiService) {}

  ngOnChanges(): void {
    if (this.open) {
      /* Define aba inicial */
      if (this.isInitialEvaluation) {
        this.tab = 'avaliacao';
      } else if (this.sessaoId) {
        this.tab = 'evolucao';
      } else {
        this.tab = 'historico'; // abre direto no histórico quando aberto pela lista de pacientes
      }

      this.saveSuccess = false;
      this.error = '';
      this.resetForms();

      if (this.isInitialEvaluation && this.avaliacaoId) {
        this.loadAvaliacaoSalva();
      }
      if (this.pacienteId) {
        this.loadHistorico();
        if (!this.isInitialEvaluation) {
          this.loadAvaliacaoPaciente();
        }
      }
    }
  }

  setTab(t: 'avaliacao' | 'evolucao' | 'historico'): void {
    this.tab = t;
    this.error = '';
    this.saveSuccess = false;
    /* Ao voltar para histórico, reseta modos especiais */
    if (t === 'historico') {
      this.activeSessaoId = '';
      this.viewingHistoryEvaluation = false;
    }
    if (t === 'historico' && this.pacienteId && this.sessionHistory.length === 0) {
      this.loadHistorico();
    }
  }

  toggleConduta(c: string): void {
    const i = this.condutaSelecionada.indexOf(c);
    if (i >= 0) this.condutaSelecionada.splice(i, 1);
    else this.condutaSelecionada.push(c);
  }

  isCondutaSelected(c: string): boolean { return this.condutaSelecionada.includes(c); }

  isHoje(dataHora: string): boolean {
    const d = new Date(dataHora);
    const hoje = new Date();
    return d.toDateString() === hoje.toDateString();
  }

  /** Abre a ficha clínica do paciente em modo leitura a partir do histórico */
  verFichaClinica(): void {
    if (!this.historicAvaliacaoId) return;
    this.loadingAvaliacao = true;
    this.api.getAvaliacaoDetalhe(this.historicAvaliacaoId).subscribe({
      next: (av) => {
        this.populateAvaliacao(av);
        this.viewingHistoryEvaluation = true;
        this.tab = 'avaliacao';
      },
      error: () => { this.loadingAvaliacao = false; },
    });
  }

  /** Ativa o registro de evolução para uma sessão específica do histórico */
  registrarEvolucaoParaSessao(sessao: SessaoHistoricoApi): void {
    this.activeSessaoId = sessao.id;
    /* Pré-preenche dados já salvos, se houver */
    this.sessionNotes = sessao.observacoes ?? '';
    this.sessionPain = sessao.nivelDor;
    this.sessionMobility = sessao.mobilidade;
    this.sessionExercises = (sessao.exercicios ?? []).map(e => ({ id: crypto.randomUUID(), name: e }));
    this.tab = 'evolucao';
  }

  private loadAvaliacaoSalva(): void {
    this.loadingAvaliacao = true;
    this.api.getAvaliacaoDetalhe(this.avaliacaoId).subscribe({
      next: (av) => this.populateAvaliacao(av),
      error: () => { this.loadingAvaliacao = false; },
    });
  }

  private loadAvaliacaoPaciente(): void {
    this.api.getAvaliacaoPorPaciente(this.pacienteId).subscribe({
      next: (av) => { this.historicAvaliacaoId = av.id; },
      error: () => {},
    });
  }

  private populateAvaliacao(av: AvaliacaoDetalheApi): void {
    this.loadingAvaliacao = false;
    this.avaliacaoJaFinalizada = av.status === 'finalizada';
    this.medico = av.medico ?? '';
    this.hda = av.hda ?? '';
    this.hpp = av.hpp ?? '';
    this.testesRealizados = av.testesRealizados ?? '';
    this.goniometria = av.goniometria ?? '';
    this.diagnostico = av.diagnostico ?? '';
    this.prognostico = av.prognostico ?? '';
    this.desfecho = av.desfecho ?? '';
    this.comodidade = av.comodidade ?? '';
    this.medicamentos = av.medicamentos ?? '';
    this.cirurgia = av.cirurgia ?? '';
    if (av.condutaTerapeutica) {
      this.condutaSelecionada = av.condutaTerapeutica.split(', ').filter(s => s.trim());
    }
  }

  private loadHistorico(): void {
    this.loadingHistorico = true;
    this.api.getHistoricoSessoes(this.pacienteId).subscribe({
      next: (h) => { this.sessionHistory = h; this.loadingHistorico = false; },
      error: () => { this.loadingHistorico = false; },
    });
  }

  addExercise(): void { this.sessionExercises.push({ id: crypto.randomUUID(), name: '' }); }
  removeExercise(i: number): void { this.sessionExercises.splice(i, 1); }

  save(): void {
    if (this.saving) return;
    this.error = '';
    this.saveSuccess = false;

    if (this.tab === 'avaliacao' && this.isInitialEvaluation && this.avaliacaoId) {
      this.saveEvaluation();
    } else if (this.tab === 'evolucao' && this.effectiveSessaoId) {
      this.saveEvolucao();
    } else {
      this.close();
    }
  }

  private saveEvaluation(): void {
    this.saving = true;
    this.api.finalizarAvaliacao({
      avaliacaoId: this.avaliacaoId,
      medico: this.medico || undefined,
      hda: this.hda || undefined,
      hpp: this.hpp || undefined,
      testesRealizados: this.testesRealizados || undefined,
      goniometria: this.goniometria || undefined,
      condutaTerapeutica: this.condutaSelecionada.join(', ') || undefined,
      diagnostico: this.diagnostico || undefined,
      prognostico: this.prognostico || undefined,
      desfecho: this.desfecho || undefined,
      comodidade: this.comodidade || undefined,
      medicamentos: this.medicamentos || undefined,
      cirurgia: this.cirurgia || undefined,
    }).subscribe({
      next: () => {
        if (this.sessaoId) {
          this.api.marcarAvaliada(this.sessaoId).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveSuccess(),
          });
        } else {
          this.onSaveSuccess();
        }
      },
      error: () => {
        this.saving = false;
        this.error = 'Não foi possível salvar a avaliação. Verifique os dados e tente novamente.';
      },
    });
  }

  private saveEvolucao(): void {
    this.saving = true;
    this.api.registrarEvolucao(this.effectiveSessaoId, {
      observacoes: this.sessionNotes || undefined,
      nivelDor: this.sessionPain,
      mobilidade: this.sessionMobility,
      exercicios: this.sessionExercises.map(e => e.name).filter(n => n.trim()),
    }).subscribe({
      next: () => {
        this.saving = false;
        this.saveSuccess = true;
        this.saved.emit();
        if (this.pacienteId) {
          this.api.getHistoricoSessoes(this.pacienteId).subscribe({
            next: (h) => { this.sessionHistory = h; },
            error: () => {},
          });
        }
        setTimeout(() => { this.saveSuccess = false; }, 3000);
      },
      error: () => {
        this.saving = false;
        this.error = 'Não foi possível salvar a evolução.';
      },
    });
  }

  private onSaveSuccess(): void {
    this.saving = false;
    this.saveSuccess = true;
    this.saved.emit();
    setTimeout(() => {
      this.saveSuccess = false;
      this.openChange.emit(false);
      this.resetForms();
    }, 1200);
  }

  close(): void {
    this.openChange.emit(false);
    this.resetForms();
  }

  formatData(iso: string): string {
    return new Date(iso).toLocaleDateString('pt-BR');
  }

  formatStatus(s: string): string {
    const m: Record<string, string> = {
      compareceu: 'Concluída', avaliada: 'Concluída', realizada: 'Realizada',
      faltou: 'Faltou', cancelada: 'Cancelada',
      marcada: 'Agendada', remarcada: 'Reagendada',
    };
    return m[s] ?? s;
  }

  statusBadge(s: string): string {
    const m: Record<string, string> = {
      compareceu: 'badge-green', avaliada: 'badge-green', realizada: 'badge-green',
      faltou: 'badge-red', cancelada: 'badge-gray',
      marcada: 'badge-blue', remarcada: 'badge-purple',
    };
    return m[s] ?? 'badge-gray';
  }

  temEvolucao(s: SessaoHistoricoApi): boolean {
    return !!(s.observacoes || s.nivelDor != null || s.exercicios?.length);
  }

  private resetForms(): void {
    this.medico = ''; this.hda = ''; this.hpp = '';
    this.testesRealizados = ''; this.goniometria = ''; this.condutaSelecionada = [];
    this.diagnostico = ''; this.prognostico = ''; this.desfecho = '';
    this.comodidade = ''; this.medicamentos = ''; this.cirurgia = '';
    this.sessionNotes = ''; this.sessionPain = null; this.sessionMobility = null;
    this.sessionExercises = []; this.sessionHistory = [];
    this.saving = false; this.error = ''; this.avaliacaoJaFinalizada = false;
    this.activeSessaoId = ''; this.viewingHistoryEvaluation = false; this.historicAvaliacaoId = '';
  }
}
