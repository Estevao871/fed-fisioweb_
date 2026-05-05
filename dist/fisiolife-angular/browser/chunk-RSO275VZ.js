import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WAB2DSBB.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:8080/api"
};

// src/app/core/api.service.ts
var _ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  /* ── Sessões ── */
  getSessoes(params = {}) {
    let p = new HttpParams();
    if (params.periodo)
      p = p.set("periodo", params.periodo);
    if (params.date)
      p = p.set("date", params.date);
    if (params.status?.length)
      params.status.forEach((s) => {
        p = p.append("status", s);
      });
    return this.http.get(`${this.base}/sessoes`, { params: p });
  }
  getEstatisticas() {
    return this.http.get(`${this.base}/sessoes/estatisticas`);
  }
  marcarCompareceu(id) {
    return this.http.patch(`${this.base}/sessoes/${id}/compareceu`, {});
  }
  marcarCompareceuAvaliacao(id) {
    return this.http.patch(`${this.base}/sessoes/${id}/compareceu-avaliacao`, {});
  }
  marcarAvaliada(id) {
    return this.http.patch(`${this.base}/sessoes/${id}/avaliar`, {});
  }
  marcarFaltou(id) {
    return this.http.patch(`${this.base}/sessoes/${id}/faltou`, {});
  }
  cancelarSessao(id) {
    return this.http.patch(`${this.base}/sessoes/${id}/cancelar`, {});
  }
  remarcarSessao(id, payload) {
    return this.http.patch(`${this.base}/sessoes/${id}/remarcar`, payload);
  }
  converterLeadParaPaciente(sessaoId) {
    return this.http.post(`${this.base}/sessoes/${sessaoId}/converter-lead`, {});
  }
  registrarEvolucao(sessaoId, dto) {
    return this.http.patch(`${this.base}/sessoes/${sessaoId}/evolucao`, dto);
  }
  getHistoricoSessoes(pacienteId) {
    return this.http.get(`${this.base}/sessoes/historico/${pacienteId}`);
  }
  remarcarSessaoV2(sessaoId, dto) {
    return this.http.patch(`${this.base}/sessoes/${sessaoId}/remarcar`, dto);
  }
  /* ── Avaliações ── */
  getAvaliacoesPendentes() {
    return this.http.get(`${this.base}/avaliacoes/pendentes`);
  }
  getAvaliacoesHistorico() {
    return this.http.get(`${this.base}/avaliacoes/historico`);
  }
  getAvaliacaoDetalhe(id) {
    return this.http.get(`${this.base}/avaliacoes/${id}`);
  }
  iniciarAvaliacao(avaliacaoId) {
    return this.http.post(`${this.base}/avaliacoes/iniciar`, { leadId: avaliacaoId });
  }
  finalizarAvaliacao(dto) {
    return this.http.post(`${this.base}/avaliacoes/finalizar`, dto);
  }
  /* ── Pacientes ── */
  getPacientesAtivos() {
    return this.http.get(`${this.base}/pacientes/ativos`);
  }
  agendarSessoesPaciente(pacienteId, dto) {
    return this.http.post(`${this.base}/pacientes/${pacienteId}/agendar-sessoes`, dto);
  }
  /* ── Leads ── */
  getLeads(ativos) {
    let p = new HttpParams();
    if (ativos !== void 0)
      p = p.set("ativos", String(ativos));
    return this.http.get(`${this.base}/leads`, { params: p });
  }
  criarLead(dto) {
    return this.http.post(`${this.base}/leads`, dto);
  }
  agendarAvaliacao(leadId, dto) {
    return this.http.post(`${this.base}/leads/${leadId}/agendar-avaliacao`, dto);
  }
  executarAcaoLead(leadId, acao) {
    return this.http.post(`${this.base}/leads/${leadId}/acoes`, { acao });
  }
  deletarLead(leadId) {
    return this.http.delete(`${this.base}/leads/${leadId}`);
  }
  /* ── Agendamentos ── */
  getDisponibilidade(date, excludeId) {
    let params = new HttpParams().set("date", date);
    if (excludeId)
      params = params.set("excludeId", excludeId);
    return this.http.get(`${this.base}/agendamentos/disponibilidade`, { params });
  }
};
_ApiService.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
};
_ApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
var ApiService = _ApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-RSO275VZ.js.map
