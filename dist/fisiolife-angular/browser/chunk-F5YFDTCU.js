import {
  ApiService
} from "./chunk-RSO275VZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AU66TE26.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  Router,
  SlicePipe,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WAB2DSBB.js";

// src/app/components/appointments-table/appointments-table.component.ts
var _c0 = () => [];
function AppointmentsTableComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function AppointmentsTableComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearDateFilter());
    });
    \u0275\u0275text(1, "Todas");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsTableComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" P\xE1gina ", ctx_r1.page + 1, " de ", ctx_r1.totalPages, " ");
  }
}
function AppointmentsTableComponent_tr_61_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function AppointmentsTableComponent_tr_61_div_23_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function AppointmentsTableComponent_tr_61_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.reschedule.emit(item_r4);
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(2, "\u{1F4C5} Reagendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function AppointmentsTableComponent_tr_61_div_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.edit.emit(item_r4);
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(4, "\u270F\uFE0F Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function AppointmentsTableComponent_tr_61_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.remove.emit(item_r4.id);
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(6, "\u{1F5D1}\uFE0F Cancelar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r1.menuPosition.top, "px")("right", ctx_r1.menuPosition.right, "px");
  }
}
function AppointmentsTableComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 29);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 30);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 31)(21, "button", 32);
    \u0275\u0275listener("click", function AppointmentsTableComponent_tr_61_Template_button_click_21_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleMenu(item_r4.id, $event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(22, "\u22EE");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AppointmentsTableComponent_tr_61_div_23_Template, 7, 4, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DE} ", item_r4.phone || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.time);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(item_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusBadge(item_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(item_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.fisioterapeuta || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.openMenu === item_r4.id);
  }
}
function AppointmentsTableComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37)(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Nenhum agendamento encontrado");
    \u0275\u0275elementEnd()()()();
  }
}
function AppointmentsTableComponent_div_63_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function AppointmentsTableComponent_div_63_button_4_Template_button_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.page = i_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.page === i_r8);
    \u0275\u0275attribute("aria-current", ctx_r1.page === i_r8 ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r8 + 1);
  }
}
function AppointmentsTableComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function AppointmentsTableComponent_div_63_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(2, "\u2190 Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275template(4, AppointmentsTableComponent_div_63_button_4_Template, 2, 4, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function AppointmentsTableComponent_div_63_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, "Pr\xF3xima \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0).constructor(ctx_r1.totalPages));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page >= ctx_r1.totalPages - 1);
  }
}
var _AppointmentsTableComponent = class _AppointmentsTableComponent {
  constructor() {
    this.appointments = [];
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.reschedule = new EventEmitter();
    this.searchTerm = "";
    this.filterStatus = "all";
    this.filterType = "all";
    this.filterDate = this.todayISO();
    this.openMenu = null;
    this.menuPosition = { top: 0, right: 0 };
    this.page = 0;
    this.pageSize = 10;
    this.Math = Math;
  }
  get totalPages() {
    return Math.ceil(this.filtered().length / this.pageSize);
  }
  get paged() {
    const s = this.page * this.pageSize;
    return this.filtered().slice(s, s + this.pageSize);
  }
  nextPage() {
    if (this.page < this.totalPages - 1)
      this.page++;
  }
  prevPage() {
    if (this.page > 0)
      this.page--;
  }
  todayISO() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  isoToBR(iso) {
    if (!iso)
      return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }
  clearDateFilter() {
    this.filterDate = "";
    this.page = 0;
  }
  todayFilter() {
    this.filterDate = this.todayISO();
    this.page = 0;
  }
  onFilterChange() {
    this.page = 0;
  }
  filtered() {
    const s = this.searchTerm.toLowerCase();
    const dateBR = this.isoToBR(this.filterDate);
    return this.appointments.filter((a) => {
      const matchSearch = a.patient.toLowerCase().includes(s) || (a.phone ?? "").includes(s);
      const matchDate = !dateBR || a.date === dateBR;
      const matchStatus = this.filterStatus === "all" || a.status === this.filterStatus;
      const matchType = this.filterType === "all" || a.type === this.filterType;
      return matchSearch && matchDate && matchStatus && matchType;
    });
  }
  toggleMenu(id, event) {
    if (this.openMenu === id) {
      this.openMenu = null;
      return;
    }
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    this.menuPosition = { top: rect.bottom + 4, right: window.innerWidth - rect.right };
    this.openMenu = id;
  }
  closeMenu() {
    this.openMenu = null;
  }
  onDocumentClick() {
    this.openMenu = null;
  }
  typeLabel(type) {
    const map = {
      avaliacao: "Avalia\xE7\xE3o",
      sessao: "Sess\xE3o",
      reavaliacao: "Reavalia\xE7\xE3o"
    };
    return map[type] ?? type;
  }
  statusLabel(status) {
    const map = {
      agendado: "Agendado",
      "em-andamento": "Em andamento",
      concluido: "Conclu\xEDdo",
      confirmado: "Confirmado",
      pendente: "Pendente",
      cancelado: "Cancelado"
    };
    return map[status] ?? status;
  }
  statusBadge(status) {
    const map = {
      agendado: "badge-blue",
      "em-andamento": "badge-yellow",
      concluido: "badge-green",
      confirmado: "badge-green",
      pendente: "badge-yellow",
      cancelado: "badge-red"
    };
    return map[status] ?? "badge-gray";
  }
};
_AppointmentsTableComponent.\u0275fac = function AppointmentsTableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppointmentsTableComponent)();
};
_AppointmentsTableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentsTableComponent, selectors: [["app-appointments-table"]], hostBindings: function AppointmentsTableComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function AppointmentsTableComponent_click_HostBindingHandler() {
      return ctx.onDocumentClick();
    }, \u0275\u0275resolveDocument);
  }
}, inputs: { appointments: "appointments" }, outputs: { edit: "edit", remove: "remove", reschedule: "reschedule" }, decls: 64, vars: 11, consts: [[1, "apts-filters"], [1, "filters-row"], [1, "search-wrap"], [1, "search-icon"], ["placeholder", "Buscar por paciente ou telefone...", 1, "input", "search-input", 3, "ngModelChange", "ngModel"], [1, "date-filter-wrap"], ["type", "date", 1, "input", 2, "width", "160px", 3, "ngModelChange", "ngModel"], ["title", "Hoje", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["class", "btn btn-ghost btn-sm", "title", "Todas as datas", 3, "click", 4, "ngIf"], [1, "filter-selects"], [1, "input", "filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "agendado"], ["value", "em-andamento"], ["value", "concluido"], ["value", "cancelado"], ["value", "avaliacao"], ["value", "sessao"], ["value", "reavaliacao"], [1, "results-meta"], [1, "text-xs", "text-gray"], ["class", "text-xs text-gray", 4, "ngIf"], [1, "table-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-pagination", 4, "ngIf"], ["title", "Todas as datas", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "text-gray", "text-sm"], [1, "type-badge"], [1, "badge", 3, "ngClass"], [1, "text-sm", "text-gray"], [1, "actions-menu"], ["aria-label", "A\xE7\xF5es", 1, "action-dots", 3, "click"], ["class", "actions-dropdown", 3, "top", "right", "click", 4, "ngIf"], [1, "actions-dropdown", 3, "click"], [3, "click"], [1, "danger", 3, "click"], ["colspan", "7"], [1, "empty-state"], [1, "empty-icon"], [1, "table-pagination"], [1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [1, "page-numbers"], ["class", "page-num", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-num", 3, "click"]], template: function AppointmentsTableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsTableComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AppointmentsTableComponent_Template_input_ngModelChange_5_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsTableComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterDate, $event) || (ctx.filterDate = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AppointmentsTableComponent_Template_input_ngModelChange_7_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function AppointmentsTableComponent_Template_button_click_8_listener() {
      return ctx.todayFilter();
    });
    \u0275\u0275text(9, "Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AppointmentsTableComponent_button_10_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsTableComponent_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AppointmentsTableComponent_Template_select_ngModelChange_12_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementStart(13, "option", 11);
    \u0275\u0275text(14, "Todos os Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 12);
    \u0275\u0275text(16, "Agendado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 13);
    \u0275\u0275text(18, "Em andamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 14);
    \u0275\u0275text(20, "Conclu\xEDdo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 15);
    \u0275\u0275text(22, "Cancelado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsTableComponent_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AppointmentsTableComponent_Template_select_ngModelChange_23_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementStart(24, "option", 11);
    \u0275\u0275text(25, "Todos os Tipos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 16);
    \u0275\u0275text(27, "Avalia\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 17);
    \u0275\u0275text(29, "Sess\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 18);
    \u0275\u0275text(31, "Reavalia\xE7\xE3o");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 19)(33, "span", 20);
    \u0275\u0275text(34, " Mostrando ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " de ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " agendamentos ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, AppointmentsTableComponent_span_41_Template, 2, 2, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 22)(43, "table")(44, "thead")(45, "tr")(46, "th");
    \u0275\u0275text(47, "Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Contato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "Data/Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Fisioterapeuta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275template(61, AppointmentsTableComponent_tr_61_Template, 24, 9, "tr", 23)(62, AppointmentsTableComponent_tr_62_Template, 7, 0, "tr", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(63, AppointmentsTableComponent_div_63_Template, 7, 4, "div", 25);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.filterDate);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.Math.min((ctx.page + 1) * ctx.pageSize, ctx.filtered().length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.filtered().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.totalPages > 1);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx.paged);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.paged.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.totalPages > 1);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.apts-filters[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.625rem;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 220px;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 0.85rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.2rem;\n}\n.filter-selects[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n}\n.filter-select[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 140px;\n}\n.results-count[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.date-filter-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.results-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.375rem;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--gray-100);\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-num[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--gray-200);\n  background: #fff;\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.page-num[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n.page-num.active[_ngcontent-%COMP%] {\n  background: var(--gray-900);\n  color: #fff;\n  border-color: var(--gray-900);\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.25rem 0.625rem;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  background: var(--gray-100);\n  color: var(--gray-600);\n}\n.actions-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.action-dots[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  font-size: 1.1rem;\n  color: var(--gray-400);\n  cursor: pointer;\n  border-radius: 6px;\n  display: grid;\n  place-items: center;\n  transition: background 0.15s;\n}\n.action-dots[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n.actions-dropdown[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  background: #fff;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-lg);\n  min-width: 150px;\n  overflow: hidden;\n}\n.actions-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  border: none;\n  background: transparent;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.12s;\n}\n.actions-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n.actions-dropdown[_ngcontent-%COMP%]   button.danger[_ngcontent-%COMP%] {\n  color: var(--red-600);\n}\n.actions-dropdown[_ngcontent-%COMP%]   button.danger[_ngcontent-%COMP%]:hover {\n  background: var(--red-100);\n}\n/*# sourceMappingURL=appointments-table.component.css.map */"] });
var AppointmentsTableComponent = _AppointmentsTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentsTableComponent, [{
    type: Component,
    args: [{ selector: "app-appointments-table", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="apts-filters">
  <div class="filters-row">
    <!-- Busca -->
    <div class="search-wrap">
      <span class="search-icon">\u{1F50D}</span>
      <input class="input search-input" [(ngModel)]="searchTerm"
        (ngModelChange)="onFilterChange()" placeholder="Buscar por paciente ou telefone..." />
    </div>

    <!-- Data -->
    <div class="date-filter-wrap">
      <input class="input" type="date" [(ngModel)]="filterDate"
        (ngModelChange)="onFilterChange()" style="width:160px" />
      <button class="btn btn-ghost btn-sm" (click)="todayFilter()" title="Hoje">Hoje</button>
      <button class="btn btn-ghost btn-sm" (click)="clearDateFilter()" *ngIf="filterDate" title="Todas as datas">Todas</button>
    </div>

    <div class="filter-selects">
      <select class="input filter-select" [(ngModel)]="filterStatus" (ngModelChange)="onFilterChange()">
        <option value="all">Todos os Status</option>
        <option value="agendado">Agendado</option>
        <option value="em-andamento">Em andamento</option>
        <option value="concluido">Conclu\xEDdo</option>
        <option value="cancelado">Cancelado</option>
      </select>
      <select class="input filter-select" [(ngModel)]="filterType" (ngModelChange)="onFilterChange()">
        <option value="all">Todos os Tipos</option>
        <option value="avaliacao">Avalia\xE7\xE3o</option>
        <option value="sessao">Sess\xE3o</option>
        <option value="reavaliacao">Reavalia\xE7\xE3o</option>
      </select>
    </div>
  </div>

  <div class="results-meta">
    <span class="text-xs text-gray">
      Mostrando <strong>{{ Math.min((page + 1) * pageSize, filtered().length) }}</strong>
      de <strong>{{ filtered().length }}</strong> agendamentos
    </span>
    <span class="text-xs text-gray" *ngIf="totalPages > 1">
      P\xE1gina {{ page + 1 }} de {{ totalPages }}
    </span>
  </div>
</div>

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Paciente</th>
        <th>Contato</th>
        <th>Data/Hora</th>
        <th>Tipo</th>
        <th>Status</th>
        <th>Fisioterapeuta</th>
        <th>A\xE7\xF5es</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of paged">
        <td><strong>{{ item.patient }}</strong></td>
        <td class="text-gray text-sm">\u{1F4DE} {{ item.phone || '\u2014' }}</td>
        <td>
          <div>{{ item.date }}</div>
          <div class="text-xs text-gray">{{ item.time }}</div>
        </td>
        <td><span class="type-badge">{{ typeLabel(item.type) }}</span></td>
        <td><span class="badge" [ngClass]="statusBadge(item.status)">{{ statusLabel(item.status) }}</span></td>
        <td class="text-sm text-gray">{{ item.fisioterapeuta || '\u2014' }}</td>
        <td>
          <div class="actions-menu">
            <button class="action-dots" (click)="toggleMenu(item.id, $event); $event.stopPropagation()" aria-label="A\xE7\xF5es">\u22EE</button>
            <div class="actions-dropdown"
              *ngIf="openMenu === item.id"
              [style.top.px]="menuPosition.top"
              [style.right.px]="menuPosition.right"
              (click)="$event.stopPropagation()">
              <button (click)="reschedule.emit(item); closeMenu()">\u{1F4C5} Reagendar</button>
              <button (click)="edit.emit(item); closeMenu()">\u270F\uFE0F Editar</button>
              <button class="danger" (click)="remove.emit(item.id); closeMenu()">\u{1F5D1}\uFE0F Cancelar</button>
            </div>
          </div>
        </td>
      </tr>
      <tr *ngIf="paged.length === 0">
        <td colspan="7">
          <div class="empty-state">
            <span class="empty-icon">\u{1F4CB}</span>
            <p>Nenhum agendamento encontrado</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Pagina\xE7\xE3o -->
<div class="table-pagination" *ngIf="totalPages > 1">
  <button class="btn btn-outline btn-sm" [disabled]="page === 0" (click)="prevPage()">\u2190 Anterior</button>
  <div class="page-numbers">
    <button
      *ngFor="let p of [].constructor(totalPages); let i = index"
      class="page-num"
      [class.active]="page === i"
      (click)="page = i"
      [attr.aria-current]="page === i ? 'page' : null"
    >{{ i + 1 }}</button>
  </div>
  <button class="btn btn-outline btn-sm" [disabled]="page >= totalPages - 1" (click)="nextPage()">Pr\xF3xima \u2192</button>
</div>
`, styles: ["/* src/app/components/appointments-table/appointments-table.component.scss */\n.apts-filters {\n  margin-bottom: 1.25rem;\n}\n.filters-row {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.625rem;\n}\n.search-wrap {\n  position: relative;\n  flex: 1;\n  min-width: 220px;\n}\n.search-wrap .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 0.85rem;\n}\n.search-wrap .search-input {\n  padding-left: 2.2rem;\n}\n.filter-selects {\n  display: flex;\n  gap: 0.625rem;\n}\n.filter-select {\n  width: auto;\n  min-width: 140px;\n}\n.results-count {\n  margin-top: 0.25rem;\n}\n.date-filter-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.results-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.375rem;\n}\n.table-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--gray-100);\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-num {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--gray-200);\n  background: #fff;\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.page-num:hover {\n  background: var(--gray-50);\n}\n.page-num.active {\n  background: var(--gray-900);\n  color: #fff;\n  border-color: var(--gray-900);\n}\n.type-badge {\n  display: inline-flex;\n  padding: 0.25rem 0.625rem;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  background: var(--gray-100);\n  color: var(--gray-600);\n}\n.actions-menu {\n  position: relative;\n}\n.action-dots {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  font-size: 1.1rem;\n  color: var(--gray-400);\n  cursor: pointer;\n  border-radius: 6px;\n  display: grid;\n  place-items: center;\n  transition: background 0.15s;\n}\n.action-dots:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n.actions-dropdown {\n  position: fixed;\n  z-index: 9999;\n  background: #fff;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-lg);\n  min-width: 150px;\n  overflow: hidden;\n}\n.actions-dropdown button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  border: none;\n  background: transparent;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.12s;\n}\n.actions-dropdown button:hover {\n  background: var(--gray-50);\n}\n.actions-dropdown button.danger {\n  color: var(--red-600);\n}\n.actions-dropdown button.danger:hover {\n  background: var(--red-100);\n}\n/*# sourceMappingURL=appointments-table.component.css.map */\n"] }]
  }], null, { appointments: [{
    type: Input
  }], edit: [{
    type: Output
  }], remove: [{
    type: Output
  }], reschedule: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentsTableComponent, { className: "AppointmentsTableComponent", filePath: "src/app/components/appointments-table/appointments-table.component.ts", lineNumber: 13 });
})();

// src/app/components/reschedule-dialog/reschedule-dialog.component.ts
function RescheduleDialogComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Sess\xE3o Reagendada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Novo hor\xE1rio de ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.patientName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(": ", \u0275\u0275pipeBind3(10, 5, ctx_r1.date, 8, 10), "/", \u0275\u0275pipeBind3(11, 9, ctx_r1.date, 5, 7), "/", \u0275\u0275pipeBind3(12, 13, ctx_r1.date, 0, 4), " \xE0s ", ctx_r1.time, ".");
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "Carregando disponibilidade...");
    \u0275\u0275elementEnd();
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Nenhum hor\xE1rio encontrado para esta data. ");
    \u0275\u0275elementEnd();
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u{1F534}");
    \u0275\u0275elementEnd();
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_button_1_Template_button_click_0_listener() {
      const slot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.selectSlot(slot_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_button_1_span_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r1.slotClass(slot_r5))("disabled", !slot_r5.disponivel)("title", !slot_r5.disponivel ? "Hor\xE1rio lotado (m\xE1x. 6 pacientes)" : "");
    \u0275\u0275attribute("aria-label", ctx_r1.slotLabel(slot_r5))("aria-pressed", ctx_r1.time === slot_r5.horario);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r5.horario, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !slot_r5.disponivel);
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_button_1_Template, 3, 7, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.slots);
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p", 34);
    \u0275\u0275text(2, "\u26A0\uFE0F Todos os hor\xE1rios est\xE3o lotados. Informe um hor\xE1rio manualmente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function RescheduleDialogComponent_div_0_ng_container_3_div_18_div_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.time, $event) || (ctx_r1.time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.time);
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label");
    \u0275\u0275text(2, "Hor\xE1rio ");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, RescheduleDialogComponent_div_0_ng_container_3_div_18_div_5_Template, 2, 0, "div", 22)(6, RescheduleDialogComponent_div_0_ng_container_3_div_18_div_6_Template, 2, 0, "div", 23)(7, RescheduleDialogComponent_div_0_ng_container_3_div_18_div_7_Template, 2, 1, "div", 24)(8, RescheduleDialogComponent_div_0_ng_container_3_div_18_div_8_Template, 4, 1, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.loadingSlots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSlots && ctx_r1.slots.length === 0 && ctx_r1.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSlots && ctx_r1.slots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSlots && ctx_r1.allSlotsOccupied);
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 36);
    \u0275\u0275text(2, "Escopo do Reagendamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function RescheduleDialogComponent_div_0_ng_container_3_div_19_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.escopo, $event) || (ctx_r1.escopo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 38);
    \u0275\u0275text(5, "Somente esta sess\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 39);
    \u0275\u0275text(7, "Esta e todas as futuras da s\xE9rie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 40);
    \u0275\u0275text(9, "Toda a s\xE9rie");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.escopo);
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function RescheduleDialogComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Reagendar Sess\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, "Paciente: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function RescheduleDialogComponent_div_0_ng_container_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "label", 12);
    \u0275\u0275text(14, "Nova Data ");
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RescheduleDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.date, $event) || (ctx_r1.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RescheduleDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, RescheduleDialogComponent_div_0_ng_container_3_div_18_Template, 9, 4, "div", 15)(19, RescheduleDialogComponent_div_0_ng_container_3_div_19_Template, 10, 1, "div", 15);
    \u0275\u0275elementStart(20, "div", 11)(21, "label", 16);
    \u0275\u0275text(22, "Motivo (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RescheduleDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.motivo, $event) || (ctx_r1.motivo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, RescheduleDialogComponent_div_0_ng_container_3_p_24_Template, 2, 1, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19)(26, "button", 20);
    \u0275\u0275listener("click", function RescheduleDialogComponent_div_0_ng_container_3_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(27, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 21);
    \u0275\u0275listener("click", function RescheduleDialogComponent_div_0_ng_container_3_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmar());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.patientName);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.date);
    \u0275\u0275property("min", ctx_r1.dateMin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasSerie);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.motivo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isValid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Reagendando..." : "\u{1F4C5} Confirmar Reagendamento", " ");
  }
}
function RescheduleDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function RescheduleDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function RescheduleDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, RescheduleDialogComponent_div_0_div_2_Template, 13, 17, "div", 3)(3, RescheduleDialogComponent_div_0_ng_container_3_Template, 30, 10, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.success);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.success);
  }
}
var _RescheduleDialogComponent = class _RescheduleDialogComponent {
  get dateMin() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  get isValid() {
    return !!(this.date && this.time);
  }
  get allSlotsOccupied() {
    return this.slots.length > 0 && this.slots.every((s) => !s.disponivel);
  }
  constructor(api) {
    this.api = api;
    this.open = false;
    this.patientName = "";
    this.appointmentId = "";
    this.hasSerie = false;
    this.openChange = new EventEmitter();
    this.rescheduled = new EventEmitter();
    this.date = "";
    this.time = "";
    this.escopo = "SOMENTE_ESTA";
    this.motivo = "";
    this.loading = false;
    this.loadingSlots = false;
    this.success = false;
    this.error = "";
    this.slots = [];
  }
  ngOnChanges() {
    if (this.open) {
      this.date = "";
      this.time = "";
      this.escopo = "SOMENTE_ESTA";
      this.motivo = "";
      this.loading = false;
      this.success = false;
      this.error = "";
      this.slots = [];
    }
  }
  onDateChange() {
    this.time = "";
    this.error = "";
    if (!this.date) {
      this.slots = [];
      return;
    }
    this.loadingSlots = true;
    this.api.getDisponibilidade(this.date, this.appointmentId).subscribe({
      next: (s) => {
        this.slots = s;
        this.loadingSlots = false;
      },
      error: () => {
        this.slots = [];
        this.loadingSlots = false;
      }
    });
  }
  slotClass(slot) {
    if (!slot.disponivel)
      return "slot-cheio";
    return this.time === slot.horario ? "slot-selected" : "slot-livre";
  }
  slotLabel(slot) {
    return slot.disponivel ? slot.horario : `${slot.horario} (cheio)`;
  }
  selectSlot(slot) {
    if (!slot.disponivel)
      return;
    this.time = slot.horario;
  }
  confirmar() {
    if (!this.isValid || this.loading)
      return;
    this.loading = true;
    this.error = "";
    const [y, m, d] = this.date.split("-");
    const [h, min] = this.time.split(":");
    const dt = new Date(+y, +m - 1, +d, +h, +min);
    const dataHoraInstant = dt.toISOString();
    this.api.remarcarSessaoV2(this.appointmentId, {
      dataHora: dataHoraInstant,
      escopo: this.escopo,
      motivo: this.motivo || void 0
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.rescheduled.emit();
        setTimeout(() => {
          this.openChange.emit(false);
          this.success = false;
        }, 1500);
      },
      error: (err) => {
        this.loading = false;
        const msg = err?.error?.mensagem;
        this.error = msg ?? "N\xE3o foi poss\xEDvel reagendar. Verifique o hor\xE1rio escolhido.";
      }
    });
  }
  close() {
    this.openChange.emit(false);
  }
};
_RescheduleDialogComponent.\u0275fac = function RescheduleDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RescheduleDialogComponent)(\u0275\u0275directiveInject(ApiService));
};
_RescheduleDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RescheduleDialogComponent, selectors: [["app-reschedule-dialog"]], inputs: { open: "open", patientName: "patientName", appointmentId: "appointmentId", hasSerie: "hasSerie" }, outputs: { openChange: "openChange", rescheduled: "rescheduled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-backdrop", "role", "dialog", "aria-modal", "true", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", 1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], ["class", "success-state", 4, "ngIf"], [4, "ngIf"], [1, "success-state"], ["aria-hidden", "true", 1, "success-icon"], [1, "modal-header"], [1, "text-sm", "text-gray", 2, "margin-top", ".2rem"], ["aria-label", "Fechar", 1, "modal-close", 3, "click"], [1, "reschedule-form"], [1, "field-group"], ["for", "rd-date"], [2, "color", "var(--red-600)"], ["id", "rd-date", "type", "date", 1, "input", 3, "ngModelChange", "ngModel", "min"], ["class", "field-group", 4, "ngIf"], ["for", "rd-motivo"], ["id", "rd-motivo", "placeholder", "Ex: Pedido do paciente, conflito de agenda...", 1, "input", 3, "ngModelChange", "ngModel"], ["role", "alert", "class", "error-msg", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "slots-loading", 4, "ngIf"], ["class", "slots-empty", 4, "ngIf"], ["class", "slots-grid", 4, "ngIf"], ["class", "slots-all-occupied", 4, "ngIf"], [1, "slots-loading"], [1, "slots-empty"], [1, "slots-grid"], ["type", "button", "class", "slot-btn", 3, "ngClass", "disabled", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "slot-btn", 3, "click", "ngClass", "disabled", "title"], ["class", "slot-full-icon", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "slot-full-icon"], [1, "slots-all-occupied"], [1, "text-sm", 2, "color", "var(--yellow-600)", "margin-bottom", ".5rem"], ["type", "time", "min", "08:00", "max", "19:00", "step", "900", 1, "input", 2, "width", "140px", 3, "ngModelChange", "ngModel"], ["for", "rd-escopo"], ["id", "rd-escopo", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "SOMENTE_ESTA"], ["value", "DESTA_EM_DIANTE"], ["value", "TODA_SERIE"], ["role", "alert", 1, "error-msg"]], template: function RescheduleDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RescheduleDialogComponent_div_0_Template, 4, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.open);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n\n.reschedule-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.slots-loading[_ngcontent-%COMP%], \n.slots-empty[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--gray-400);\n  padding: 0.5rem 0;\n}\n.slots-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.slot-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--gray-200);\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  text-align: center;\n}\n.slot-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--purple-600);\n  outline-offset: 2px;\n}\n.slot-btn.slot-livre[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--gray-700);\n}\n.slot-btn.slot-livre[_ngcontent-%COMP%]:hover {\n  border-color: var(--purple-400);\n  background: var(--purple-50);\n}\n.slot-btn.slot-selected[_ngcontent-%COMP%] {\n  background: var(--purple-600);\n  border-color: var(--purple-600);\n  color: #fff;\n}\n.slot-btn.slot-cheio[_ngcontent-%COMP%] {\n  background: var(--red-100);\n  border-color: var(--red-100);\n  color: var(--red-600);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.slot-btn[_ngcontent-%COMP%]   .slot-full-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.error-msg[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--red-600);\n  margin: 0;\n}\n.success-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem 0;\n  text-align: center;\n}\n.success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=reschedule-dialog.component.css.map */"] });
var RescheduleDialogComponent = _RescheduleDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RescheduleDialogComponent, [{
    type: Component,
    args: [{ selector: "app-reschedule-dialog", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-backdrop" *ngIf="open" (click)="close()" role="dialog" aria-modal="true">
  <div class="modal" (click)="$event.stopPropagation()">

    <!-- SUCCESS -->
    <div *ngIf="success" class="success-state">
      <div class="success-icon" aria-hidden="true">\u2705</div>
      <h2>Sess\xE3o Reagendada!</h2>
      <p>Novo hor\xE1rio de <strong>{{ patientName }}</strong>: {{ date | slice:8:10 }}/{{ date | slice:5:7 }}/{{ date | slice:0:4 }} \xE0s {{ time }}.</p>
    </div>

    <ng-container *ngIf="!success">
      <div class="modal-header">
        <div>
          <h2>Reagendar Sess\xE3o</h2>
          <p class="text-sm text-gray" style="margin-top:.2rem">Paciente: <strong>{{ patientName }}</strong></p>
        </div>
        <button class="modal-close" (click)="close()" aria-label="Fechar">\u2715</button>
      </div>

      <div class="reschedule-form">

        <!-- Data -->
        <div class="field-group">
          <label for="rd-date">Nova Data <span style="color:var(--red-600)">*</span></label>
          <input id="rd-date" class="input" type="date" [(ngModel)]="date"
            [min]="dateMin" (ngModelChange)="onDateChange()" />
        </div>

        <!-- Hor\xE1rios -->
        <div class="field-group" *ngIf="date">
          <label>Hor\xE1rio <span style="color:var(--red-600)">*</span></label>

          <div *ngIf="loadingSlots" class="slots-loading">Carregando disponibilidade...</div>

          <div *ngIf="!loadingSlots && slots.length === 0 && date" class="slots-empty">
            Nenhum hor\xE1rio encontrado para esta data.
          </div>

          <div class="slots-grid" *ngIf="!loadingSlots && slots.length > 0">
            <button
              *ngFor="let slot of slots"
              type="button"
              class="slot-btn"
              [ngClass]="slotClass(slot)"
              [disabled]="!slot.disponivel"
              (click)="selectSlot(slot)"
              [attr.aria-label]="slotLabel(slot)"
              [attr.aria-pressed]="time === slot.horario"
              [title]="!slot.disponivel ? 'Hor\xE1rio lotado (m\xE1x. 6 pacientes)' : ''"
            >
              {{ slot.horario }}
              <span *ngIf="!slot.disponivel" class="slot-full-icon" aria-hidden="true">\u{1F534}</span>
            </button>
          </div>

          <div *ngIf="!loadingSlots && allSlotsOccupied" class="slots-all-occupied">
            <p class="text-sm" style="color:var(--yellow-600);margin-bottom:.5rem">\u26A0\uFE0F Todos os hor\xE1rios est\xE3o lotados. Informe um hor\xE1rio manualmente:</p>
            <input class="input" type="time" [(ngModel)]="time" style="width:140px" min="08:00" max="19:00" step="900" />
          </div>
        </div>

        <!-- Escopo (s\xE9rie) -->
        <div class="field-group" *ngIf="hasSerie">
          <label for="rd-escopo">Escopo do Reagendamento</label>
          <select id="rd-escopo" class="input" [(ngModel)]="escopo">
            <option value="SOMENTE_ESTA">Somente esta sess\xE3o</option>
            <option value="DESTA_EM_DIANTE">Esta e todas as futuras da s\xE9rie</option>
            <option value="TODA_SERIE">Toda a s\xE9rie</option>
          </select>
        </div>

        <!-- Motivo -->
        <div class="field-group">
          <label for="rd-motivo">Motivo (opcional)</label>
          <input id="rd-motivo" class="input" [(ngModel)]="motivo"
            placeholder="Ex: Pedido do paciente, conflito de agenda..." />
        </div>

        <p *ngIf="error" role="alert" class="error-msg">{{ error }}</p>

      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" (click)="close()" [disabled]="loading">Cancelar</button>
        <button class="btn btn-primary" (click)="confirmar()" [disabled]="!isValid || loading">
          {{ loading ? 'Reagendando...' : '\u{1F4C5} Confirmar Reagendamento' }}
        </button>
      </div>
    </ng-container>

  </div>
</div>
`, styles: ["/* src/app/components/reschedule-dialog/reschedule-dialog.component.scss */\n.reschedule-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.slots-loading,\n.slots-empty {\n  font-size: 0.85rem;\n  color: var(--gray-400);\n  padding: 0.5rem 0;\n}\n.slots-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.slot-btn {\n  padding: 0.5rem 0.25rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--gray-200);\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  text-align: center;\n}\n.slot-btn:focus-visible {\n  outline: 2px solid var(--purple-600);\n  outline-offset: 2px;\n}\n.slot-btn.slot-livre {\n  background: #fff;\n  color: var(--gray-700);\n}\n.slot-btn.slot-livre:hover {\n  border-color: var(--purple-400);\n  background: var(--purple-50);\n}\n.slot-btn.slot-selected {\n  background: var(--purple-600);\n  border-color: var(--purple-600);\n  color: #fff;\n}\n.slot-btn.slot-cheio {\n  background: var(--red-100);\n  border-color: var(--red-100);\n  color: var(--red-600);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.slot-btn .slot-full-icon {\n  font-size: 0.65rem;\n}\n.error-msg {\n  font-size: 0.85rem;\n  color: var(--red-600);\n  margin: 0;\n}\n.success-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem 0;\n  text-align: center;\n}\n.success-state .success-icon {\n  font-size: 2.5rem;\n}\n.success-state h2 {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.success-state p {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=reschedule-dialog.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], { open: [{
    type: Input
  }], patientName: [{
    type: Input
  }], appointmentId: [{
    type: Input
  }], hasSerie: [{
    type: Input
  }], openChange: [{
    type: Output
  }], rescheduled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RescheduleDialogComponent, { className: "RescheduleDialogComponent", filePath: "src/app/components/reschedule-dialog/reschedule-dialog.component.ts", lineNumber: 13 });
})();

// src/app/components/scheduling-dialog/scheduling-dialog.component.ts
var _c02 = () => [1, 2, 3];
function SchedulingDialogComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Avalia\xE7\xE3o Agendada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Agendamento de ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.patientName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" confirmado para ", ctx_r1.date, " \xE0s ", ctx_r1.time, ".");
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.step === s_r4)("done", ctx_r1.step > s_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.step > s_r4 ? "\u2713" : s_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stepLabels[i_r5]);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3, "Nome do Paciente ");
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SchedulingDialogComponent_div_0_ng_container_3_div_8_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.patientName, $event) || (ctx_r1.patientName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 20)(9, "label", 25);
    \u0275\u0275text(10, "Telefone ");
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function SchedulingDialogComponent_div_0_ng_container_3_div_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.patientPhone, $event) || (ctx_r1.patientPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20)(15, "label", 27);
    \u0275\u0275text(16, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SchedulingDialogComponent_div_0_ng_container_3_div_8_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.patientEmail, $event) || (ctx_r1.patientEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 20)(19, "label", 29);
    \u0275\u0275text(20, "Tipo de Consulta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SchedulingDialogComponent_div_0_ng_container_3_div_8_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.appointmentType, $event) || (ctx_r1.appointmentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 31);
    \u0275\u0275text(23, "Avalia\xE7\xE3o Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 32);
    \u0275\u0275text(25, "Sess\xE3o de Tratamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 33);
    \u0275\u0275text(27, "Reavalia\xE7\xE3o");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patientName);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patientPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patientEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.appointmentType);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_div_9_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_ng_container_3_div_9_button_9_Template_button_click_0_listener() {
      const t_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.time = t_r9);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.time === t_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "label", 34);
    \u0275\u0275text(3, "Data da Consulta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SchedulingDialogComponent_div_0_ng_container_3_div_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.date, $event) || (ctx_r1.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "label");
    \u0275\u0275text(7, "Hor\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36);
    \u0275\u0275template(9, SchedulingDialogComponent_div_0_ng_container_3_div_9_button_9_Template, 2, 3, "button", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.date);
    \u0275\u0275property("min", ctx_r1.today);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.times);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_div_10_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 39)(2, "h3");
    \u0275\u0275text(3, "Confirmar Agendamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "div", 41)(6, "span", 42);
    \u0275\u0275text(7, "Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 41)(11, "span", 42);
    \u0275\u0275text(12, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 41)(16, "span", 42);
    \u0275\u0275text(17, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 41)(21, "span", 42);
    \u0275\u0275text(22, "Data/Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(25, SchedulingDialogComponent_div_0_ng_container_3_div_10_p_25_Template, 2, 1, "p", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.patientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.patientPhone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.date, " \xE0s ", ctx_r1.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_ng_container_3_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(1, " Pr\xF3ximo \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.step === 1 && !ctx_r1.isStep1Valid || ctx_r1.step === 2 && !ctx_r1.isStep2Valid);
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_ng_container_3_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Agendando..." : "\u2713 Confirmar", " ");
  }
}
function SchedulingDialogComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "h2");
    \u0275\u0275text(3, "Novo Agendamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_ng_container_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275template(7, SchedulingDialogComponent_div_0_ng_container_3_div_7_Template, 5, 6, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SchedulingDialogComponent_div_0_ng_container_3_div_8_Template, 28, 4, "div", 11)(9, SchedulingDialogComponent_div_0_ng_container_3_div_9_Template, 10, 3, "div", 11)(10, SchedulingDialogComponent_div_0_ng_container_3_div_10_Template, 26, 6, "div", 11);
    \u0275\u0275elementStart(11, "div", 12)(12, "button", 13);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_ng_container_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(13, "Voltar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "button", 15);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_ng_container_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(16, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, SchedulingDialogComponent_div_0_ng_container_3_button_17_Template, 2, 1, "button", 16)(18, SchedulingDialogComponent_div_0_ng_container_3_button_18_Template, 2, 2, "button", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.step === 1 || ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.step < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 3);
  }
}
function SchedulingDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function SchedulingDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, SchedulingDialogComponent_div_0_div_2_Template, 10, 3, "div", 3)(3, SchedulingDialogComponent_div_0_ng_container_3_Template, 19, 9, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.success);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.success);
  }
}
var _SchedulingDialogComponent = class _SchedulingDialogComponent {
  get today() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  get typeLabel() {
    const map = {
      avaliacao: "Avalia\xE7\xE3o Inicial",
      sessao: "Sess\xE3o de Tratamento",
      reavaliacao: "Reavalia\xE7\xE3o"
    };
    return map[this.appointmentType] ?? this.appointmentType;
  }
  get isStep1Valid() {
    return !!(this.patientName.trim() && this.patientPhone.trim());
  }
  get isStep2Valid() {
    return !!(this.date && this.time);
  }
  constructor(api) {
    this.api = api;
    this.open = false;
    this.contactName = "";
    this.contactPhone = "";
    this.contactEmail = "";
    this.contactId = "";
    this.openChange = new EventEmitter();
    this.scheduled = new EventEmitter();
    this.step = 1;
    this.stepLabels = ["Dados", "Data/Hora", "Confirma\xE7\xE3o"];
    this.patientName = "";
    this.patientPhone = "";
    this.patientEmail = "";
    this.appointmentType = "avaliacao";
    this.date = "";
    this.time = "09:30";
    this.times = [
      "08:00",
      "08:45",
      "09:30",
      "10:15",
      "11:00",
      "11:45",
      "13:00",
      "13:45",
      "14:00",
      "14:45",
      "15:30",
      "16:15",
      "17:00",
      "17:45",
      "18:30",
      "19:00"
    ];
    this.loading = false;
    this.error = "";
    this.success = false;
  }
  ngOnChanges() {
    if (this.open) {
      this.success = false;
      this.error = "";
      this.loading = false;
    }
    if (this.contactName)
      this.patientName = this.contactName;
    if (this.contactPhone)
      this.patientPhone = this.contactPhone;
    if (this.contactEmail)
      this.patientEmail = this.contactEmail;
  }
  next() {
    if (this.step === 1 && !this.isStep1Valid)
      return;
    if (this.step === 2 && !this.isStep2Valid)
      return;
    this.step = Math.min(3, this.step + 1);
  }
  back() {
    this.step = Math.max(1, this.step - 1);
  }
  confirm() {
    if (this.loading)
      return;
    this.loading = true;
    this.error = "";
    const dataHora = `${this.date}T${this.time}:00`;
    if (this.contactId) {
      this.api.agendarAvaliacao(this.contactId, { dataHora, modoAgendamento: "AVULSO" }).subscribe({
        next: () => this.onSuccess(),
        error: (err) => this.onError(err)
      });
    } else {
      const parts = this.patientName.trim().split(" ");
      const nome = parts[0];
      const sobrenome = parts.slice(1).join(" ") || nome;
      this.api.criarLead({
        nome,
        sobrenome,
        telefone: this.patientPhone,
        email: this.patientEmail || `${nome.toLowerCase()}@Vida em Movimento.temp`
      }).subscribe({
        next: (lead) => {
          this.api.agendarAvaliacao(lead.id, { dataHora, modoAgendamento: "AVULSO" }).subscribe({
            next: () => this.onSuccess(),
            error: (err) => this.onError(err)
          });
        },
        error: (err) => this.onError(err)
      });
    }
  }
  onSuccess() {
    this.loading = false;
    this.success = true;
    this.scheduled.emit();
    setTimeout(() => {
      this.openChange.emit(false);
      this.reset();
    }, 1500);
  }
  onError(err) {
    this.loading = false;
    const msg = err?.error?.mensagem;
    this.error = msg ?? "Erro ao agendar. Verifique as informa\xE7\xF5es.";
    this.step = 3;
  }
  close() {
    this.openChange.emit(false);
    this.reset();
  }
  reset() {
    this.step = 1;
    this.patientName = "";
    this.patientPhone = "";
    this.patientEmail = "";
    this.appointmentType = "avaliacao";
    this.date = "";
    this.time = "09:30";
    this.loading = false;
    this.error = "";
    this.success = false;
  }
};
_SchedulingDialogComponent.\u0275fac = function SchedulingDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SchedulingDialogComponent)(\u0275\u0275directiveInject(ApiService));
};
_SchedulingDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchedulingDialogComponent, selectors: [["app-scheduling-dialog"]], inputs: { open: "open", contactName: "contactName", contactPhone: "contactPhone", contactEmail: "contactEmail", contactId: "contactId" }, outputs: { openChange: "openChange", scheduled: "scheduled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-backdrop", "role", "dialog", "aria-modal", "true", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", 1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], ["class", "success-state", 4, "ngIf"], [4, "ngIf"], [1, "success-state"], ["aria-hidden", "true", 1, "success-icon"], [1, "modal-header"], ["aria-label", "Fechar", 1, "modal-close", 3, "click"], [1, "step-indicator"], ["class", "step-item", 3, "active", "done", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click", "disabled"], [2, "display", "flex", "gap", ".5rem"], [1, "btn", "btn-ghost", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "step-item"], [1, "step-circle"], [1, "tab-content"], [1, "field-group"], ["for", "sd-name"], [2, "color", "var(--red-600)"], ["id", "sd-name", "placeholder", "Nome completo", "autocomplete", "name", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-2", 2, "gap", ".875rem"], ["for", "sd-phone"], ["id", "sd-phone", "placeholder", "(11) 99999-9999", "autocomplete", "tel", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "sd-email"], ["id", "sd-email", "type", "email", "placeholder", "email@exemplo.com", "autocomplete", "email", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "sd-type"], ["id", "sd-type", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "avaliacao"], ["value", "sessao"], ["value", "reavaliacao"], ["for", "sd-date"], ["id", "sd-date", "type", "date", 1, "input", 3, "ngModelChange", "ngModel", "min"], [1, "time-grid"], ["type", "button", "class", "time-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "time-btn", 3, "click"], [1, "confirm-card", "card"], [1, "confirm-list"], [1, "confirm-row"], [1, "confirm-label"], ["role", "alert", "style", "color:var(--red-600);font-size:.85rem;margin-top:.5rem", 4, "ngIf"], ["role", "alert", 2, "color", "var(--red-600)", "font-size", ".85rem", "margin-top", ".5rem"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function SchedulingDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SchedulingDialogComponent_div_0_Template, 4, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.open);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid var(--gray-100);\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: var(--gray-400);\n}\n.step-item.active[_ngcontent-%COMP%] {\n  color: var(--purple-600);\n  font-weight: 600;\n}\n.step-item.done[_ngcontent-%COMP%] {\n  color: var(--green-600);\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 2px solid currentColor;\n  display: grid;\n  place-items: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: var(--purple-600);\n  color: #fff;\n  border-color: var(--purple-600);\n}\n.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: var(--green-600);\n  color: #fff;\n  border-color: var(--green-600);\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-height: 200px;\n}\n.time-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n}\n.time-btn[_ngcontent-%COMP%] {\n  padding: 0.55rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--gray-200);\n  background: #fff;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.time-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--purple-400, #a78bfa);\n  background: var(--purple-50);\n}\n.time-btn.selected[_ngcontent-%COMP%] {\n  border-color: var(--purple-600);\n  background: var(--purple-600);\n  color: #fff;\n}\n.confirm-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background: var(--gray-50);\n}\n.confirm-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.confirm-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.confirm-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n}\n.confirm-row[_ngcontent-%COMP%]   .confirm-label[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-weight: 500;\n}\n/*# sourceMappingURL=scheduling-dialog.component.css.map */"] });
var SchedulingDialogComponent = _SchedulingDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchedulingDialogComponent, [{
    type: Component,
    args: [{ selector: "app-scheduling-dialog", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-backdrop" *ngIf="open" (click)="close()" role="dialog" aria-modal="true">
  <div class="modal" (click)="$event.stopPropagation()">

    <!-- SUCCESS -->
    <div *ngIf="success" class="success-state">
      <div class="success-icon" aria-hidden="true">\u2705</div>
      <h2>Avalia\xE7\xE3o Agendada!</h2>
      <p>Agendamento de <strong>{{ patientName }}</strong> confirmado para {{ date }} \xE0s {{ time }}.</p>
    </div>

    <ng-container *ngIf="!success">
      <div class="modal-header">
        <h2>Novo Agendamento</h2>
        <button class="modal-close" (click)="close()" aria-label="Fechar">\u2715</button>
      </div>

      <!-- Step indicator -->
      <div class="step-indicator">
        <div class="step-item" *ngFor="let s of [1,2,3]; let i = index" [class.active]="step === s" [class.done]="step > s">
          <div class="step-circle">{{ step > s ? '\u2713' : s }}</div>
          <span>{{ stepLabels[i] }}</span>
        </div>
      </div>

      <!-- STEP 1 -->
      <div *ngIf="step === 1" class="tab-content">
        <div class="field-group">
          <label for="sd-name">Nome do Paciente <span style="color:var(--red-600)">*</span></label>
          <input id="sd-name" class="input" [(ngModel)]="patientName" placeholder="Nome completo" autocomplete="name" />
        </div>
        <div class="grid grid-2" style="gap:.875rem">
          <div class="field-group">
            <label for="sd-phone">Telefone <span style="color:var(--red-600)">*</span></label>
            <input id="sd-phone" class="input" [(ngModel)]="patientPhone" placeholder="(11) 99999-9999" autocomplete="tel" />
          </div>
          <div class="field-group">
            <label for="sd-email">E-mail</label>
            <input id="sd-email" class="input" type="email" [(ngModel)]="patientEmail" placeholder="email@exemplo.com" autocomplete="email" />
          </div>
        </div>
        <div class="field-group">
          <label for="sd-type">Tipo de Consulta</label>
          <select id="sd-type" class="input" [(ngModel)]="appointmentType">
            <option value="avaliacao">Avalia\xE7\xE3o Inicial</option>
            <option value="sessao">Sess\xE3o de Tratamento</option>
            <option value="reavaliacao">Reavalia\xE7\xE3o</option>
          </select>
        </div>
      </div>

      <!-- STEP 2 -->
      <div *ngIf="step === 2" class="tab-content">
        <div class="field-group">
          <label for="sd-date">Data da Consulta</label>
          <input id="sd-date" class="input" type="date" [(ngModel)]="date" [min]="today" />
        </div>
        <div class="field-group">
          <label>Hor\xE1rio</label>
          <div class="time-grid">
            <button *ngFor="let t of times" type="button"
              class="time-btn" [class.selected]="time === t" (click)="time = t">{{ t }}</button>
          </div>
        </div>
      </div>

      <!-- STEP 3 -->
      <div *ngIf="step === 3" class="tab-content">
        <div class="confirm-card card">
          <h3>Confirmar Agendamento</h3>
          <div class="confirm-list">
            <div class="confirm-row"><span class="confirm-label">Paciente</span><span>{{ patientName }}</span></div>
            <div class="confirm-row"><span class="confirm-label">Telefone</span><span>{{ patientPhone }}</span></div>
            <div class="confirm-row"><span class="confirm-label">Tipo</span><span>{{ typeLabel }}</span></div>
            <div class="confirm-row"><span class="confirm-label">Data/Hora</span><span>{{ date }} \xE0s {{ time }}</span></div>
          </div>
        </div>
        <p *ngIf="error" role="alert" style="color:var(--red-600);font-size:.85rem;margin-top:.5rem">{{ error }}</p>
      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" (click)="back()" [disabled]="step === 1 || loading">Voltar</button>
        <div style="display:flex;gap:.5rem">
          <button class="btn btn-ghost" (click)="close()" [disabled]="loading">Cancelar</button>
          <button *ngIf="step < 3" class="btn btn-primary" (click)="next()"
            [disabled]="(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)">
            Pr\xF3ximo \u2192
          </button>
          <button *ngIf="step === 3" class="btn btn-primary" (click)="confirm()" [disabled]="loading">
            {{ loading ? 'Agendando...' : '\u2713 Confirmar' }}
          </button>
        </div>
      </div>
    </ng-container>

  </div>
</div>
`, styles: ["/* src/app/components/scheduling-dialog/scheduling-dialog.component.scss */\n.step-indicator {\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid var(--gray-100);\n}\n.step-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: var(--gray-400);\n}\n.step-item.active {\n  color: var(--purple-600);\n  font-weight: 600;\n}\n.step-item.done {\n  color: var(--green-600);\n}\n.step-circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 2px solid currentColor;\n  display: grid;\n  place-items: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.active .step-circle {\n  background: var(--purple-600);\n  color: #fff;\n  border-color: var(--purple-600);\n}\n.done .step-circle {\n  background: var(--green-600);\n  color: #fff;\n  border-color: var(--green-600);\n}\n.tab-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-height: 200px;\n}\n.time-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n}\n.time-btn {\n  padding: 0.55rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--gray-200);\n  background: #fff;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.time-btn:hover {\n  border-color: var(--purple-400, #a78bfa);\n  background: var(--purple-50);\n}\n.time-btn.selected {\n  border-color: var(--purple-600);\n  background: var(--purple-600);\n  color: #fff;\n}\n.confirm-card {\n  padding: 1.25rem;\n  background: var(--gray-50);\n}\n.confirm-card h3 {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.confirm-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.confirm-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n}\n.confirm-row .confirm-label {\n  color: var(--gray-500);\n  font-weight: 500;\n}\n/*# sourceMappingURL=scheduling-dialog.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], { open: [{
    type: Input
  }], contactName: [{
    type: Input
  }], contactPhone: [{
    type: Input
  }], contactEmail: [{
    type: Input
  }], contactId: [{
    type: Input
  }], openChange: [{
    type: Output
  }], scheduled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchedulingDialogComponent, { className: "SchedulingDialogComponent", filePath: "src/app/components/scheduling-dialog/scheduling-dialog.component.ts", lineNumber: 13 });
})();

// src/app/components/create-user-dialog/create-user-dialog.component.ts
function CreateUserDialogComponent_div_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, " \u26A0\uFE0F As senhas n\xE3o coincidem ");
    \u0275\u0275elementEnd();
  }
}
function CreateUserDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function CreateUserDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function CreateUserDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2");
    \u0275\u0275text(4, "Novo Usu\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function CreateUserDialogComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label");
    \u0275\u0275text(10, "Nome Completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CreateUserDialogComponent_div_0_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 6)(14, "label");
    \u0275\u0275text(15, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function CreateUserDialogComponent_div_0_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 6)(18, "label");
    \u0275\u0275text(19, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CreateUserDialogComponent_div_0_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 6)(22, "label");
    \u0275\u0275text(23, "Tipo de Usu\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function CreateUserDialogComponent_div_0_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role, $event) || (ctx_r1.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 12);
    \u0275\u0275text(26, "Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 13);
    \u0275\u0275text(28, "Fisioterapeuta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 14);
    \u0275\u0275text(30, "Recepcionista");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 8)(32, "div", 6)(33, "label");
    \u0275\u0275text(34, "Senha Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CreateUserDialogComponent_div_0_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 6)(37, "label");
    \u0275\u0275text(38, "Confirmar Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CreateUserDialogComponent_div_0_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(40, CreateUserDialogComponent_div_0_div_40_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "button", 18);
    \u0275\u0275listener("click", function CreateUserDialogComponent_div_0_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(43, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 19);
    \u0275\u0275listener("click", function CreateUserDialogComponent_div_0_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(45, " \u{1F464} Criar Usu\xE1rio ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.role);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.password && ctx_r1.confirmPassword && ctx_r1.password !== ctx_r1.confirmPassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isValid);
  }
}
var _CreateUserDialogComponent = class _CreateUserDialogComponent {
  constructor() {
    this.open = false;
    this.openChange = new EventEmitter();
    this.created = new EventEmitter();
    this.name = "";
    this.email = "";
    this.phone = "";
    this.role = "paciente";
    this.password = "";
    this.confirmPassword = "";
  }
  get isValid() {
    return !!(this.name && this.email && this.phone && this.password && this.password === this.confirmPassword);
  }
  create() {
    if (!this.isValid)
      return;
    const newUser = {
      id: crypto.randomUUID(),
      name: this.name,
      email: this.email,
      phone: this.phone,
      role: this.role,
      status: "ativo",
      createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
    };
    this.created.emit(newUser);
    this.openChange.emit(false);
    this.reset();
  }
  close() {
    this.openChange.emit(false);
    this.reset();
  }
  reset() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.role = "paciente";
    this.password = "";
    this.confirmPassword = "";
  }
};
_CreateUserDialogComponent.\u0275fac = function CreateUserDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateUserDialogComponent)();
};
_CreateUserDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateUserDialogComponent, selectors: [["app-create-user-dialog"]], inputs: { open: "open" }, outputs: { openChange: "openChange", created: "created" }, decls: 1, vars: 1, consts: [["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "form-body"], [1, "field-group"], ["placeholder", "Nome do usu\xE1rio", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-2", 2, "gap", ".875rem"], ["type", "email", "placeholder", "email@exemplo.com", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "(11) 99999-9999", 1, "input", 3, "ngModelChange", "ngModel"], [1, "input", 3, "ngModelChange", "ngModel"], ["value", "paciente"], ["value", "fisioterapeuta"], ["value", "recepcionista"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "password-mismatch", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "password-mismatch"]], template: function CreateUserDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CreateUserDialogComponent_div_0_Template, 46, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.open);
  }
}, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.form-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.password-mismatch[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  background: var(--red-100);\n  border-radius: var(--radius-sm);\n  font-size: 0.82rem;\n  color: var(--red-600);\n  font-weight: 500;\n}\n/*# sourceMappingURL=create-user-dialog.component.css.map */"] });
var CreateUserDialogComponent = _CreateUserDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateUserDialogComponent, [{
    type: Component,
    args: [{ selector: "app-create-user-dialog", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="modal-backdrop" *ngIf="open" (click)="close()">\n  <div class="modal" (click)="$event.stopPropagation()">\n\n    <div class="modal-header">\n      <h2>Novo Usu\xE1rio</h2>\n      <button class="modal-close" (click)="close()">\u2715</button>\n    </div>\n\n    <div class="form-body">\n      <div class="field-group">\n        <label>Nome Completo</label>\n        <input class="input" [(ngModel)]="name" placeholder="Nome do usu\xE1rio" />\n      </div>\n\n      <div class="grid grid-2" style="gap:.875rem">\n        <div class="field-group">\n          <label>E-mail</label>\n          <input class="input" type="email" [(ngModel)]="email" placeholder="email@exemplo.com" />\n        </div>\n        <div class="field-group">\n          <label>Telefone</label>\n          <input class="input" [(ngModel)]="phone" placeholder="(11) 99999-9999" />\n        </div>\n      </div>\n\n      <div class="field-group">\n        <label>Tipo de Usu\xE1rio</label>\n        <select class="input" [(ngModel)]="role">\n          <option value="paciente">Paciente</option>\n          <option value="fisioterapeuta">Fisioterapeuta</option>\n          <option value="recepcionista">Recepcionista</option>\n        </select>\n      </div>\n\n      <div class="grid grid-2" style="gap:.875rem">\n        <div class="field-group">\n          <label>Senha Inicial</label>\n          <input class="input" type="password" [(ngModel)]="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />\n        </div>\n        <div class="field-group">\n          <label>Confirmar Senha</label>\n          <input class="input" type="password" [(ngModel)]="confirmPassword" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />\n        </div>\n      </div>\n\n      <div class="password-mismatch" *ngIf="password && confirmPassword && password !== confirmPassword">\n        \u26A0\uFE0F As senhas n\xE3o coincidem\n      </div>\n    </div>\n\n    <div class="modal-footer">\n      <button class="btn btn-outline" (click)="close()">Cancelar</button>\n      <button class="btn btn-primary" (click)="create()" [disabled]="!isValid">\n        \u{1F464} Criar Usu\xE1rio\n      </button>\n    </div>\n\n  </div>\n</div>\n', styles: ["/* src/app/components/create-user-dialog/create-user-dialog.component.scss */\n.form-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.password-mismatch {\n  padding: 0.625rem 0.875rem;\n  background: var(--red-100);\n  border-radius: var(--radius-sm);\n  font-size: 0.82rem;\n  color: var(--red-600);\n  font-weight: 500;\n}\n/*# sourceMappingURL=create-user-dialog.component.css.map */\n"] }]
  }], null, { open: [{
    type: Input
  }], openChange: [{
    type: Output
  }], created: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateUserDialogComponent, { className: "CreateUserDialogComponent", filePath: "src/app/components/create-user-dialog/create-user-dialog.component.ts", lineNumber: 13 });
})();

// src/app/components/user-management-panel/user-management-panel.component.ts
function UserManagementPanelComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 14)(18, "button", 15);
    \u0275\u0275listener("click", function UserManagementPanelComponent_tr_30_Template_button_click_18_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetPassword(user_r2));
    });
    \u0275\u0275text(19, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 16);
    \u0275\u0275listener("click", function UserManagementPanelComponent_tr_30_Template_button_click_20_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleStatus(user_r2));
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.roleBadge(user_r2.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.roleLabel(user_r2.role));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r2.status === "ativo" ? "badge-green" : "badge-gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.status === "ativo" ? "Ativo" : "Inativo", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.createdAt);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", user_r2.status === "ativo" ? "\u{1F6AB}" : "\u2705", " ");
  }
}
function UserManagementPanelComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17)(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Nenhum usu\xE1rio encontrado");
    \u0275\u0275elementEnd()()()();
  }
}
var _UserManagementPanelComponent = class _UserManagementPanelComponent {
  constructor() {
    this.searchTerm = "";
    this.createOpen = false;
    this.users = [];
  }
  filteredUsers() {
    const s = this.searchTerm.toLowerCase();
    return this.users.filter((u) => u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s) || u.phone.includes(s));
  }
  addUser(user) {
    this.users = [user, ...this.users];
  }
  resetPassword(user) {
    window.alert(`Link de redefini\xE7\xE3o de senha enviado para ${user.email}.`);
  }
  toggleStatus(user) {
    this.users = this.users.map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { status: u.status === "ativo" ? "inativo" : "ativo" }) : u);
  }
  roleLabel(role) {
    const map = {
      paciente: "Paciente",
      fisioterapeuta: "Fisioterapeuta",
      recepcionista: "Recepcionista"
    };
    return map[role] ?? role;
  }
  roleBadge(role) {
    const map = {
      paciente: "badge-blue",
      fisioterapeuta: "badge-purple",
      recepcionista: "badge-pink"
    };
    return map[role] ?? "badge-gray";
  }
};
_UserManagementPanelComponent.\u0275fac = function UserManagementPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserManagementPanelComponent)();
};
_UserManagementPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementPanelComponent, selectors: [["app-user-management-panel"]], decls: 41, vars: 6, consts: [[1, "ump-wrap"], [1, "ump-header"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "ump-search"], [1, "search-wrap"], [1, "search-icon"], ["placeholder", "Buscar por nome, email ou telefone...", 1, "input", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "results-count", "text-xs", "text-gray", 2, "margin-top", ".75rem"], [3, "openChange", "created", "open"], [1, "text-sm", "text-gray"], [1, "badge", 3, "ngClass"], [1, "row-actions"], ["title", "Resetar senha", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["title", "Ativar/Desativar", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["colspan", "7"], [1, "empty-state"], [1, "empty-icon"]], template: function UserManagementPanelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "Gest\xE3o de Usu\xE1rios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function UserManagementPanelComponent_Template_button_click_4_listener() {
      return ctx.createOpen = true;
    });
    \u0275\u0275text(5, " \u{1F464} Novo Usu\xE1rio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "span", 5);
    \u0275\u0275text(9, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementPanelComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "table")(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Criado em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, UserManagementPanelComponent_tr_30_Template, 22, 9, "tr", 8)(31, UserManagementPanelComponent_tr_31_Template, 7, 0, "tr", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "p", 10);
    \u0275\u0275text(33, " Mostrando ");
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " de ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " usu\xE1rios ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "app-create-user-dialog", 11);
    \u0275\u0275twoWayListener("openChange", function UserManagementPanelComponent_Template_app_create_user_dialog_openChange_40_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.createOpen, $event) || (ctx.createOpen = $event);
      return $event;
    });
    \u0275\u0275listener("created", function UserManagementPanelComponent_Template_app_create_user_dialog_created_40_listener($event) {
      return ctx.addUser($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx.filteredUsers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredUsers().length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.filteredUsers().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.users.length);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx.createOpen);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CreateUserDialogComponent], styles: ["\n\n.ump-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.ump-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ump-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.ump-search[_ngcontent-%COMP%]   .search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 360px;\n}\n.ump-search[_ngcontent-%COMP%]   .search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 0.85rem;\n}\n.ump-search[_ngcontent-%COMP%]   .search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.2rem;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n/*# sourceMappingURL=user-management-panel.component.css.map */"] });
var UserManagementPanelComponent = _UserManagementPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementPanelComponent, [{
    type: Component,
    args: [{ selector: "app-user-management-panel", standalone: true, imports: [CommonModule, FormsModule, CreateUserDialogComponent], template: `<div class="ump-wrap">

  <div class="ump-header">
    <h2>Gest\xE3o de Usu\xE1rios</h2>
    <button class="btn btn-primary btn-sm" (click)="createOpen = true">
      \u{1F464} Novo Usu\xE1rio
    </button>
  </div>

  <div class="ump-search">
    <div class="search-wrap">
      <span class="search-icon">\u{1F50D}</span>
      <input class="input search-input" [(ngModel)]="searchTerm" placeholder="Buscar por nome, email ou telefone..." />
    </div>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Tipo</th>
          <th>Status</th>
          <th>Criado em</th>
          <th>A\xE7\xF5es</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of filteredUsers()">
          <td><strong>{{ user.name }}</strong></td>
          <td class="text-sm text-gray">{{ user.email }}</td>
          <td class="text-sm text-gray">{{ user.phone }}</td>
          <td>
            <span class="badge" [ngClass]="roleBadge(user.role)">{{ roleLabel(user.role) }}</span>
          </td>
          <td>
            <span class="badge" [ngClass]="user.status === 'ativo' ? 'badge-green' : 'badge-gray'">
              {{ user.status === 'ativo' ? 'Ativo' : 'Inativo' }}
            </span>
          </td>
          <td class="text-sm text-gray">{{ user.createdAt }}</td>
          <td>
            <div class="row-actions">
              <button class="btn btn-ghost btn-sm" (click)="resetPassword(user)" title="Resetar senha">\u{1F511}</button>
              <button class="btn btn-ghost btn-sm" (click)="toggleStatus(user)" title="Ativar/Desativar">
                {{ user.status === 'ativo' ? '\u{1F6AB}' : '\u2705' }}
              </button>
            </div>
          </td>
        </tr>
        <tr *ngIf="filteredUsers().length === 0">
          <td colspan="7">
            <div class="empty-state">
              <span class="empty-icon">\u{1F465}</span>
              <p>Nenhum usu\xE1rio encontrado</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="results-count text-xs text-gray" style="margin-top:.75rem">
    Mostrando <strong>{{ filteredUsers().length }}</strong> de <strong>{{ users.length }}</strong> usu\xE1rios
  </p>

</div>

<app-create-user-dialog [(open)]="createOpen" (created)="addUser($event)" />
`, styles: ["/* src/app/components/user-management-panel/user-management-panel.component.scss */\n.ump-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.ump-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ump-header h2 {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.ump-search .search-wrap {\n  position: relative;\n  max-width: 360px;\n}\n.ump-search .search-wrap .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 0.85rem;\n}\n.ump-search .search-wrap .search-input {\n  padding-left: 2.2rem;\n}\n.row-actions {\n  display: flex;\n  gap: 0.25rem;\n}\n/*# sourceMappingURL=user-management-panel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementPanelComponent, { className: "UserManagementPanelComponent", filePath: "src/app/components/user-management-panel/user-management-panel.component.ts", lineNumber: 14 });
})();

// src/app/components/patient-sessions-dialog/patient-sessions-dialog.component.ts
function PatientSessionsDialogComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Sess\xF5es Agendadas!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_div_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(11, "Fechar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quantidadeSessoes, " sess\xF5es foram agendadas para ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pacienteNome);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" com frequ\xEAncia de ", ctx_r1.frequenciaSemanal, "x por semana. ");
  }
}
function PatientSessionsDialogComponent_div_0_ng_container_3_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_ng_container_3_button_33_Template_button_click_0_listener() {
      const d_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDia(d_r6.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isDiaSelecionado(d_r6.code));
    \u0275\u0275attribute("aria-pressed", ctx_r1.isDiaSelecionado(d_r6.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r6.label, " ");
  }
}
function PatientSessionsDialogComponent_div_0_ng_container_3_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r7 = ctx.$implicit;
    \u0275\u0275property("value", h_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r7);
  }
}
function PatientSessionsDialogComponent_div_0_ng_container_3_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PatientSessionsDialogComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Agendar Sess\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "div", 13)(12, "label", 14);
    \u0275\u0275text(13, "Quantidade de sess\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.quantidadeSessoes, $event) || (ctx_r1.quantidadeSessoes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "label", 16);
    \u0275\u0275text(17, "Frequ\xEAncia por semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.frequenciaSemanal, $event) || (ctx_r1.frequenciaSemanal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 18);
    \u0275\u0275text(20, "1x por semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 18);
    \u0275\u0275text(22, "2x por semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 18);
    \u0275\u0275text(24, "3x por semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 18);
    \u0275\u0275text(26, "4x por semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 18);
    \u0275\u0275text(28, "5x por semana");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 13)(30, "label");
    \u0275\u0275text(31, "Dias preferidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19);
    \u0275\u0275template(33, PatientSessionsDialogComponent_div_0_ng_container_3_button_33_Template, 2, 4, "button", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 12)(35, "div", 13)(36, "label", 21);
    \u0275\u0275text(37, "Data de in\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.dataInicio, $event) || (ctx_r1.dataInicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 13)(40, "label", 23);
    \u0275\u0275text(41, "Hor\xE1rio preferido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.horario, $event) || (ctx_r1.horario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(43, PatientSessionsDialogComponent_div_0_ng_container_3_option_43_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 26)(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, PatientSessionsDialogComponent_div_0_ng_container_3_p_47_Template, 2, 1, "p", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 28)(49, "button", 29);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(50, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 30);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_ng_container_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmar());
    });
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pacienteNome, " \xB7 Plano de 30 dias ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.quantidadeSessoes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.frequenciaSemanal);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.dias);
    \u0275\u0275advance(5);
    \u0275\u0275property("min", ctx_r1.dataInicioMin);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dataInicio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.horario);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.horarios);
    \u0275\u0275advance();
    \u0275\u0275classProp("validade-ok", ctx_r1.cabeDentro)("validade-err", !ctx_r1.cabeDentro);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.avisoValidade);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isValid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Agendando..." : "Confirmar Agendamento", " ");
  }
}
function PatientSessionsDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function PatientSessionsDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, PatientSessionsDialogComponent_div_0_div_2_Template, 12, 3, "div", 3)(3, PatientSessionsDialogComponent_div_0_ng_container_3_Template, 53, 22, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.success);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.success);
  }
}
var DIAS = [
  { code: "SEG", label: "Segunda" },
  { code: "TER", label: "Ter\xE7a" },
  { code: "QUA", label: "Quarta" },
  { code: "QUI", label: "Quinta" },
  { code: "SEX", label: "Sexta" }
];
var HORARIOS = Array.from({ length: 25 }, (_, i) => {
  const h = Math.floor(i / 2) + 8;
  const m = i % 2 === 0 ? "00" : "30";
  if (h > 19 || h === 19 && m === "30")
    return null;
  return `${String(h).padStart(2, "0")}:${m}`;
}).filter(Boolean);
var _PatientSessionsDialogComponent = class _PatientSessionsDialogComponent {
  get validadeEmDias() {
    return 30;
  }
  get semanasNecessarias() {
    return Math.ceil(this.quantidadeSessoes / this.frequenciaSemanal);
  }
  get diasNecessarios() {
    return this.semanasNecessarias * 7;
  }
  get cabeDentro() {
    return this.diasNecessarios <= this.validadeEmDias;
  }
  get avisoValidade() {
    if (this.cabeDentro)
      return `${this.quantidadeSessoes} sess\xF5es em ${this.semanasNecessarias} semanas \u2014 cabe nos 30 dias \u2713`;
    return `${this.diasNecessarios} dias necess\xE1rios \u2014 excede os 30 dias. Aumente a frequ\xEAncia.`;
  }
  get dataInicioMin() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  get isValid() {
    return !!(this.dataInicio && this.horario && this.quantidadeSessoes > 0 && this.frequenciaSemanal > 0 && this.diasSelecionados.length > 0 && this.cabeDentro);
  }
  ngOnChanges() {
    if (this.open) {
      this.success = false;
      this.error = "";
      this.loading = false;
      this.dataInicio = "";
      this.quantidadeSessoes = 9;
      this.frequenciaSemanal = 2;
      this.horario = "09:00";
      this.diasSelecionados = ["SEG", "QUA"];
    }
  }
  toggleDia(code) {
    const idx = this.diasSelecionados.indexOf(code);
    if (idx >= 0) {
      this.diasSelecionados = this.diasSelecionados.filter((d) => d !== code);
    } else {
      this.diasSelecionados = [...this.diasSelecionados, code];
    }
  }
  isDiaSelecionado(code) {
    return this.diasSelecionados.includes(code);
  }
  confirmar() {
    if (!this.isValid || this.loading)
      return;
    this.loading = true;
    this.error = "";
    const dataHora = `${this.dataInicio}T${this.horario}:00`;
    this.api.agendarSessoesPaciente(this.pacienteId, {
      dataHora,
      avaliacaoId: this.avaliacaoId,
      modoAgendamento: "RECORRENTE",
      quantidadeSessoes: this.quantidadeSessoes,
      frequenciaSemanal: this.frequenciaSemanal,
      diasSemanaPreferidos: this.diasSelecionados,
      validadeGuiaDias: 30
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.sessionsScheduled.emit();
        setTimeout(() => {
          this.openChange.emit(false);
        }, 2e3);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.mensagem ?? "Erro ao agendar sess\xF5es. Verifique os hor\xE1rios.";
      }
    });
  }
  close() {
    this.openChange.emit(false);
  }
  constructor(api) {
    this.api = api;
    this.open = false;
    this.pacienteId = "";
    this.avaliacaoId = "";
    this.pacienteNome = "";
    this.openChange = new EventEmitter();
    this.sessionsScheduled = new EventEmitter();
    this.dias = DIAS;
    this.horarios = HORARIOS;
    this.quantidadeSessoes = 9;
    this.frequenciaSemanal = 2;
    this.horario = "09:00";
    this.dataInicio = "";
    this.diasSelecionados = ["SEG", "QUA"];
    this.loading = false;
    this.success = false;
    this.error = "";
  }
};
_PatientSessionsDialogComponent.\u0275fac = function PatientSessionsDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PatientSessionsDialogComponent)(\u0275\u0275directiveInject(ApiService));
};
_PatientSessionsDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientSessionsDialogComponent, selectors: [["app-patient-sessions-dialog"]], inputs: { open: "open", pacienteId: "pacienteId", avaliacaoId: "avaliacaoId", pacienteNome: "pacienteNome" }, outputs: { openChange: "openChange", sessionsScheduled: "sessionsScheduled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-backdrop", "role", "dialog", "aria-modal", "true", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", 1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], ["class", "success-state", 4, "ngIf"], [4, "ngIf"], [1, "success-state"], ["aria-hidden", "true", 1, "success-icon"], [1, "btn", "btn-primary", 2, "margin-top", "1rem", 3, "click"], [1, "modal-header"], [1, "text-sm", "text-gray", 2, "margin-top", ".25rem"], ["aria-label", "Fechar", 1, "modal-close", 3, "click"], [1, "sessions-form"], [1, "grid", "grid-2", 2, "gap", ".875rem"], [1, "field-group"], ["for", "ps-qtd"], ["id", "ps-qtd", "type", "number", "min", "1", "max", "30", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "ps-freq"], ["id", "ps-freq", 1, "input", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "dias-grid"], ["type", "button", "class", "dia-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["for", "ps-inicio"], ["id", "ps-inicio", "type", "date", 1, "input", 3, "ngModelChange", "min", "ngModel"], ["for", "ps-horario"], ["id", "ps-horario", 1, "input", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "validade-info"], ["role", "alert", "class", "error-msg", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "dia-btn", 3, "click"], ["role", "alert", 1, "error-msg"]], template: function PatientSessionsDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PatientSessionsDialogComponent_div_0_Template, 4, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.open);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.sessions-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.dias-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 0.25rem;\n}\n.dia-btn[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  background: #fff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dia-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--purple-400, #a78bfa);\n}\n.dia-btn.selected[_ngcontent-%COMP%] {\n  background: var(--purple-600);\n  border-color: var(--purple-600);\n  color: #fff;\n}\n.dia-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--purple-600);\n  outline-offset: 2px;\n}\n.validade-info[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.validade-info.validade-ok[_ngcontent-%COMP%] {\n  background: var(--green-100);\n  color: var(--green-700);\n}\n.validade-info.validade-err[_ngcontent-%COMP%] {\n  background: var(--red-100);\n  color: var(--red-600);\n}\n.error-msg[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--red-600);\n  margin: 0;\n}\n.success-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem 0;\n  text-align: center;\n}\n.success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n  max-width: 360px;\n}\n/*# sourceMappingURL=patient-sessions-dialog.component.css.map */"] });
var PatientSessionsDialogComponent = _PatientSessionsDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientSessionsDialogComponent, [{
    type: Component,
    args: [{ selector: "app-patient-sessions-dialog", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-backdrop" *ngIf="open" (click)="close()" role="dialog" aria-modal="true">
  <div class="modal" (click)="$event.stopPropagation()">

    <!-- SUCCESS -->
    <div *ngIf="success" class="success-state">
      <div class="success-icon" aria-hidden="true">\u2705</div>
      <h2>Sess\xF5es Agendadas!</h2>
      <p>
        {{ quantidadeSessoes }} sess\xF5es foram agendadas para <strong>{{ pacienteNome }}</strong>
        com frequ\xEAncia de {{ frequenciaSemanal }}x por semana.
      </p>
      <button class="btn btn-primary" style="margin-top:1rem" (click)="close()">Fechar</button>
    </div>

    <!-- FORM -->
    <ng-container *ngIf="!success">
      <div class="modal-header">
        <div>
          <h2>Agendar Sess\xF5es</h2>
          <p class="text-sm text-gray" style="margin-top:.25rem">
            {{ pacienteNome }} \xB7 Plano de 30 dias
          </p>
        </div>
        <button class="modal-close" (click)="close()" aria-label="Fechar">\u2715</button>
      </div>

      <div class="sessions-form">

        <!-- Quantidade e frequ\xEAncia -->
        <div class="grid grid-2" style="gap:.875rem">
          <div class="field-group">
            <label for="ps-qtd">Quantidade de sess\xF5es</label>
            <input id="ps-qtd" class="input" type="number" min="1" max="30"
              [(ngModel)]="quantidadeSessoes" />
          </div>
          <div class="field-group">
            <label for="ps-freq">Frequ\xEAncia por semana</label>
            <select id="ps-freq" class="input" [(ngModel)]="frequenciaSemanal">
              <option [value]="1">1x por semana</option>
              <option [value]="2">2x por semana</option>
              <option [value]="3">3x por semana</option>
              <option [value]="4">4x por semana</option>
              <option [value]="5">5x por semana</option>
            </select>
          </div>
        </div>

        <!-- Dias da semana -->
        <div class="field-group">
          <label>Dias preferidos</label>
          <div class="dias-grid">
            <button
              *ngFor="let d of dias"
              type="button"
              class="dia-btn"
              [class.selected]="isDiaSelecionado(d.code)"
              (click)="toggleDia(d.code)"
              [attr.aria-pressed]="isDiaSelecionado(d.code)"
            >
              {{ d.label }}
            </button>
          </div>
        </div>

        <!-- Data in\xEDcio e hor\xE1rio -->
        <div class="grid grid-2" style="gap:.875rem">
          <div class="field-group">
            <label for="ps-inicio">Data de in\xEDcio</label>
            <input id="ps-inicio" class="input" type="date"
              [min]="dataInicioMin" [(ngModel)]="dataInicio" />
          </div>
          <div class="field-group">
            <label for="ps-horario">Hor\xE1rio preferido</label>
            <select id="ps-horario" class="input" [(ngModel)]="horario">
              <option *ngFor="let h of horarios" [value]="h">{{ h }}</option>
            </select>
          </div>
        </div>

        <!-- Validade preview -->
        <div class="validade-info" [class.validade-ok]="cabeDentro" [class.validade-err]="!cabeDentro">
          <span>{{ avisoValidade }}</span>
        </div>

        <!-- Erro -->
        <p *ngIf="error" role="alert" class="error-msg">{{ error }}</p>

      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" (click)="close()" [disabled]="loading">Cancelar</button>
        <button class="btn btn-primary" (click)="confirmar()" [disabled]="!isValid || loading">
          {{ loading ? 'Agendando...' : 'Confirmar Agendamento' }}
        </button>
      </div>
    </ng-container>

  </div>
</div>
`, styles: ["/* src/app/components/patient-sessions-dialog/patient-sessions-dialog.component.scss */\n.sessions-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.dias-grid {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 0.25rem;\n}\n.dia-btn {\n  padding: 0.45rem 0.875rem;\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  background: #fff;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dia-btn:hover {\n  border-color: var(--purple-400, #a78bfa);\n}\n.dia-btn.selected {\n  background: var(--purple-600);\n  border-color: var(--purple-600);\n  color: #fff;\n}\n.dia-btn:focus-visible {\n  outline: 2px solid var(--purple-600);\n  outline-offset: 2px;\n}\n.validade-info {\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.validade-info.validade-ok {\n  background: var(--green-100);\n  color: var(--green-700);\n}\n.validade-info.validade-err {\n  background: var(--red-100);\n  color: var(--red-600);\n}\n.error-msg {\n  font-size: 0.85rem;\n  color: var(--red-600);\n  margin: 0;\n}\n.success-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem 0;\n  text-align: center;\n}\n.success-state .success-icon {\n  font-size: 2.5rem;\n}\n.success-state h2 {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.success-state p {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n  max-width: 360px;\n}\n/*# sourceMappingURL=patient-sessions-dialog.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], { open: [{
    type: Input
  }], pacienteId: [{
    type: Input
  }], avaliacaoId: [{
    type: Input
  }], pacienteNome: [{
    type: Input
  }], openChange: [{
    type: Output
  }], sessionsScheduled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientSessionsDialogComponent, { className: "PatientSessionsDialogComponent", filePath: "src/app/components/patient-sessions-dialog/patient-sessions-dialog.component.ts", lineNumber: 28 });
})();

// src/app/pages/recepcionista-dashboard/recepcionista-dashboard.component.ts
function RecepcionistaDashboardComponent_section_60_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6, "Novo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 41)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 42)(15, "button", 43);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_section_60_div_9_Template_button_click_15_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scheduleContact(c_r4));
    });
    \u0275\u0275text(16, "\u{1F4C5} Agendar Avalia\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 44);
    \u0275\u0275text(18, "\u{1F4DE} Ligar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.sourceLabel(c_r4.source));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4DE} ", c_r4.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} Recebido em ", c_r4.date);
  }
}
function RecepcionistaDashboardComponent_section_60_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhum contato encontrado");
    \u0275\u0275elementEnd()();
  }
}
function RecepcionistaDashboardComponent_section_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 28)(1, "div", 29)(2, "h2");
    \u0275\u0275text(3, "Primeira Triagem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "span", 31);
    \u0275\u0275text(6, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function RecepcionistaDashboardComponent_section_60_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactSearch, $event) || (ctx_r1.contactSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 33);
    \u0275\u0275template(9, RecepcionistaDashboardComponent_section_60_div_9_Template, 19, 4, "div", 34)(10, RecepcionistaDashboardComponent_section_60_div_10_Template, 5, 0, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredContacts());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredContacts().length === 0);
  }
}
function RecepcionistaDashboardComponent_section_61_div_8_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const av_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", av_r6.pacienteTelefone);
  }
}
function RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 60);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const av_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmarChegada(av_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const av_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.confirmandoChegada === av_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmandoChegada === av_r6.id ? "Confirmando..." : "\u2713 Confirmar Chegada", " ");
  }
}
function RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 49);
    \u0275\u0275text(2, "Em avalia\xE7\xE3o com fisioterapeuta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 23);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const av_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.abrirAgendamentoSessoes(av_r6));
    });
    \u0275\u0275text(2, " \u{1F4C5} Agendar Sess\xF5es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RecepcionistaDashboardComponent_section_61_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RecepcionistaDashboardComponent_section_61_div_8_div_1_span_6_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 58);
    \u0275\u0275template(10, RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_10_Template, 3, 2, "ng-container", 59)(11, RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_11_Template, 3, 0, "ng-container", 59)(12, RecepcionistaDashboardComponent_section_61_div_8_div_1_ng_container_12_Template, 3, 0, "ng-container", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const av_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(av_r6.pacienteNome ?? "Aguardando nome");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDataHora(av_r6.dataHora));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", av_r6.pacienteTelefone);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusAvaliacaoBadge(av_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusAvaliacaoLabel(av_r6.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", av_r6.status === "marcada" || av_r6.status === "remarcada");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", av_r6.status === "aguardando_avaliacao");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", av_r6.status === "avaliada");
  }
}
function RecepcionistaDashboardComponent_section_61_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, RecepcionistaDashboardComponent_section_61_div_8_div_1_Template, 13, 8, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.avaliacoesPaginadas);
  }
}
function RecepcionistaDashboardComponent_section_61_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 62);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_section_61_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paginaAnterior());
    });
    \u0275\u0275text(2, "\u2190 Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_section_61_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proximaPagina());
    });
    \u0275\u0275text(6, "Pr\xF3xima \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.avaliacaoPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.avaliacaoPage + 1, " / ", ctx_r1.totalPaginas);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.avaliacaoPage >= ctx_r1.totalPaginas - 1);
  }
}
function RecepcionistaDashboardComponent_section_61_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma avalia\xE7\xE3o nesta data");
    \u0275\u0275elementEnd()();
  }
}
function RecepcionistaDashboardComponent_section_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 28)(1, "div", 29)(2, "h2");
    \u0275\u0275text(3, "Controle de Avalia\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 47)(5, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function RecepcionistaDashboardComponent_section_61_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.avaliacaoFiltroData, $event) || (ctx_r1.avaliacaoFiltroData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecepcionistaDashboardComponent_section_61_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFiltroDataChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, RecepcionistaDashboardComponent_section_61_div_8_Template, 2, 1, "div", 50)(9, RecepcionistaDashboardComponent_section_61_div_9_Template, 7, 4, "div", 51)(10, RecepcionistaDashboardComponent_section_61_ng_template_10_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyAval_r10 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.avaliacaoFiltroData);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.avaliacoesFiltradas.length, " resultado", ctx_r1.avaliacoesFiltradas.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.avaliacoesPaginadas.length > 0)("ngIfElse", emptyAval_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPaginas > 1);
  }
}
function RecepcionistaDashboardComponent_section_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 28)(1, "h2", 63);
    \u0275\u0275text(2, "Gerenciar Agendamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-appointments-table", 64);
    \u0275\u0275listener("reschedule", function RecepcionistaDashboardComponent_section_62_Template_app_appointments_table_reschedule_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReschedule($event));
    })("edit", function RecepcionistaDashboardComponent_section_62_Template_app_appointments_table_edit_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit($event));
    })("remove", function RecepcionistaDashboardComponent_section_62_Template_app_appointments_table_remove_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("appointments", ctx_r1.allAppointments);
  }
}
function RecepcionistaDashboardComponent_section_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28);
    \u0275\u0275element(1, "app-user-management-panel");
    \u0275\u0275elementEnd();
  }
}
var _RecepcionistaDashboardComponent = class _RecepcionistaDashboardComponent {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.tab = "contatos";
    this.contactSearch = "";
    this.contacts = [];
    this.allAppointments = [];
    this.avaliacaoSessoes = [];
    this.loading = false;
    this.avaliacaoFiltroData = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.avaliacaoPage = 0;
    this.avaliacaoPageSize = 10;
    this.statsContatos = 0;
    this.statsHoje = 0;
    this.statsPendentes = 0;
    this.statsTotal = 0;
    this.schedulingOpen = false;
    this.rescheduleOpen = false;
    this.patientSessionsOpen = false;
    this.selectedContactName = "";
    this.selectedContactPhone = "";
    this.selectedContactEmail = "";
    this.selectedContactId = "";
    this.selectedPatient = "";
    this.selectedPatientId = "";
    this.selectedAvaliacaoId = "";
    this.selectedPatientName = "";
    this.selectedAppointmentId = "";
    this.selectedHasSerie = false;
    this.confirmandoChegada = null;
    this.sessaoIdsAgendadas = /* @__PURE__ */ new Set();
    this.pendingScheduleSessaoId = "";
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.api.getLeads(true).subscribe({
      next: (leads) => {
        this.contacts = leads.map((l) => this.leadToContact(l));
        this.statsContatos = leads.length;
        this.loading = false;
      },
      error: () => {
        this.contacts = [];
        this.statsContatos = 0;
        this.loading = false;
      }
    });
    this.api.getSessoes({ periodo: "todos" }).subscribe({
      next: (sessoes) => {
        this.allAppointments = sessoes.map((s) => this.sessaoToAppointment(s));
        this.avaliacaoSessoes = sessoes.filter((s) => s.tipo === "avaliacao");
        const hoje = (/* @__PURE__ */ new Date()).toDateString();
        this.statsHoje = sessoes.filter((s) => new Date(s.dataHora).toDateString() === hoje).length;
        this.statsPendentes = sessoes.filter((s) => s.tipo === "avaliacao" && (s.status === "marcada" || s.status === "remarcada")).length;
        this.statsTotal = sessoes.filter((s) => s.tipo === "sessao" && s.status !== "cancelada" && s.status !== "faltou").length;
      },
      error: () => {
        this.allAppointments = [];
        this.avaliacaoSessoes = [];
      }
    });
  }
  leadToContact(l) {
    return {
      id: l.id,
      name: `${l.nome} ${l.sobrenome}`.trim(),
      phone: l.telefone,
      email: l.email ?? "",
      source: "website",
      date: l.criadoEm ? new Date(l.criadoEm).toLocaleDateString("pt-BR") : "\u2014",
      status: l.status === "novo" ? "pending" : l.status === "contatado" ? "contacted" : "scheduled"
    };
  }
  sessaoToAppointment(s) {
    const dateObj = new Date(s.dataHora);
    return {
      id: s.id,
      patient: s.pacienteNome ?? "Paciente",
      phone: s.pacienteTelefone ?? void 0,
      date: dateObj.toLocaleDateString("pt-BR"),
      time: dateObj.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      type: s.tipo ?? "sessao",
      status: this.mapStatus(s.status),
      duration: 45,
      pacienteId: s.pacienteId ?? void 0,
      serieId: s.serieId ?? void 0
    };
  }
  mapStatus(s) {
    const map = {
      marcada: "agendado",
      remarcada: "agendado",
      compareceu: "concluido",
      aguardando_avaliacao: "em-andamento",
      avaliada: "concluido",
      faltou: "cancelado",
      cancelada: "cancelado"
    };
    return map[s] ?? "agendado";
  }
  filteredContacts() {
    const s = this.contactSearch.toLowerCase();
    return this.contacts.filter((c) => c.name.toLowerCase().includes(s) || c.phone.includes(s));
  }
  confirmarChegada(sessao) {
    this.confirmandoChegada = sessao.id;
    this.api.marcarCompareceuAvaliacao(sessao.id).subscribe({
      next: (updated) => {
        const idx = this.avaliacaoSessoes.findIndex((s) => s.id === sessao.id);
        if (idx >= 0)
          this.avaliacaoSessoes[idx] = updated;
        this.confirmandoChegada = null;
      },
      error: () => {
        this.confirmandoChegada = null;
      }
    });
  }
  abrirAgendamentoSessoes(sessao) {
    this.selectedPatientId = sessao.pacienteId ?? "";
    this.selectedAvaliacaoId = "";
    this.selectedPatientName = sessao.pacienteNome ?? "Paciente";
    this.pendingScheduleSessaoId = sessao.id;
    this.patientSessionsOpen = true;
  }
  onSessionsScheduled() {
    if (this.pendingScheduleSessaoId) {
      this.sessaoIdsAgendadas.add(this.pendingScheduleSessaoId);
      this.pendingScheduleSessaoId = "";
    }
    this.loadData();
  }
  statusAvaliacaoLabel(status) {
    const map = {
      marcada: "Agendada",
      remarcada: "Reagendada",
      aguardando_avaliacao: "Em avalia\xE7\xE3o",
      avaliada: "Avaliada",
      faltou: "Faltou",
      cancelada: "Cancelada"
    };
    return map[status] ?? status;
  }
  statusAvaliacaoBadge(status) {
    const map = {
      marcada: "badge-blue",
      remarcada: "badge-purple",
      aguardando_avaliacao: "badge-yellow",
      avaliada: "badge-green",
      faltou: "badge-red",
      cancelada: "badge-gray"
    };
    return map[status] ?? "badge-gray";
  }
  formatDataHora(dataHora) {
    const d = new Date(dataHora);
    return d.toLocaleDateString("pt-BR") + " \xB7 " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }
  openScheduling() {
    this.selectedContactName = "";
    this.selectedContactPhone = "";
    this.selectedContactEmail = "";
    this.selectedContactId = "";
    this.schedulingOpen = true;
  }
  scheduleContact(contact) {
    this.selectedContactName = contact.name;
    this.selectedContactPhone = contact.phone;
    this.selectedContactEmail = contact.email;
    this.selectedContactId = contact.id;
    this.schedulingOpen = true;
  }
  onReschedule(item) {
    this.selectedPatient = item.patient;
    this.selectedAppointmentId = item.id;
    this.selectedHasSerie = !!item.serieId;
    this.rescheduleOpen = true;
  }
  onEdit(item) {
    window.alert(`Editar agendamento de ${item.patient}.`);
  }
  onDelete(id) {
    if (window.confirm("Tem certeza que deseja cancelar este agendamento?")) {
      this.api.cancelarSessao(id).subscribe({
        next: () => {
          this.allAppointments = this.allAppointments.filter((a) => a.id !== id);
        },
        error: () => {
          this.allAppointments = this.allAppointments.filter((a) => a.id !== id);
        }
      });
    }
  }
  get avaliacoesFiltradas() {
    let lista = this.avaliacaoSessoes.filter((av) => !this.sessaoIdsAgendadas.has(av.id));
    if (!this.avaliacaoFiltroData)
      return lista;
    const filtro = this.avaliacaoFiltroData;
    return lista.filter((av) => {
      const d = new Date(av.dataHora).toISOString().split("T")[0];
      return d === filtro;
    });
  }
  get avaliacoesPaginadas() {
    const start = this.avaliacaoPage * this.avaliacaoPageSize;
    return this.avaliacoesFiltradas.slice(start, start + this.avaliacaoPageSize);
  }
  get totalPaginas() {
    return Math.ceil(this.avaliacoesFiltradas.length / this.avaliacaoPageSize);
  }
  proximaPagina() {
    if (this.avaliacaoPage < this.totalPaginas - 1)
      this.avaliacaoPage++;
  }
  paginaAnterior() {
    if (this.avaliacaoPage > 0)
      this.avaliacaoPage--;
  }
  onFiltroDataChange() {
    this.avaliacaoPage = 0;
  }
  sourceLabel(source) {
    const map = { website: "Site", phone: "Telefone", referral: "Indica\xE7\xE3o" };
    return map[source] ?? source;
  }
  logout() {
    void this.router.navigateByUrl("/");
  }
};
_RecepcionistaDashboardComponent.\u0275fac = function RecepcionistaDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecepcionistaDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
};
_RecepcionistaDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecepcionistaDashboardComponent, selectors: [["app-recepcionista-dashboard"]], decls: 67, vars: 29, consts: [["emptyAval", ""], [1, "dash-layout"], [1, "dash-header"], [1, "dash-title-group"], [1, "brand"], [1, "brand-icon"], [1, "dash-title-info"], [1, "btn", "btn-ghost", "btn-sm", "logout-btn", 3, "click"], [1, "dash-body"], [1, "grid", "grid-4"], [1, "stat-card"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value", "text-pink"], [1, "stat-icon", 2, "background", "#fce7f3", "color", "#db2777"], [1, "stat-value", "text-purple"], [1, "stat-icon", 2, "background", "#f5f3ff", "color", "#7c3aed"], [1, "stat-value", 2, "color", "var(--yellow-600)"], [1, "stat-icon", 2, "background", "#fef9c3", "color", "#ca8a04"], [1, "stat-icon", 2, "background", "#dbeafe", "color", "#2563eb"], [1, "tabs-action-row"], [1, "tab-group"], [1, "tab-btn", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["class", "card", 4, "ngIf"], [3, "openChange", "scheduled", "open", "contactName", "contactPhone", "contactEmail", "contactId"], [3, "openChange", "rescheduled", "open", "patientName", "appointmentId", "hasSerie"], [3, "openChange", "sessionsScheduled", "open", "pacienteId", "avaliacaoId", "pacienteNome"], [1, "card"], [1, "section-title-row"], [1, "search-wrap"], [1, "search-icon"], ["placeholder", "Buscar contato...", 1, "input", "search-input", 3, "ngModelChange", "ngModel"], [1, "contact-list"], ["class", "contact-item card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "contact-item", "card"], [1, "contact-item__top"], [1, "contact-item__name-row"], [1, "badge", "badge-yellow"], [1, "badge", "badge-gray", "contact-source"], [1, "contact-item__details"], [1, "contact-item__actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline"], [1, "empty-state"], [1, "empty-icon"], [1, "aval-filtro"], ["type", "date", 1, "input", 2, "width", "160px", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-gray"], ["class", "aval-list", 4, "ngIf", "ngIfElse"], ["class", "pagination-row", 4, "ngIf"], [1, "aval-list"], ["class", "aval-item", 4, "ngFor", "ngForOf"], [1, "aval-item"], [1, "aval-item__info"], ["class", "text-sm text-gray", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "aval-item__actions"], [4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "pagination-row"], [1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [2, "margin-bottom", "1.25rem"], [3, "reschedule", "edit", "remove", "appointments"]], template: function RecepcionistaDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
    \u0275\u0275text(5, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Vida em Movimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "h1");
    \u0275\u0275text(9, "Painel da Recep\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Fernanda Rodrigues");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_Template_button_click_12_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(13, "\u2197 Sair");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "main", 8)(15, "section", 9)(16, "div", 10)(17, "div", 11)(18, "p", 12);
    \u0275\u0275text(19, "Novos Contatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275text(23, "\u{1F465}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "p", 12);
    \u0275\u0275text(27, "Agendamentos Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 15);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 16);
    \u0275\u0275text(31, "\u{1F4C5}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 10)(33, "div", 11)(34, "p", 12);
    \u0275\u0275text(35, "Pendentes Confirma\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 17);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 18);
    \u0275\u0275text(39, "\u23F0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 10)(41, "div", 11)(42, "p", 12);
    \u0275\u0275text(43, "Total Agendamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 15);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19);
    \u0275\u0275text(47, "\u{1F4DE}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 20)(49, "div", 21)(50, "button", 22);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_Template_button_click_50_listener() {
      return ctx.tab = "contatos";
    });
    \u0275\u0275text(51, "Novos Contatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 22);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_Template_button_click_52_listener() {
      return ctx.tab = "avaliacoes";
    });
    \u0275\u0275text(53, "Avalia\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 22);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_Template_button_click_54_listener() {
      return ctx.tab = "agendamentos";
    });
    \u0275\u0275text(55, "Todos os Agendamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 22);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_Template_button_click_56_listener() {
      return ctx.tab = "usuarios";
    });
    \u0275\u0275text(57, "Gest\xE3o de Usu\xE1rios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 23);
    \u0275\u0275listener("click", function RecepcionistaDashboardComponent_Template_button_click_58_listener() {
      return ctx.openScheduling();
    });
    \u0275\u0275text(59, "+ Novo Agendamento");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, RecepcionistaDashboardComponent_section_60_Template, 11, 3, "section", 24)(61, RecepcionistaDashboardComponent_section_61_Template, 12, 6, "section", 24)(62, RecepcionistaDashboardComponent_section_62_Template, 4, 1, "section", 24)(63, RecepcionistaDashboardComponent_section_63_Template, 2, 0, "section", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "app-scheduling-dialog", 25);
    \u0275\u0275twoWayListener("openChange", function RecepcionistaDashboardComponent_Template_app_scheduling_dialog_openChange_64_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.schedulingOpen, $event) || (ctx.schedulingOpen = $event);
      return $event;
    });
    \u0275\u0275listener("scheduled", function RecepcionistaDashboardComponent_Template_app_scheduling_dialog_scheduled_64_listener() {
      return ctx.loadData();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "app-reschedule-dialog", 26);
    \u0275\u0275twoWayListener("openChange", function RecepcionistaDashboardComponent_Template_app_reschedule_dialog_openChange_65_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.rescheduleOpen, $event) || (ctx.rescheduleOpen = $event);
      return $event;
    });
    \u0275\u0275listener("rescheduled", function RecepcionistaDashboardComponent_Template_app_reschedule_dialog_rescheduled_65_listener() {
      return ctx.loadData();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "app-patient-sessions-dialog", 27);
    \u0275\u0275twoWayListener("openChange", function RecepcionistaDashboardComponent_Template_app_patient_sessions_dialog_openChange_66_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.patientSessionsOpen, $event) || (ctx.patientSessionsOpen = $event);
      return $event;
    });
    \u0275\u0275listener("sessionsScheduled", function RecepcionistaDashboardComponent_Template_app_patient_sessions_dialog_sessionsScheduled_66_listener() {
      return ctx.onSessionsScheduled();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx.statsContatos);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.statsHoje);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.statsPendentes);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.statsTotal);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.tab === "contatos");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "avaliacoes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "agendamentos");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "usuarios");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.tab === "contatos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "avaliacoes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "agendamentos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "usuarios");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx.schedulingOpen);
    \u0275\u0275property("contactName", ctx.selectedContactName)("contactPhone", ctx.selectedContactPhone)("contactEmail", ctx.selectedContactEmail)("contactId", ctx.selectedContactId);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx.rescheduleOpen);
    \u0275\u0275property("patientName", ctx.selectedPatient)("appointmentId", ctx.selectedAppointmentId)("hasSerie", ctx.selectedHasSerie);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx.patientSessionsOpen);
    \u0275\u0275property("pacienteId", ctx.selectedPatientId)("avaliacaoId", ctx.selectedAvaliacaoId)("pacienteNome", ctx.selectedPatientName);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  SchedulingDialogComponent,
  RescheduleDialogComponent,
  AppointmentsTableComponent,
  UserManagementPanelComponent,
  PatientSessionsDialogComponent
], styles: ['@charset "UTF-8";\n\n\n\n.tabs-action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.2rem;\n  width: 220px;\n}\n.section-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.section-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.contact-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.contact-item[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.25rem;\n}\n.contact-item__top[_ngcontent-%COMP%] {\n  margin-bottom: 0.875rem;\n}\n.contact-item__name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.contact-item__name-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.contact-item__details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.contact-item__details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--gray-500);\n}\n.contact-item__actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.contact-item__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.65rem;\n}\n.contact-source[_ngcontent-%COMP%] {\n  font-size: 0.72rem !important;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.aval-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.aval-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--gray-100);\n  border-radius: var(--radius);\n  background: #fff;\n  flex-wrap: wrap;\n}\n.aval-item__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.aval-item__info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.aval-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.aval-filtro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--gray-100);\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--pink-600);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 0.35rem;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--gray-100);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n/*# sourceMappingURL=recepcionista-dashboard.component.css.map */'] });
var RecepcionistaDashboardComponent = _RecepcionistaDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecepcionistaDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-recepcionista-dashboard", standalone: true, imports: [
      CommonModule,
      FormsModule,
      SchedulingDialogComponent,
      RescheduleDialogComponent,
      AppointmentsTableComponent,
      UserManagementPanelComponent,
      PatientSessionsDialogComponent
    ], template: `<div class="dash-layout">

  <!-- HEADER -->
  <header class="dash-header">
    <div class="dash-title-group">
      <div class="brand"><span class="brand-icon">\u2665</span>Vida em Movimento</div>
      <div class="dash-title-info">
        <h1>Painel da Recep\xE7\xE3o</h1>
        <p>Fernanda Rodrigues</p>
      </div>
    </div>
    <button class="btn btn-ghost btn-sm logout-btn" (click)="logout()">\u2197 Sair</button>
  </header>

  <main class="dash-body">

    <!-- STATS -->
    <section class="grid grid-4">
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Novos Contatos</p>
          <p class="stat-value text-pink">{{ statsContatos }}</p>
        </div>
        <div class="stat-icon" style="background:#fce7f3;color:#db2777">\u{1F465}</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Agendamentos Hoje</p>
          <p class="stat-value text-purple">{{ statsHoje }}</p>
        </div>
        <div class="stat-icon" style="background:#f5f3ff;color:#7c3aed">\u{1F4C5}</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Pendentes Confirma\xE7\xE3o</p>
          <p class="stat-value" style="color:var(--yellow-600)">{{ statsPendentes }}</p>
        </div>
        <div class="stat-icon" style="background:#fef9c3;color:#ca8a04">\u23F0</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Total Agendamentos</p>
          <p class="stat-value text-purple">{{ statsTotal }}</p>
        </div>
        <div class="stat-icon" style="background:#dbeafe;color:#2563eb">\u{1F4DE}</div>
      </div>
    </section>

    <!-- TABS + ACTION -->
    <div class="tabs-action-row">
      <div class="tab-group">
        <button class="tab-btn" [class.active]="tab === 'contatos'"     (click)="tab = 'contatos'">Novos Contatos</button>
        <button class="tab-btn" [class.active]="tab === 'avaliacoes'"   (click)="tab = 'avaliacoes'">Avalia\xE7\xF5es</button>
        <button class="tab-btn" [class.active]="tab === 'agendamentos'" (click)="tab = 'agendamentos'">Todos os Agendamentos</button>
        <button class="tab-btn" [class.active]="tab === 'usuarios'"     (click)="tab = 'usuarios'">Gest\xE3o de Usu\xE1rios</button>
      </div>
      <button class="btn btn-primary btn-sm" (click)="openScheduling()">+ Novo Agendamento</button>
    </div>

    <!-- CONTACTS TAB -->
    <section *ngIf="tab === 'contatos'" class="card">
      <div class="section-title-row">
        <h2>Primeira Triagem</h2>
        <div class="search-wrap">
          <span class="search-icon">\u{1F50D}</span>
          <input class="input search-input" [(ngModel)]="contactSearch" placeholder="Buscar contato..." />
        </div>
      </div>
      <div class="contact-list">
        <div class="contact-item card" *ngFor="let c of filteredContacts()">
          <div class="contact-item__top">
            <div class="contact-item__name-row">
              <strong>{{ c.name }}</strong>
              <span class="badge badge-yellow">Novo</span>
              <span class="badge badge-gray contact-source">{{ sourceLabel(c.source) }}</span>
            </div>
            <div class="contact-item__details">
              <span>\u{1F4DE} {{ c.phone }}</span>
              <span>\u{1F4C5} Recebido em {{ c.date }}</span>
            </div>
          </div>
          <div class="contact-item__actions">
            <button class="btn btn-primary" (click)="scheduleContact(c)">\u{1F4C5} Agendar Avalia\xE7\xE3o</button>
            <button class="btn btn-outline">\u{1F4DE} Ligar</button>
          </div>
        </div>
        <div class="empty-state" *ngIf="filteredContacts().length === 0">
          <span class="empty-icon">\u{1F465}</span>
          <p>Nenhum contato encontrado</p>
        </div>
      </div>
    </section>

    <!-- AVALIACOES TAB -->
    <section *ngIf="tab === 'avaliacoes'" class="card">
      <div class="section-title-row">
        <h2>Controle de Avalia\xE7\xF5es</h2>
        <div class="aval-filtro">
          <input
            class="input"
            type="date"
            [(ngModel)]="avaliacaoFiltroData"
            (ngModelChange)="onFiltroDataChange()"
            style="width:160px"
          />
          <span class="text-sm text-gray">
            {{ avaliacoesFiltradas.length }} resultado{{ avaliacoesFiltradas.length !== 1 ? 's' : '' }}
          </span>
        </div>
      </div>

      <div class="aval-list" *ngIf="avaliacoesPaginadas.length > 0; else emptyAval">
        <div class="aval-item" *ngFor="let av of avaliacoesPaginadas">

          <div class="aval-item__info">
            <strong>{{ av.pacienteNome ?? 'Aguardando nome' }}</strong>
            <span class="text-sm text-gray">{{ formatDataHora(av.dataHora) }}</span>
            <span *ngIf="av.pacienteTelefone" class="text-sm text-gray">\u{1F4DE} {{ av.pacienteTelefone }}</span>
          </div>

          <span class="badge" [ngClass]="statusAvaliacaoBadge(av.status)">
            {{ statusAvaliacaoLabel(av.status) }}
          </span>

          <div class="aval-item__actions">
            <!-- Aguardando chegada -->
            <ng-container *ngIf="av.status === 'marcada' || av.status === 'remarcada'">
              <button
                class="btn btn-primary btn-sm"
                [disabled]="confirmandoChegada === av.id"
                (click)="confirmarChegada(av)"
              >
                {{ confirmandoChegada === av.id ? 'Confirmando...' : '\u2713 Confirmar Chegada' }}
              </button>
            </ng-container>

            <!-- Em avalia\xE7\xE3o com o fisio -->
            <ng-container *ngIf="av.status === 'aguardando_avaliacao'">
              <span class="text-sm text-gray">Em avalia\xE7\xE3o com fisioterapeuta</span>
            </ng-container>

            <!-- Avaliada \u2014 pronta para agendar sess\xF5es -->
            <ng-container *ngIf="av.status === 'avaliada'">
              <button class="btn btn-primary btn-sm" (click)="abrirAgendamentoSessoes(av)">
                \u{1F4C5} Agendar Sess\xF5es
              </button>
            </ng-container>
          </div>

        </div>
      </div>

      <!-- Pagina\xE7\xE3o -->
      <div class="pagination-row" *ngIf="totalPaginas > 1">
        <button class="btn btn-outline btn-sm" [disabled]="avaliacaoPage === 0" (click)="paginaAnterior()">\u2190 Anterior</button>
        <span class="text-sm text-gray">{{ avaliacaoPage + 1 }} / {{ totalPaginas }}</span>
        <button class="btn btn-outline btn-sm" [disabled]="avaliacaoPage >= totalPaginas - 1" (click)="proximaPagina()">Pr\xF3xima \u2192</button>
      </div>

      <ng-template #emptyAval>
        <div class="empty-state">
          <span class="empty-icon">\u{1F4CB}</span>
          <p>Nenhuma avalia\xE7\xE3o nesta data</p>
        </div>
      </ng-template>
    </section>

    <!-- APPOINTMENTS TAB -->
    <section *ngIf="tab === 'agendamentos'" class="card">
      <h2 style="margin-bottom:1.25rem">Gerenciar Agendamentos</h2>
      <app-appointments-table
        [appointments]="allAppointments"
        (reschedule)="onReschedule($event)"
        (edit)="onEdit($event)"
        (remove)="onDelete($event)"
      />
    </section>

    <!-- USERS TAB -->
    <section *ngIf="tab === 'usuarios'" class="card">
      <app-user-management-panel />
    </section>

  </main>
</div>

<app-scheduling-dialog
  [(open)]="schedulingOpen"
  [contactName]="selectedContactName"
  [contactPhone]="selectedContactPhone"
  [contactEmail]="selectedContactEmail"
  [contactId]="selectedContactId"
  (scheduled)="loadData()"
/>
<app-reschedule-dialog
  [(open)]="rescheduleOpen"
  [patientName]="selectedPatient"
  [appointmentId]="selectedAppointmentId"
  [hasSerie]="selectedHasSerie"
  (rescheduled)="loadData()"
/>
<app-patient-sessions-dialog
  [(open)]="patientSessionsOpen"
  [pacienteId]="selectedPatientId"
  [avaliacaoId]="selectedAvaliacaoId"
  [pacienteNome]="selectedPatientName"
  (sessionsScheduled)="onSessionsScheduled()"
/>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/recepcionista-dashboard/recepcionista-dashboard.component.scss */\n.tabs-action-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.search-wrap {\n  position: relative;\n}\n.search-wrap .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.search-wrap .search-input {\n  padding-left: 2.2rem;\n  width: 220px;\n}\n.section-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.section-title-row h2 {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.contact-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.contact-item {\n  padding: 1.1rem 1.25rem;\n}\n.contact-item__top {\n  margin-bottom: 0.875rem;\n}\n.contact-item__name-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.contact-item__name-row strong {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.contact-item__details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.contact-item__details span {\n  font-size: 0.82rem;\n  color: var(--gray-500);\n}\n.contact-item__actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.contact-item__actions .btn {\n  justify-content: center;\n  padding: 0.65rem;\n}\n.contact-source {\n  font-size: 0.72rem !important;\n}\n.section-subtitle {\n  margin-top: 0.25rem;\n}\n.aval-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.aval-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--gray-100);\n  border-radius: var(--radius);\n  background: #fff;\n  flex-wrap: wrap;\n}\n.aval-item__info {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.aval-item__info strong {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.aval-item__actions {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.aval-filtro {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.pagination-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--gray-100);\n}\n.tab-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--pink-600);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 0.35rem;\n}\n.dash-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--gray-100);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.dash-header .dash-title-group {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dash-header .dash-title-info h1 {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.dash-header .dash-title-info p {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n/*# sourceMappingURL=recepcionista-dashboard.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecepcionistaDashboardComponent, { className: "RecepcionistaDashboardComponent", filePath: "src/app/pages/recepcionista-dashboard/recepcionista-dashboard.component.ts", lineNumber: 28 });
})();
export {
  RecepcionistaDashboardComponent
};
//# sourceMappingURL=chunk-F5YFDTCU.js.map
