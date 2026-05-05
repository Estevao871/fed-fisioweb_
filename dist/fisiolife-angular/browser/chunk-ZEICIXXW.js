import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WAB2DSBB.js";

// src/app/pages/paciente-dashboard/paciente-dashboard.component.ts
function PacienteDashboardComponent_section_64_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5, "Sess\xE3o de Fisioterapia \xB7 Dra. Juliana Ferreira");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r1.time);
  }
}
function PacienteDashboardComponent_section_64_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5, "Sess\xE3o de Fisioterapia \xB7 Dra. Juliana Ferreira");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7, "Conclu\xEDdo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.date);
  }
}
function PacienteDashboardComponent_section_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 29)(1, "div", 30)(2, "h3", 31);
    \u0275\u0275text(3, " \u{1F4C5} Pr\xF3ximos Agendamentos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275template(5, PacienteDashboardComponent_section_64_div_5_Template, 8, 2, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "h3", 31);
    \u0275\u0275text(8, " \u2705 Sess\xF5es Conclu\xEDdas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275template(10, PacienteDashboardComponent_section_64_div_10_Template, 8, 1, "div", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.upcoming);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.completed);
  }
}
function PacienteDashboardComponent_section_65_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Dor: ", n_r4.pain, "/10");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Mobilidade: ", n_r4.mobility, "%");
  }
}
function PacienteDashboardComponent_section_65_div_7_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r5, " ");
  }
}
function PacienteDashboardComponent_section_65_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, PacienteDashboardComponent_section_65_div_7_div_7_Template, 5, 2, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 54)(11, "p", 55);
    \u0275\u0275text(12, "Exerc\xEDcios:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 56);
    \u0275\u0275template(14, PacienteDashboardComponent_section_65_div_7_li_14_Template, 3, 1, "li", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Sess\xE3o ", n_r4.session);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r4.pain !== void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.notes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", n_r4.exercises);
  }
}
function PacienteDashboardComponent_section_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 30)(1, "h3", 45);
    \u0275\u0275text(2, "Evolu\xE7\xE3o do Tratamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48);
    \u0275\u0275template(7, PacienteDashboardComponent_section_65_div_7_Template, 15, 5, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.completed.length, " de ", ctx_r2.totalSessions, " sess\xF5es conclu\xEDdas");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.notes);
  }
}
function PacienteDashboardComponent_section_66_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ex_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ex_r6.emoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ex_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ex_r6.frequency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ex_r6.sets);
  }
}
function PacienteDashboardComponent_section_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 30)(1, "h3", 45);
    \u0275\u0275text(2, "Exerc\xEDcios para Casa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275template(4, PacienteDashboardComponent_section_66_div_4_Template, 10, 4, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275text(6, " \u26A0\uFE0F Pare se sentir dor aguda e fale com sua fisioterapeuta. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.exercises);
  }
}
var _PacienteDashboardComponent = class _PacienteDashboardComponent {
  constructor(router) {
    this.router = router;
    this.tab = "agenda";
    this.upcoming = [];
    this.completed = [];
    this.notes = [];
    this.totalSessions = 0;
    this.exercises = [];
  }
  get progress() {
    if (!this.totalSessions)
      return 0;
    return Math.round(this.completed.length / this.totalSessions * 100);
  }
  logout() {
    void this.router.navigateByUrl("/");
  }
};
_PacienteDashboardComponent.\u0275fac = function PacienteDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PacienteDashboardComponent)(\u0275\u0275directiveInject(Router));
};
_PacienteDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PacienteDashboardComponent, selectors: [["app-paciente-dashboard"]], decls: 67, vars: 15, consts: [[1, "dash-layout"], [1, "dash-header"], [1, "dash-title-group"], [1, "brand"], [1, "brand-icon"], [1, "dash-title-info"], [1, "btn", "btn-ghost", "btn-sm", "logout-btn", 3, "click"], [1, "dash-body"], [1, "welcome-card"], [1, "welcome-card__text"], [1, "welcome-card__next"], [1, "next-label"], [1, "next-date"], [1, "grid", "grid-3"], [1, "stat-card"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value", "text-purple"], [1, "stat-sub"], [1, "stat-icon", 2, "background", "#f5f3ff", "color", "#7c3aed"], [1, "stat-card", "progress-stat"], [1, "stat-value", "text-green"], [1, "stat-icon", 2, "background", "#dcfce7", "color", "#16a34a"], [1, "progress-bar-wrap", 2, "margin-top", ".75rem"], [1, "progress-bar-fill"], [1, "tab-group"], [1, "tab-btn", 3, "click"], ["class", "grid grid-2", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "grid", "grid-2"], [1, "card"], [1, "section-subtitle"], [1, "appt-upcoming-list"], ["class", "appt-upcoming-item", 4, "ngFor", "ngForOf"], [1, "appt-done-list"], ["class", "appt-done-item", 4, "ngFor", "ngForOf"], [1, "appt-upcoming-item"], [1, "appt-upcoming-item__left"], [1, "appt-date"], [1, "appt-type", "text-xs", "text-gray"], [1, "badge", "badge-blue"], [1, "appt-done-item"], [1, "appt-done-item__info"], [1, "text-xs", "text-gray"], [1, "badge", "badge-green"], [1, "section-subtitle", 2, "margin-bottom", "1.25rem"], [1, "progress-summary"], [1, "text-sm", "text-gray"], [1, "notes-list"], ["class", "note-card card", 4, "ngFor", "ngForOf"], [1, "note-card", "card"], [1, "note-card__header"], ["class", "note-metrics", 4, "ngIf"], [1, "note-text"], [1, "note-exercises"], [1, "text-xs", "font-semibold", "text-gray", 2, "margin-bottom", ".4rem"], [1, "exercises-list"], [4, "ngFor", "ngForOf"], [1, "note-metrics"], [1, "badge", "badge-red"], [1, "exercise-dot"], [1, "exercises-grid"], ["class", "exercise-card card", 4, "ngFor", "ngForOf"], [1, "exercises-note"], [1, "exercise-card", "card"], [1, "exercise-icon"], [1, "exercise-info"], [1, "badge", "badge-purple"]], template: function PacienteDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Vida em Movimento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "h1");
    \u0275\u0275text(9, "Meu Tratamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Jo\xE3o Santos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 6);
    \u0275\u0275listener("click", function PacienteDashboardComponent_Template_button_click_12_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(13, "\u2197 Sair");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "main", 7)(15, "section", 8)(16, "div", 9)(17, "h2");
    \u0275\u0275text(18, "Ol\xE1, Jo\xE3o! \u{1F44B}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "Voc\xEA est\xE1 indo muito bem no seu tratamento de lombalgia!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10)(22, "span", 11);
    \u0275\u0275text(23, "Pr\xF3xima Sess\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 12);
    \u0275\u0275text(25, "22/04/2026 \xE0s 09:30");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "section", 13)(27, "div", 14)(28, "div", 15)(29, "p", 16);
    \u0275\u0275text(30, "Sess\xF5es Realizadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 17);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 19);
    \u0275\u0275text(36, "\u2705");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 14)(38, "div", 15)(39, "p", 16);
    \u0275\u0275text(40, "Pr\xF3ximas Sess\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 17);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 18);
    \u0275\u0275text(44, "agendamentos confirmados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 19);
    \u0275\u0275text(46, "\u{1F4C5}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 20)(48, "div", 15)(49, "p", 16);
    \u0275\u0275text(50, "Progresso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 21);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 22);
    \u0275\u0275text(54, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 23);
    \u0275\u0275element(56, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 25)(58, "button", 26);
    \u0275\u0275listener("click", function PacienteDashboardComponent_Template_button_click_58_listener() {
      return ctx.tab = "agenda";
    });
    \u0275\u0275text(59, "Minha Agenda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 26);
    \u0275\u0275listener("click", function PacienteDashboardComponent_Template_button_click_60_listener() {
      return ctx.tab = "progresso";
    });
    \u0275\u0275text(61, "Meu Progresso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 26);
    \u0275\u0275listener("click", function PacienteDashboardComponent_Template_button_click_62_listener() {
      return ctx.tab = "exercicios";
    });
    \u0275\u0275text(63, "Exerc\xEDcios");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, PacienteDashboardComponent_section_64_Template, 11, 2, "section", 27)(65, PacienteDashboardComponent_section_65_Template, 8, 3, "section", 28)(66, PacienteDashboardComponent_section_66_Template, 7, 1, "section", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(32);
    \u0275\u0275textInterpolate(ctx.completed.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("de ", ctx.totalSessions, " sess\xF5es");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.upcoming.length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx.progress, "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx.progress + "%");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "agenda");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "progresso");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "exercicios");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.tab === "agenda");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "progresso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "exercicios");
  }
}, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--gray-100);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--purple-600) 0%,\n      #3b82f6 100%);\n  border-radius: var(--radius-lg);\n  padding: 2rem 2.5rem;\n  color: #fff;\n}\n.welcome-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  margin-bottom: 0.4rem;\n}\n.welcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  opacity: 0.9;\n  margin-bottom: 1.25rem;\n}\n.welcome-card__next[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.welcome-card__next[_ngcontent-%COMP%]   .next-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.welcome-card__next[_ngcontent-%COMP%]   .next-date[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.progress-stat[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n  align-items: stretch !important;\n}\n.progress-stat[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--gray-400);\n  margin-top: 0.2rem;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: var(--gray-900);\n}\n.appt-upcoming-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.appt-upcoming-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--blue-100, #dbeafe);\n  border-radius: var(--radius-sm);\n  gap: 0.5rem;\n}\n.appt-upcoming-item__left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.appt-upcoming-item[_ngcontent-%COMP%]   .appt-date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.appt-upcoming-item[_ngcontent-%COMP%]   .appt-type[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--gray-500);\n}\n.appt-done-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.appt-done-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--green-100);\n  border-radius: var(--radius-sm);\n}\n.appt-done-item__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.appt-done-item__info[_ngcontent-%COMP%]   .appt-date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.progress-summary[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.notes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.note-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.note-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.note-card__header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: block;\n}\n.note-card__header[_ngcontent-%COMP%]   span.text-xs[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n.note-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.note-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n  margin-bottom: 0.875rem;\n}\n.exercises-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.exercises-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n}\n.exercise-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--purple-600);\n  flex-shrink: 0;\n}\n.exercises-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.exercise-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n}\n.exercise-card[_ngcontent-%COMP%]   .exercise-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 44px;\n  text-align: center;\n}\n.exercise-card[_ngcontent-%COMP%]   .exercise-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.exercise-card[_ngcontent-%COMP%]   .exercise-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.exercises-note[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: var(--yellow-100);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  color: var(--yellow-600);\n  font-weight: 500;\n}\n/*# sourceMappingURL=paciente-dashboard.component.css.map */"] });
var PacienteDashboardComponent = _PacienteDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PacienteDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-paciente-dashboard", standalone: true, imports: [CommonModule], template: `<div class="dash-layout">

  <!-- HEADER -->
  <header class="dash-header">
    <div class="dash-title-group">
      <div class="brand">
        <span class="brand-icon">\u2665</span>
        Vida em Movimento
      </div>
      <div class="dash-title-info">
        <h1>Meu Tratamento</h1>
        <p>Jo\xE3o Santos</p>
      </div>
    </div>
    <button class="btn btn-ghost btn-sm logout-btn" (click)="logout()">\u2197 Sair</button>
  </header>

  <!-- BODY -->
  <main class="dash-body">

    <!-- WELCOME CARD -->
    <section class="welcome-card">
      <div class="welcome-card__text">
        <h2>Ol\xE1, Jo\xE3o! \u{1F44B}</h2>
        <p>Voc\xEA est\xE1 indo muito bem no seu tratamento de lombalgia!</p>
        <div class="welcome-card__next">
          <span class="next-label">Pr\xF3xima Sess\xE3o</span>
          <span class="next-date">22/04/2026 \xE0s 09:30</span>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="grid grid-3">
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Sess\xF5es Realizadas</p>
          <p class="stat-value text-purple">{{ completed.length }}</p>
          <p class="stat-sub">de {{ totalSessions }} sess\xF5es</p>
        </div>
        <div class="stat-icon" style="background:#f5f3ff; color:#7c3aed">\u2705</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Pr\xF3ximas Sess\xF5es</p>
          <p class="stat-value text-purple">{{ upcoming.length }}</p>
          <p class="stat-sub">agendamentos confirmados</p>
        </div>
        <div class="stat-icon" style="background:#f5f3ff; color:#7c3aed">\u{1F4C5}</div>
      </div>
      <div class="stat-card progress-stat">
        <div class="stat-info">
          <p class="stat-label">Progresso</p>
          <p class="stat-value text-green">{{ progress }}%</p>
        </div>
        <div class="stat-icon" style="background:#dcfce7; color:#16a34a">\u{1F4C8}</div>
        <div class="progress-bar-wrap" style="margin-top:.75rem">
          <div class="progress-bar-fill" [style.width]="progress + '%'"></div>
        </div>
      </div>
    </section>

    <!-- TABS -->
    <div class="tab-group">
      <button class="tab-btn" [class.active]="tab === 'agenda'"    (click)="tab = 'agenda'">Minha Agenda</button>
      <button class="tab-btn" [class.active]="tab === 'progresso'" (click)="tab = 'progresso'">Meu Progresso</button>
      <button class="tab-btn" [class.active]="tab === 'exercicios'"(click)="tab = 'exercicios'">Exerc\xEDcios</button>
    </div>

    <!-- AGENDA TAB -->
    <section *ngIf="tab === 'agenda'" class="grid grid-2">
      <div class="card">
        <h3 class="section-subtitle">
          \u{1F4C5} Pr\xF3ximos Agendamentos
        </h3>
        <div class="appt-upcoming-list">
          <div class="appt-upcoming-item" *ngFor="let a of upcoming">
            <div class="appt-upcoming-item__left">
              <span class="appt-date">{{ a.date }}</span>
              <span class="appt-type text-xs text-gray">Sess\xE3o de Fisioterapia \xB7 Dra. Juliana Ferreira</span>
            </div>
            <span class="badge badge-blue">{{ a.time }}</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="section-subtitle">
          \u2705 Sess\xF5es Conclu\xEDdas
        </h3>
        <div class="appt-done-list">
          <div class="appt-done-item" *ngFor="let a of completed">
            <div class="appt-done-item__info">
              <span class="appt-date">{{ a.date }}</span>
              <span class="text-xs text-gray">Sess\xE3o de Fisioterapia \xB7 Dra. Juliana Ferreira</span>
            </div>
            <span class="badge badge-green">Conclu\xEDdo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRESS TAB -->
    <section *ngIf="tab === 'progresso'" class="card">
      <h3 class="section-subtitle" style="margin-bottom:1.25rem">Evolu\xE7\xE3o do Tratamento</h3>
      <div class="progress-summary">
        <span class="text-sm text-gray">{{ completed.length }} de {{ totalSessions }} sess\xF5es conclu\xEDdas</span>
      </div>
      <div class="notes-list">
        <div class="note-card card" *ngFor="let n of notes">
          <div class="note-card__header">
            <div>
              <strong>Sess\xE3o {{ n.session }}</strong>
              <span class="text-xs text-gray">{{ n.date }}</span>
            </div>
            <div class="note-metrics" *ngIf="n.pain !== undefined">
              <span class="badge badge-red">Dor: {{ n.pain }}/10</span>
              <span class="badge badge-blue">Mobilidade: {{ n.mobility }}%</span>
            </div>
          </div>
          <p class="note-text">{{ n.notes }}</p>
          <div class="note-exercises">
            <p class="text-xs font-semibold text-gray" style="margin-bottom:.4rem">Exerc\xEDcios:</p>
            <ul class="exercises-list">
              <li *ngFor="let e of n.exercises">
                <span class="exercise-dot"></span>{{ e }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- EXERCISES TAB -->
    <section *ngIf="tab === 'exercicios'" class="card">
      <h3 class="section-subtitle" style="margin-bottom:1.25rem">Exerc\xEDcios para Casa</h3>
      <div class="exercises-grid">
        <div class="exercise-card card" *ngFor="let ex of exercises">
          <div class="exercise-icon">{{ ex.emoji }}</div>
          <div class="exercise-info">
            <strong>{{ ex.name }}</strong>
            <span class="text-xs text-gray">{{ ex.frequency }}</span>
          </div>
          <span class="badge badge-purple">{{ ex.sets }}</span>
        </div>
      </div>
      <div class="exercises-note">
        \u26A0\uFE0F Pare se sentir dor aguda e fale com sua fisioterapeuta.
      </div>
    </section>

  </main>
</div>
`, styles: ["/* src/app/pages/paciente-dashboard/paciente-dashboard.component.scss */\n.dash-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--gray-100);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.dash-header .dash-title-group {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dash-header .dash-title-info h1 {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.dash-header .dash-title-info p {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.welcome-card {\n  background:\n    linear-gradient(\n      135deg,\n      var(--purple-600) 0%,\n      #3b82f6 100%);\n  border-radius: var(--radius-lg);\n  padding: 2rem 2.5rem;\n  color: #fff;\n}\n.welcome-card h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  margin-bottom: 0.4rem;\n}\n.welcome-card p {\n  font-size: 0.95rem;\n  opacity: 0.9;\n  margin-bottom: 1.25rem;\n}\n.welcome-card__next {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.welcome-card__next .next-label {\n  font-size: 0.8rem;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.welcome-card__next .next-date {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.progress-stat {\n  flex-direction: column !important;\n  align-items: stretch !important;\n}\n.progress-stat .stat-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n.stat-sub {\n  font-size: 0.78rem;\n  color: var(--gray-400);\n  margin-top: 0.2rem;\n}\n.section-subtitle {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: var(--gray-900);\n}\n.appt-upcoming-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.appt-upcoming-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--blue-100, #dbeafe);\n  border-radius: var(--radius-sm);\n  gap: 0.5rem;\n}\n.appt-upcoming-item__left {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.appt-upcoming-item .appt-date {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.appt-upcoming-item .appt-type {\n  font-size: 0.78rem;\n  color: var(--gray-500);\n}\n.appt-done-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.appt-done-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: var(--green-100);\n  border-radius: var(--radius-sm);\n}\n.appt-done-item__info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.appt-done-item__info .appt-date {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.progress-summary {\n  margin-bottom: 1rem;\n}\n.notes-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.note-card {\n  padding: 1.25rem;\n}\n.note-card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.note-card__header strong {\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: block;\n}\n.note-card__header span.text-xs {\n  margin-top: 0.2rem;\n}\n.note-metrics {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.note-text {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n  margin-bottom: 0.875rem;\n}\n.exercises-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.exercises-list li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n}\n.exercise-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--purple-600);\n  flex-shrink: 0;\n}\n.exercises-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.exercise-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n}\n.exercise-card .exercise-icon {\n  font-size: 1.5rem;\n  width: 44px;\n  text-align: center;\n}\n.exercise-card .exercise-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.exercise-card .exercise-info strong {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.exercises-note {\n  padding: 0.875rem 1rem;\n  background: var(--yellow-100);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  color: var(--yellow-600);\n  font-weight: 500;\n}\n/*# sourceMappingURL=paciente-dashboard.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PacienteDashboardComponent, { className: "PacienteDashboardComponent", filePath: "src/app/pages/paciente-dashboard/paciente-dashboard.component.ts", lineNumber: 13 });
})();
export {
  PacienteDashboardComponent
};
//# sourceMappingURL=chunk-ZEICIXXW.js.map
