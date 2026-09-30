import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/* ── Response types ── */

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

export interface SessaoApi {
  id: string;
  leadId: string | null;
  pacienteId: string | null;
  pacienteNome: string | null;
  pacienteTelefone: string | null;
  dataHora: string;
  status: string;
  tipo: string;
  serieId: string | null;
  numeroOcorrencia: number | null;
  fisioterapeutaId: string | null;
  fisioterapeutaNome: string | null;
}

export interface PacienteAtivoApi {
  idPaciente: string;
  nome: string;
  ultimaSessao: string | null;
  proximaSessao: string | null;
  totalSessoes: number;
  sessoesRealizadas: number;
  statusClinico: string;
  fisioterapeutaId: string | null;
  fisioterapeutaNome: string | null;
}

export interface LeadApi {
  id: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  observacao: string | null;
  status: string;
  criadoEm: string;
}

export interface AvaliacaoPendenteApi {
  idSessao: string;
  idLead: string | null;
  idPaciente: string | null;
  nome: string | null;
  telefone: string | null;
  dataHora: string;
  status: string;
  origem: string;
}

export interface IniciarAvaliacaoApi {
  pacienteId: string;
  avaliacaoId: string;
  pacienteNome: string;
}

export interface AvaliacaoHistoricoApi {
  paciente: string;
  data: string | null;
  resumo: string;
  idAvaliacao: string;
}

export interface AvaliacaoDetalheApi {
  id: string;
  pacienteId: string;
  status: string;
  medico: string | null;
  hda: string | null;
  hpp: string | null;
  diagnostico: string | null;
  testesRealizados: string | null;
  goniometria: string | null;
  condutaTerapeutica: string | null;
  prognostico: string | null;
  desfecho: string | null;
  comodidade: string | null;
  medicamentos: string | null;
  cirurgia: string | null;
  criadaEm: string | null;
  finalizadaEm: string | null;
}

export interface DisponibilidadeApi {
  horario: string;
  disponivel: boolean;
}

export interface EstatisticasApi {
  [key: string]: unknown;
}

export interface SessaoHistoricoApi {
  id: string;
  numeroOcorrencia: number | null;
  dataHora: string;
  status: string;
  tipo: string;
  observacoes: string | null;
  nivelDor: number | null;
  mobilidade: number | null;
  exercicios: string[];
  avaliacaoId: string | null;
}

export interface RegistrarEvolucaoDto {
  observacoes?: string;
  nivelDor?: number | null;
  mobilidade?: number | null;
  exercicios?: string[];
}

export interface RemarcarSessaoDto {
  dataHora: string;
  escopo?: string;
  motivo?: string;
}

/* ── Request types ── */

export interface CriarLeadDto {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  observacao?: string;
}

export interface AgendarAvaliacaoDto {
  dataHora: string;
  observacao?: string;
  modoAgendamento?: string;
  frequenciaSemanal?: number;
  quantidadeSessoes?: number;
  validadeGuiaDias?: number;
  diasSemanaPreferidos?: string[];
  fisioterapeutaId?: string;
}

export interface AgendarSessoesDto {
  dataHora: string;
  avaliacaoId: string;
  observacao?: string;
  modoAgendamento?: string;
  frequenciaSemanal?: number;
  quantidadeSessoes?: number;
  validadeGuiaDias?: number;
  diasSemanaPreferidos?: string[];
}

export interface UsuarioApi {
  id: string;
  nome: string;
  email: string;
  role: string;
  ativo: boolean;
  criadoEm: string;
}

export interface CriarUsuarioDto {
  nome: string;
  email: string;
  senha: string;
  role: string;
}

export interface AtualizarUsuarioDto {
  nome: string;
  email: string;
  role: string;
}

export interface FinalizarAvaliacaoDto {
  avaliacaoId: string;
  medico?: string;
  hda?: string;
  hpp?: string;
  diagnostico?: string;
  testesRealizados?: string;
  goniometria?: string;
  condutaTerapeutica?: string;
  prognostico?: string;
  desfecho?: string;
  comodidade?: string;  /* comorbidades */
  medicamentos?: string;
  cirurgia?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly base = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  /* ── Sessões ── */

  getSessoes(params: { periodo?: string; date?: string; status?: string[] } = {}): Observable<SessaoApi[]> {
    let p = new HttpParams();
    if (params.periodo) p = p.set('periodo', params.periodo);
    if (params.date)    p = p.set('date', params.date);
    if (params.status?.length) params.status.forEach(s => { p = p.append('status', s); });
    return this.http.get<SessaoApi[]>(`${this.base}/sessoes`, { params: p });
  }

  getEstatisticas(): Observable<EstatisticasApi> {
    return this.http.get<EstatisticasApi>(`${this.base}/sessoes/estatisticas`);
  }

  marcarCompareceu(id: string): Observable<SessaoApi> {
    return this.http.patch<SessaoApi>(`${this.base}/sessoes/${id}/compareceu`, {});
  }

  marcarCompareceuAvaliacao(id: string): Observable<SessaoApi> {
    return this.http.patch<SessaoApi>(`${this.base}/sessoes/${id}/compareceu-avaliacao`, {});
  }

  marcarAvaliada(id: string): Observable<SessaoApi> {
    return this.http.patch<SessaoApi>(`${this.base}/sessoes/${id}/avaliar`, {});
  }

  marcarFaltou(id: string): Observable<SessaoApi> {
    return this.http.patch<SessaoApi>(`${this.base}/sessoes/${id}/faltou`, {});
  }

  cancelarSessao(id: string): Observable<SessaoApi> {
    return this.http.patch<SessaoApi>(`${this.base}/sessoes/${id}/cancelar`, {});
  }

  remarcarSessao(id: string, payload: { dataHora: string; escopo?: string; motivo?: string }): Observable<unknown> {
    return this.http.patch(`${this.base}/sessoes/${id}/remarcar`, payload);
  }

  converterLeadParaPaciente(sessaoId: string): Observable<IniciarAvaliacaoApi> {
    return this.http.post<IniciarAvaliacaoApi>(`${this.base}/sessoes/${sessaoId}/converter-lead`, {});
  }

  registrarEvolucao(sessaoId: string, dto: RegistrarEvolucaoDto): Observable<SessaoApi> {
    return this.http.patch<SessaoApi>(`${this.base}/sessoes/${sessaoId}/evolucao`, dto);
  }

  getHistoricoSessoes(pacienteId: string): Observable<SessaoHistoricoApi[]> {
    return this.http.get<SessaoHistoricoApi[]>(`${this.base}/sessoes/historico/${pacienteId}`);
  }

  remarcarSessaoV2(sessaoId: string, dto: RemarcarSessaoDto): Observable<unknown> {
    return this.http.patch(`${this.base}/sessoes/${sessaoId}/remarcar`, dto);
  }

  /* ── Avaliações ── */

  getAvaliacoesPendentes(): Observable<AvaliacaoPendenteApi[]> {
    return this.http.get<AvaliacaoPendenteApi[]>(`${this.base}/avaliacoes/pendentes`);
  }

  getAvaliacoesHistorico(): Observable<AvaliacaoHistoricoApi[]> {
    return this.http.get<AvaliacaoHistoricoApi[]>(`${this.base}/avaliacoes/historico`);
  }

  getAvaliacaoDetalhe(id: string): Observable<AvaliacaoDetalheApi> {
    return this.http.get<AvaliacaoDetalheApi>(`${this.base}/avaliacoes/${id}`);
  }

  getAvaliacaoPorPaciente(pacienteId: string): Observable<AvaliacaoDetalheApi> {
    return this.http.get<AvaliacaoDetalheApi>(`${this.base}/avaliacoes/by-paciente/${pacienteId}`);
  }

  iniciarAvaliacao(avaliacaoId: string): Observable<void> {
    return this.http.post<void>(`${this.base}/avaliacoes/iniciar`, { leadId: avaliacaoId });
  }

  finalizarAvaliacao(dto: FinalizarAvaliacaoDto): Observable<void> {
    return this.http.post<void>(`${this.base}/avaliacoes/finalizar`, dto);
  }

  atualizarAvaliacao(id: string, dto: Partial<FinalizarAvaliacaoDto>): Observable<AvaliacaoDetalheApi> {
    return this.http.patch<AvaliacaoDetalheApi>(`${this.base}/avaliacoes/${id}`, dto);
  }

  /* ── Pacientes ── */

  getPacientesAtivos(page = 0, size = 20, meusPacientes = false): Observable<PageResponse<PacienteAtivoApi>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (meusPacientes) params = params.set('meusPacientes', 'true');
    return this.http.get<PageResponse<PacienteAtivoApi>>(`${this.base}/pacientes/ativos`, { params });
  }

  agendarSessoesPaciente(pacienteId: string, dto: AgendarSessoesDto): Observable<unknown> {
    return this.http.post(`${this.base}/pacientes/${pacienteId}/agendar-sessoes`, dto);
  }

  atribuirFisioterapeuta(pacienteId: string, fisioterapeutaId: string): Observable<void> {
    return this.http.patch<void>(`${this.base}/pacientes/${pacienteId}/fisioterapeuta`, { fisioterapeutaId });
  }

  /* ── Leads ── */

  getLeads(ativos?: boolean): Observable<LeadApi[]> {
    let p = new HttpParams();
    if (ativos !== undefined) p = p.set('ativos', String(ativos));
    return this.http.get<LeadApi[]>(`${this.base}/leads`, { params: p });
  }

  criarLead(dto: CriarLeadDto): Observable<LeadApi> {
    return this.http.post<LeadApi>(`${this.base}/leads`, dto);
  }

  buscarLeadPorEmail(email: string): Observable<LeadApi> {
    return this.http.get<LeadApi>(`${this.base}/leads/buscar-email`, {
      params: { email },
    });
  }

  agendarAvaliacao(leadId: string, dto: AgendarAvaliacaoDto): Observable<unknown> {
    return this.http.post(`${this.base}/leads/${leadId}/agendar-avaliacao`, dto);
  }

  executarAcaoLead(leadId: string, acao: string): Observable<unknown> {
    return this.http.post(`${this.base}/leads/${leadId}/acoes`, { acao });
  }

  deletarLead(leadId: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/leads/${leadId}`);
  }

  /* ── Agendamentos ── */

  getDisponibilidade(date: string, excludeId?: string, fisioterapeutaId?: string): Observable<DisponibilidadeApi[]> {
    let params = new HttpParams().set('date', date);
    if (excludeId) params = params.set('excludeId', excludeId);
    if (fisioterapeutaId) params = params.set('fisioterapeutaId', fisioterapeutaId);
    return this.http.get<DisponibilidadeApi[]>(`${this.base}/agendamentos/disponibilidade`, { params });
  }

  /* ── Usuários ── */

  getUsuarios(): Observable<UsuarioApi[]> {
    return this.http.get<UsuarioApi[]>(`${this.base}/usuarios`);
  }

  getFisioterapeutas(): Observable<UsuarioApi[]> {
    return this.http.get<UsuarioApi[]>(`${this.base}/usuarios/fisioterapeutas`);
  }

  criarUsuario(dto: CriarUsuarioDto): Observable<UsuarioApi> {
    return this.http.post<UsuarioApi>(`${this.base}/usuarios`, dto);
  }

  alternarStatusUsuario(id: string): Observable<UsuarioApi> {
    return this.http.patch<UsuarioApi>(`${this.base}/usuarios/${id}/status`, {});
  }

  atualizarUsuario(id: string, dto: AtualizarUsuarioDto): Observable<UsuarioApi> {
    return this.http.patch<UsuarioApi>(`${this.base}/usuarios/${id}`, dto);
  }

  resetarSenhaUsuario(id: string, novaSenha: string): Observable<void> {
    return this.http.post<void>(`${this.base}/usuarios/${id}/reset-senha`, { novaSenha });
  }
}
