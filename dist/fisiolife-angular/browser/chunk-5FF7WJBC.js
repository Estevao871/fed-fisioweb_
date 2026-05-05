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
  NumberValueAccessor
} from "./chunk-AU66TE26.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  Router,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WAB2DSBB.js";

// src/app/components/medical-record-dialog/medical-record-dialog.component.ts
function MedicalRecordDialogComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.conditionLabel);
  }
}
function MedicalRecordDialogComponent_div_0_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("avaliacao"));
    });
    \u0275\u0275text(1, "\u{1F4CB} Avalia\xE7\xE3o");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.tab === "avaliacao");
  }
}
function MedicalRecordDialogComponent_div_0_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("evolucao"));
    });
    \u0275\u0275text(1, "\u{1F4C8} Evolu\xE7\xE3o da Sess\xE3o");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.tab === "evolucao");
  }
}
function MedicalRecordDialogComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "\u2713 Salvo com sucesso!");
    \u0275\u0275elementEnd();
  }
}
function MedicalRecordDialogComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function MedicalRecordDialogComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Carregando dados da avalia\xE7\xE3o...");
    \u0275\u0275elementEnd();
  }
}
function MedicalRecordDialogComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "\u{1F4CB} Avalia\xE7\xE3o finalizada \u2014 campos em modo de leitura.");
    \u0275\u0275elementEnd();
  }
}
function MedicalRecordDialogComponent_div_0_div_23_label_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 52)(1, "input", 53);
    \u0275\u0275listener("change", function MedicalRecordDialogComponent_div_0_div_23_label_54_Template_input_change_1_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.avaliacaoJaFinalizada && ctx_r1.toggleConduta(c_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isCondutaSelected(c_r7))("disabled", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isCondutaSelected(c_r7))("disabled", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r7, " ");
  }
}
function MedicalRecordDialogComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3, "\u{1F469}\u200D\u2695\uFE0F Identifica\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "label", 27);
    \u0275\u0275text(6, "Fisioterapeuta Respons\xE1vel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.medico, $event) || (ctx_r1.medico = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 24)(9, "div", 25);
    \u0275\u0275text(10, "\u{1F4CB} Anamnese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26)(12, "label", 29);
    \u0275\u0275text(13, "HDA \u2014 Hist\xF3ria da Doen\xE7a Atual *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hda, $event) || (ctx_r1.hda = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26)(16, "label", 31);
    \u0275\u0275text(17, "HPP \u2014 Hist\xF3ria Patol\xF3gica Pregressa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 32);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hpp, $event) || (ctx_r1.hpp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "div", 26)(21, "label", 34);
    \u0275\u0275text(22, "Medicamentos em Uso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 35);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.medicamentos, $event) || (ctx_r1.medicamentos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 26)(25, "label", 36);
    \u0275\u0275text(26, "Cirurgias Pr\xE9vias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cirurgia, $event) || (ctx_r1.cirurgia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 26)(29, "label", 38);
    \u0275\u0275text(30, "Comorbidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.comodidade, $event) || (ctx_r1.comodidade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 24)(33, "div", 25);
    \u0275\u0275text(34, "\u{1F52C} Avalia\xE7\xE3o F\xEDsica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26)(36, "label", 40);
    \u0275\u0275text(37, "Testes Realizados *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.testesRealizados, $event) || (ctx_r1.testesRealizados = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 26)(40, "label", 42);
    \u0275\u0275text(41, "Goniometria (Amplitude de Movimento)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.goniometria, $event) || (ctx_r1.goniometria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 24)(44, "div", 25);
    \u0275\u0275text(45, "\u{1F48A} Diagn\xF3stico e Conduta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 26)(47, "label", 44);
    \u0275\u0275text(48, "Diagn\xF3stico Fisioterap\xEAutico *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.diagnostico, $event) || (ctx_r1.diagnostico = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 26)(51, "label");
    \u0275\u0275text(52, "Conduta Terap\xEAutica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 46);
    \u0275\u0275template(54, MedicalRecordDialogComponent_div_0_div_23_label_54_Template, 3, 7, "label", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 26)(56, "label", 48);
    \u0275\u0275text(57, "Progn\xF3stico *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 49);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.prognostico, $event) || (ctx_r1.prognostico = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 26)(60, "label", 50);
    \u0275\u0275text(61, "Desfecho Esperado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_23_Template_textarea_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.desfecho, $event) || (ctx_r1.desfecho = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.medico);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hda);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hpp);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.medicamentos);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cirurgia);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.comodidade);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.testesRealizados);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.goniometria);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.diagnostico);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.condutaOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.prognostico);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.desfecho);
    \u0275\u0275property("readonly", ctx_r1.avaliacaoJaFinalizada);
  }
}
function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 72);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhum exerc\xEDcio adicionado");
    \u0275\u0275elementEnd()();
  }
}
function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_div_27_Template_input_ngModelChange_1_listener($event) {
      const ex_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(ex_r10.name, $event) || (ex_r10.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 75);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_div_27_Template_button_click_2_listener() {
      const i_r11 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeExercise(i_r11));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ex_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ex_r10.name);
    \u0275\u0275attribute("aria-label", "Exerc\xEDcio " + (i_r11 + 1));
  }
}
function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 57)(3, "span", 58);
    \u0275\u0275text(4, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Registrar Evolu\xE7\xE3o da Sess\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "label", 59);
    \u0275\u0275text(9, "Observa\xE7\xF5es da Sess\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sessionNotes, $event) || (ctx_r1.sessionNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 61)(12, "div", 26)(13, "label", 62);
    \u0275\u0275text(14, "N\xEDvel de Dor Hoje (0\u201310)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sessionPain, $event) || (ctx_r1.sessionPain = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26)(17, "label", 64);
    \u0275\u0275text(18, "Mobilidade Atual (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sessionMobility, $event) || (ctx_r1.sessionMobility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 66)(21, "div", 67)(22, "strong");
    \u0275\u0275text(23, "Exerc\xEDcios Realizados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 68);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_div_24_ng_container_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addExercise());
    });
    \u0275\u0275text(25, "+ Adicionar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, MedicalRecordDialogComponent_div_0_div_24_ng_container_1_div_26_Template, 5, 0, "div", 69)(27, MedicalRecordDialogComponent_div_0_div_24_ng_container_1_div_27_Template, 4, 2, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sessionNotes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sessionPain);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sessionMobility);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.sessionExercises.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sessionExercises);
  }
}
function MedicalRecordDialogComponent_div_0_div_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 58);
    \u0275\u0275text(2, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Nenhuma sess\xE3o selecionada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Para registrar a evolu\xE7\xE3o, abra o prontu\xE1rio a partir de um agendamento na ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Agenda de Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ".");
    \u0275\u0275elementEnd()()();
  }
}
function MedicalRecordDialogComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, MedicalRecordDialogComponent_div_0_div_24_ng_container_1_Template, 28, 5, "ng-container", 55)(2, MedicalRecordDialogComponent_div_0_div_24_ng_template_2_Template, 11, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const semSessao_r12 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sessaoId)("ngIfElse", semSessao_r12);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, "Carregando hist\xF3rico...");
    \u0275\u0275elementEnd();
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 72);
    \u0275\u0275text(2, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma sess\xE3o registrada ainda");
    \u0275\u0275elementEnd()();
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 94);
    \u0275\u0275text(2, "Observa\xE7\xF5es:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r13.observacoes);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "Dor: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r13.nivelDor, "/10");
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "Mobilidade: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r13.mobilidade, "%");
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275template(1, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_2_span_1_Template, 4, 1, "span", 96)(2, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_2_span_2_Template, 4, 1, "span", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.nivelDor != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.mobilidade != null);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r14);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 94);
    \u0275\u0275text(2, "Exerc\xEDcios:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 98);
    \u0275\u0275template(4, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_3_li_4_Template, 3, 1, "li", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", s_r13.exercicios);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275template(1, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_1_Template, 5, 1, "div", 91)(2, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_2_Template, 3, 2, "div", 92)(3, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_div_3_Template, 5, 1, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.observacoes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.nivelDor != null || s_r13.mobilidade != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.exercicios == null ? null : s_r13.exercicios.length);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "span", 86);
    \u0275\u0275text(2, "Evolu\xE7\xE3o n\xE3o registrada nesta sess\xE3o");
    \u0275\u0275elementEnd()();
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_9_Template, 4, 3, "div", 88)(10, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_div_10_Template, 3, 0, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r13.tipo === "avaliacao" ? "Avalia\xE7\xE3o" : "Sess\xE3o " + (s_r13.numeroOcorrencia ?? ctx_r1.sessionHistory.length - i_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatData(s_r13.dataHora));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusBadge(s_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatStatus(s_r13.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.observacoes || s_r13.nivelDor != null || (s_r13.exercicios == null ? null : s_r13.exercicios.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r13.observacoes && s_r13.nivelDor == null && !(s_r13.exercicios == null ? null : s_r13.exercicios.length));
  }
}
function MedicalRecordDialogComponent_div_0_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 82);
    \u0275\u0275template(4, MedicalRecordDialogComponent_div_0_div_25_div_3_div_4_Template, 11, 6, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.sessionHistory.length, " registro", ctx_r1.sessionHistory.length !== 1 ? "s" : "", " (avalia\xE7\xE3o + sess\xF5es) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sessionHistory);
  }
}
function MedicalRecordDialogComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, MedicalRecordDialogComponent_div_0_div_25_div_1_Template, 2, 0, "div", 77)(2, MedicalRecordDialogComponent_div_0_div_25_div_2_Template, 5, 0, "div", 78)(3, MedicalRecordDialogComponent_div_0_div_25_div_3_Template, 5, 3, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingHistorico);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingHistorico && ctx_r1.sessionHistory.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingHistorico && ctx_r1.sessionHistory.length > 0);
  }
}
function MedicalRecordDialogComponent_div_0_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-success", ctx_r1.saveSuccess);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveSuccess ? "\u2713 Salvo!" : ctx_r1.saveLabel, " ");
  }
}
function MedicalRecordDialogComponent_div_0_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1, "Fechar");
    \u0275\u0275elementEnd();
  }
}
function MedicalRecordDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "div")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MedicalRecordDialogComponent_div_0_span_9_Template, 2, 1, "span", 6);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(13, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275template(15, MedicalRecordDialogComponent_div_0_button_15_Template, 2, 2, "button", 9)(16, MedicalRecordDialogComponent_div_0_button_16_Template, 2, 2, "button", 9);
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("historico"));
    });
    \u0275\u0275text(18, "\u{1F550} Hist\xF3rico");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, MedicalRecordDialogComponent_div_0_div_19_Template, 2, 0, "div", 11)(20, MedicalRecordDialogComponent_div_0_div_20_Template, 2, 1, "div", 12)(21, MedicalRecordDialogComponent_div_0_div_21_Template, 2, 0, "div", 13)(22, MedicalRecordDialogComponent_div_0_div_22_Template, 2, 0, "div", 13)(23, MedicalRecordDialogComponent_div_0_div_23_Template, 63, 23, "div", 14)(24, MedicalRecordDialogComponent_div_0_div_24_Template, 4, 2, "div", 15)(25, MedicalRecordDialogComponent_div_0_div_25_Template, 4, 3, "div", 15);
    \u0275\u0275elementStart(26, "div", 16)(27, "button", 17);
    \u0275\u0275listener("click", function MedicalRecordDialogComponent_div_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(28, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, MedicalRecordDialogComponent_div_0_button_29_Template, 2, 4, "button", 18)(30, MedicalRecordDialogComponent_div_0_button_30_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isInitialEvaluation ? "Avalia\xE7\xE3o Inicial" : "Prontu\xE1rio do Paciente");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F464} ", ctx_r1.patientName, "", ctx_r1.patientAge ? ", " + ctx_r1.patientAge + " anos" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.condition && ctx_r1.condition !== "sem_avaliacao");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.today);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isInitialEvaluation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isInitialEvaluation);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.tab === "historico");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.saveSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingAvaliacao);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.avaliacaoJaFinalizada && ctx_r1.tab === "avaliacao");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tab === "avaliacao");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tab === "evolucao");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tab === "historico");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentTabHasSave);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentTabHasSave);
  }
}
var CONDUTA_OPTIONS = [
  "Cinesioterapia",
  "Eletroterapia",
  "Termoterapia",
  "Hidroterapia",
  "Terapia Manual",
  "RPG",
  "Pilates Terap\xEAutico",
  "Mobiliza\xE7\xE3o Articular",
  "Acupuntura",
  "Dry Needling"
];
var _MedicalRecordDialogComponent = class _MedicalRecordDialogComponent {
  get today() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR");
  }
  get conditionLabel() {
    const m = {
      aguardando: "Aguardando avalia\xE7\xE3o",
      em_atendimento: "Em avalia\xE7\xE3o",
      finalizada: "Avalia\xE7\xE3o conclu\xEDda",
      sem_avaliacao: "Sem avalia\xE7\xE3o"
    };
    return m[this.condition] ?? this.condition;
  }
  get currentTabHasSave() {
    if (this.tab === "avaliacao" && this.isInitialEvaluation && !!this.avaliacaoId && !this.avaliacaoJaFinalizada)
      return true;
    if (this.tab === "evolucao" && !!this.sessaoId)
      return true;
    return false;
  }
  get saveLabel() {
    if (this.saving)
      return "Salvando...";
    return this.tab === "avaliacao" ? "\u{1F4BE} Salvar Avalia\xE7\xE3o" : "\u{1F4BE} Salvar Evolu\xE7\xE3o";
  }
  constructor(api) {
    this.api = api;
    this.open = false;
    this.patientName = "";
    this.patientAge = 0;
    this.condition = "";
    this.isInitialEvaluation = false;
    this.avaliacaoId = "";
    this.sessaoId = "";
    this.pacienteId = "";
    this.openChange = new EventEmitter();
    this.saved = new EventEmitter();
    this.condutaOptions = CONDUTA_OPTIONS;
    this.tab = "avaliacao";
    this.saving = false;
    this.saveSuccess = false;
    this.error = "";
    this.loadingHistorico = false;
    this.loadingAvaliacao = false;
    this.avaliacaoJaFinalizada = false;
    this.medico = "";
    this.hda = "";
    this.hpp = "";
    this.testesRealizados = "";
    this.goniometria = "";
    this.condutaSelecionada = [];
    this.diagnostico = "";
    this.prognostico = "";
    this.desfecho = "";
    this.comodidade = "";
    this.medicamentos = "";
    this.cirurgia = "";
    this.sessionNotes = "";
    this.sessionPain = null;
    this.sessionMobility = null;
    this.sessionExercises = [];
    this.sessionHistory = [];
  }
  ngOnChanges() {
    if (this.open) {
      this.tab = this.isInitialEvaluation ? "avaliacao" : "evolucao";
      this.saveSuccess = false;
      this.error = "";
      this.resetForms();
      if (this.isInitialEvaluation && this.avaliacaoId) {
        this.loadAvaliacaoSalva();
      }
      if (this.pacienteId) {
        this.loadHistorico();
      }
    }
  }
  setTab(t) {
    this.tab = t;
    this.error = "";
    this.saveSuccess = false;
    if (t === "historico" && this.pacienteId && this.sessionHistory.length === 0) {
      this.loadHistorico();
    }
  }
  toggleConduta(c) {
    const i = this.condutaSelecionada.indexOf(c);
    if (i >= 0)
      this.condutaSelecionada.splice(i, 1);
    else
      this.condutaSelecionada.push(c);
  }
  isCondutaSelected(c) {
    return this.condutaSelecionada.includes(c);
  }
  loadAvaliacaoSalva() {
    this.loadingAvaliacao = true;
    this.api.getAvaliacaoDetalhe(this.avaliacaoId).subscribe({
      next: (av) => this.populateAvaliacao(av),
      error: () => {
        this.loadingAvaliacao = false;
      }
    });
  }
  populateAvaliacao(av) {
    this.loadingAvaliacao = false;
    this.avaliacaoJaFinalizada = av.status === "finalizada";
    this.medico = av.medico ?? "";
    this.hda = av.hda ?? "";
    this.hpp = av.hpp ?? "";
    this.testesRealizados = av.testesRealizados ?? "";
    this.goniometria = av.goniometria ?? "";
    this.diagnostico = av.diagnostico ?? "";
    this.prognostico = av.prognostico ?? "";
    this.desfecho = av.desfecho ?? "";
    this.comodidade = av.comodidade ?? "";
    this.medicamentos = av.medicamentos ?? "";
    this.cirurgia = av.cirurgia ?? "";
    if (av.condutaTerapeutica) {
      this.condutaSelecionada = av.condutaTerapeutica.split(", ").filter((s) => s.trim());
    }
  }
  loadHistorico() {
    this.loadingHistorico = true;
    this.api.getHistoricoSessoes(this.pacienteId).subscribe({
      next: (h) => {
        this.sessionHistory = h;
        this.loadingHistorico = false;
      },
      error: () => {
        this.loadingHistorico = false;
      }
    });
  }
  addExercise() {
    this.sessionExercises.push({ id: crypto.randomUUID(), name: "" });
  }
  removeExercise(i) {
    this.sessionExercises.splice(i, 1);
  }
  save() {
    if (this.saving)
      return;
    this.error = "";
    this.saveSuccess = false;
    if (this.tab === "avaliacao" && this.isInitialEvaluation && this.avaliacaoId) {
      this.saveEvaluation();
    } else if (this.tab === "evolucao" && this.sessaoId) {
      this.saveEvolucao();
    } else {
      this.close();
    }
  }
  saveEvaluation() {
    this.saving = true;
    this.api.finalizarAvaliacao({
      avaliacaoId: this.avaliacaoId,
      medico: this.medico || void 0,
      hda: this.hda || void 0,
      hpp: this.hpp || void 0,
      testesRealizados: this.testesRealizados || void 0,
      goniometria: this.goniometria || void 0,
      condutaTerapeutica: this.condutaSelecionada.join(", ") || void 0,
      diagnostico: this.diagnostico || void 0,
      prognostico: this.prognostico || void 0,
      desfecho: this.desfecho || void 0,
      comodidade: this.comodidade || void 0,
      medicamentos: this.medicamentos || void 0,
      cirurgia: this.cirurgia || void 0
    }).subscribe({
      next: () => {
        if (this.sessaoId) {
          this.api.marcarAvaliada(this.sessaoId).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveSuccess()
          });
        } else {
          this.onSaveSuccess();
        }
      },
      error: () => {
        this.saving = false;
        this.error = "N\xE3o foi poss\xEDvel salvar a avalia\xE7\xE3o. Verifique os dados e tente novamente.";
      }
    });
  }
  saveEvolucao() {
    this.saving = true;
    this.api.registrarEvolucao(this.sessaoId, {
      observacoes: this.sessionNotes || void 0,
      nivelDor: this.sessionPain,
      mobilidade: this.sessionMobility,
      exercicios: this.sessionExercises.map((e) => e.name).filter((n) => n.trim())
    }).subscribe({
      next: () => {
        this.saving = false;
        this.saveSuccess = true;
        this.saved.emit();
        if (this.pacienteId) {
          this.api.getHistoricoSessoes(this.pacienteId).subscribe({
            next: (h) => {
              this.sessionHistory = h;
            },
            error: () => {
            }
          });
        }
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3e3);
      },
      error: () => {
        this.saving = false;
        this.error = "N\xE3o foi poss\xEDvel salvar a evolu\xE7\xE3o.";
      }
    });
  }
  onSaveSuccess() {
    this.saving = false;
    this.saveSuccess = true;
    this.saved.emit();
    setTimeout(() => {
      this.saveSuccess = false;
      this.openChange.emit(false);
      this.resetForms();
    }, 1200);
  }
  close() {
    this.openChange.emit(false);
    this.resetForms();
  }
  formatData(iso) {
    return new Date(iso).toLocaleDateString("pt-BR");
  }
  formatStatus(s) {
    const m = {
      compareceu: "Conclu\xEDda",
      avaliada: "Conclu\xEDda",
      faltou: "Faltou",
      cancelada: "Cancelada",
      marcada: "Agendada",
      remarcada: "Reagendada"
    };
    return m[s] ?? s;
  }
  statusBadge(s) {
    const m = {
      compareceu: "badge-green",
      avaliada: "badge-green",
      faltou: "badge-red",
      cancelada: "badge-gray",
      marcada: "badge-blue",
      remarcada: "badge-purple"
    };
    return m[s] ?? "badge-gray";
  }
  resetForms() {
    this.medico = "";
    this.hda = "";
    this.hpp = "";
    this.testesRealizados = "";
    this.goniometria = "";
    this.condutaSelecionada = [];
    this.diagnostico = "";
    this.prognostico = "";
    this.desfecho = "";
    this.comodidade = "";
    this.medicamentos = "";
    this.cirurgia = "";
    this.sessionNotes = "";
    this.sessionPain = null;
    this.sessionMobility = null;
    this.sessionExercises = [];
    this.sessionHistory = [];
    this.saving = false;
    this.error = "";
    this.avaliacaoJaFinalizada = false;
  }
};
_MedicalRecordDialogComponent.\u0275fac = function MedicalRecordDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MedicalRecordDialogComponent)(\u0275\u0275directiveInject(ApiService));
};
_MedicalRecordDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MedicalRecordDialogComponent, selectors: [["app-medical-record-dialog"]], inputs: { open: "open", patientName: "patientName", patientAge: "patientAge", condition: "condition", isInitialEvaluation: "isInitialEvaluation", avaliacaoId: "avaliacaoId", sessaoId: "sessaoId", pacienteId: "pacienteId" }, outputs: { openChange: "openChange", saved: "saved" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["semSessao", ""], ["class", "modal-backdrop", "role", "dialog", "aria-modal", "true", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", 1, "modal-backdrop", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [1, "modal-header"], [1, "mr-meta"], [4, "ngIf"], ["aria-label", "Fechar", 1, "modal-close", 3, "click"], [1, "modal-tabs"], [3, "active", "click", 4, "ngIf"], [3, "click"], ["class", "alert-success", "role", "status", 4, "ngIf"], ["class", "alert-error", "role", "alert", 4, "ngIf"], ["class", "alert-info", 4, "ngIf"], ["class", "tab-content eval-sections", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "btn-success", "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline", 3, "click", 4, "ngIf"], ["role", "status", 1, "alert-success"], ["role", "alert", 1, "alert-error"], [1, "alert-info"], [1, "tab-content", "eval-sections"], [1, "eval-section"], [1, "eval-section__title"], [1, "field-group"], ["for", "av-medico"], ["id", "av-medico", "placeholder", "Nome do fisioterapeuta", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-hda"], ["id", "av-hda", "rows", "4", "placeholder", "Queixa principal, in\xEDcio dos sintomas, evolu\xE7\xE3o, fatores de piora/melhora...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-hpp"], ["id", "av-hpp", "rows", "2", "placeholder", "Doen\xE7as preexistentes, hist\xF3rico de les\xF5es, acidentes...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], [1, "grid", "grid-2", 2, "gap", ".875rem"], ["for", "av-med"], ["id", "av-med", "rows", "2", "placeholder", "Nomes, dosagens...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-cir"], ["id", "av-cir", "rows", "2", "placeholder", "Tipo e data das cirurgias...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-com"], ["id", "av-com", "rows", "2", "placeholder", "Diabetes, hipertens\xE3o, obesidade...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-testes"], ["id", "av-testes", "rows", "4", "placeholder", "Ex: Teste de for\xE7a muscular \u2014 Grau 4/5 bilateral\nTeste de Las\xE8gue \u2014 Negativo\nAvalia\xE7\xE3o postural \u2014 hipercifose tor\xE1cica...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-gon"], ["id", "av-gon", "rows", "3", "placeholder", "Ex: Joelho D \u2014 Flex\xE3o: 120\xB0 | Extens\xE3o: 0\xB0\nOmbro E \u2014 Flex\xE3o: 80\xB0 | Abdu\xE7\xE3o: 70\xB0", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-diag"], ["id", "av-diag", "rows", "2", "placeholder", "Diagn\xF3stico cin\xE9tico funcional...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], [1, "conduta-grid"], ["class", "conduta-item", 3, "selected", "disabled", 4, "ngFor", "ngForOf"], ["for", "av-prog"], ["id", "av-prog", "rows", "3", "placeholder", "Expectativas de recupera\xE7\xE3o, tempo estimado...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], ["for", "av-des"], ["id", "av-des", "rows", "2", "placeholder", "Objetivos funcionais do tratamento...", 1, "input", 3, "ngModelChange", "ngModel", "readonly"], [1, "conduta-item"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "tab-content"], [4, "ngIf", "ngIfElse"], [1, "evolucao-box", "card"], [1, "evolucao-header"], ["aria-hidden", "true"], ["for", "ev-notes"], ["id", "ev-notes", "rows", "4", "placeholder", "Como o paciente est\xE1? Houve melhora? Dificuldades encontradas?...", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-2", 2, "gap", "1rem"], ["for", "ev-pain"], ["id", "ev-pain", "type", "number", "min", "0", "max", "10", "placeholder", "0 = sem dor \xB7 10 = m\xE1xima", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "ev-mob"], ["id", "ev-mob", "type", "number", "min", "0", "max", "100", "placeholder", "Percentual estimado", 1, "input", 3, "ngModelChange", "ngModel"], [1, "exercises-section"], [1, "exercises-header"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["class", "empty-state", "style", "padding:1.5rem 0", 4, "ngIf"], ["class", "exercise-row", 4, "ngFor", "ngForOf"], [1, "empty-state", 2, "padding", "1.5rem 0"], ["aria-hidden", "true", 1, "empty-icon"], [1, "exercise-row"], ["placeholder", "Ex: Ponte \u2014 3\xD715 repeti\xE7\xF5es", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Remover", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "sem-sessao-msg"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-state"], [1, "empty-state"], [1, "text-sm", "text-gray", 2, "margin-bottom", "1rem"], [1, "history-list"], ["class", "history-item card", 4, "ngFor", "ngForOf"], [1, "history-item", "card"], [1, "history-item__header"], [1, "text-xs", "text-gray"], [1, "badge", 3, "ngClass"], ["class", "history-item__body", 4, "ngIf"], ["class", "history-no-data", 4, "ngIf"], [1, "history-item__body"], ["class", "history-field", 4, "ngIf"], ["class", "history-metrics", 4, "ngIf"], [1, "history-field"], [1, "history-label"], [1, "history-metrics"], ["class", "metric-badge", 4, "ngIf"], [1, "metric-badge"], [1, "history-exercises"], [4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "dot"], [1, "history-no-data"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-outline", 3, "click"]], template: function MedicalRecordDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MedicalRecordDialogComponent_div_0_Template, 31, 19, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.open);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.slider-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n.slider[_ngcontent-%COMP%] {\n  flex: 1;\n  -webkit-appearance: none;\n  height: 5px;\n  border-radius: 999px;\n  background: #e9d5ff;\n  outline: none;\n  border: none;\n  padding: 0;\n  width: auto;\n}\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--grad-brand);\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(124, 58, 237, 0.35);\n}\n.slider-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--gray-800);\n  min-width: 2.5rem;\n  text-align: right;\n}\n.evolucao-box[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background: var(--gray-50);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.evolucao-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.evolucao-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.exercises-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.exercises-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.exercises-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.exercise-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.history-item[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.history-item__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.history-item__header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: block;\n}\n.history-item__header[_ngcontent-%COMP%]   span.text-xs[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n.history-item__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.history-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n}\n.history-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--gray-800);\n}\n.history-exercises[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  padding-left: 0.25rem;\n}\n.history-exercises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--purple-600);\n  flex-shrink: 0;\n}\n.mr-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  color: var(--gray-500);\n  margin-top: 0.25rem;\n}\n.alert-success[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  background: var(--green-100);\n  color: var(--green-700);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  background: var(--red-100);\n  color: var(--red-600);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  margin-bottom: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  color: var(--gray-400);\n  font-size: 0.9rem;\n}\n.history-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.metric-badge[_ngcontent-%COMP%] {\n  background: var(--purple-50);\n  color: var(--purple-700);\n  border-radius: 999px;\n  padding: 0.2rem 0.65rem;\n  font-size: 0.78rem;\n}\n.history-no-data[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--green-600) !important;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25) !important;\n}\n.eval-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.eval-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.eval-section__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--purple-700);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--purple-100);\n}\n.conduta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.conduta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 0.82rem;\n  color: var(--gray-700);\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.conduta-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--purple-300);\n  background: var(--purple-50);\n}\n.conduta-item.selected[_ngcontent-%COMP%] {\n  border-color: var(--purple-600);\n  background: var(--purple-50);\n  color: var(--purple-700);\n  font-weight: 600;\n}\n.conduta-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--purple-600);\n}\n.sem-sessao-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--blue-100);\n  border-radius: var(--radius);\n  font-size: 0.9rem;\n}\n.sem-sessao-msg[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.sem-sessao-msg[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--gray-900);\n  margin-bottom: 0.25rem;\n}\n.sem-sessao-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  line-height: 1.6;\n}\n.alert-info[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  background: var(--blue-100);\n  color: var(--blue-600);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=medical-record-dialog.component.css.map */'] });
var MedicalRecordDialogComponent = _MedicalRecordDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MedicalRecordDialogComponent, [{
    type: Component,
    args: [{ selector: "app-medical-record-dialog", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-backdrop" *ngIf="open" (click)="close()" role="dialog" aria-modal="true">
  <div class="modal modal-lg" (click)="$event.stopPropagation()">

    <!-- HEADER -->
    <div class="modal-header">
      <div>
        <h2>{{ isInitialEvaluation ? 'Avalia\xE7\xE3o Inicial' : 'Prontu\xE1rio do Paciente' }}</h2>
        <div class="mr-meta">
          <span>\u{1F464} {{ patientName }}{{ patientAge ? ', ' + patientAge + ' anos' : '' }}</span>
          <span *ngIf="condition && condition !== 'sem_avaliacao'">\xB7 {{ conditionLabel }}</span>
          <span>\xB7 {{ today }}</span>
        </div>
      </div>
      <button class="modal-close" (click)="close()" aria-label="Fechar">\u2715</button>
    </div>

    <!-- TABS -->
    <div class="modal-tabs">
      <button *ngIf="isInitialEvaluation"  [class.active]="tab === 'avaliacao'"  (click)="setTab('avaliacao')">\u{1F4CB} Avalia\xE7\xE3o</button>
      <button *ngIf="!isInitialEvaluation" [class.active]="tab === 'evolucao'"  (click)="setTab('evolucao')">\u{1F4C8} Evolu\xE7\xE3o da Sess\xE3o</button>
      <button [class.active]="tab === 'historico'" (click)="setTab('historico')">\u{1F550} Hist\xF3rico</button>
    </div>

    <!-- ALERTS -->
    <div *ngIf="saveSuccess" class="alert-success" role="status">\u2713 Salvo com sucesso!</div>
    <div *ngIf="error"       class="alert-error"   role="alert">{{ error }}</div>
    <div *ngIf="loadingAvaliacao" class="alert-info">Carregando dados da avalia\xE7\xE3o...</div>
    <div *ngIf="avaliacaoJaFinalizada && tab === 'avaliacao'" class="alert-info">\u{1F4CB} Avalia\xE7\xE3o finalizada \u2014 campos em modo de leitura.</div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 AVALIA\xC7\xC3O INICIAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="tab === 'avaliacao'" class="tab-content eval-sections">

      <!-- Fisioterapeuta -->
      <div class="eval-section">
        <div class="eval-section__title">\u{1F469}\u200D\u2695\uFE0F Identifica\xE7\xE3o</div>
        <div class="field-group">
          <label for="av-medico">Fisioterapeuta Respons\xE1vel</label>
          <input id="av-medico" class="input" [(ngModel)]="medico" placeholder="Nome do fisioterapeuta" [readonly]="avaliacaoJaFinalizada" />
        </div>
      </div>

      <!-- Anamnese -->
      <div class="eval-section">
        <div class="eval-section__title">\u{1F4CB} Anamnese</div>
        <div class="field-group">
          <label for="av-hda">HDA \u2014 Hist\xF3ria da Doen\xE7a Atual *</label>
          <textarea id="av-hda" class="input" [(ngModel)]="hda" rows="4"
            placeholder="Queixa principal, in\xEDcio dos sintomas, evolu\xE7\xE3o, fatores de piora/melhora..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
        <div class="field-group">
          <label for="av-hpp">HPP \u2014 Hist\xF3ria Patol\xF3gica Pregressa</label>
          <textarea id="av-hpp" class="input" [(ngModel)]="hpp" rows="2"
            placeholder="Doen\xE7as preexistentes, hist\xF3rico de les\xF5es, acidentes..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
        <div class="grid grid-2" style="gap:.875rem">
          <div class="field-group">
            <label for="av-med">Medicamentos em Uso</label>
            <textarea id="av-med" class="input" [(ngModel)]="medicamentos" rows="2"
              placeholder="Nomes, dosagens..." [readonly]="avaliacaoJaFinalizada"></textarea>
          </div>
          <div class="field-group">
            <label for="av-cir">Cirurgias Pr\xE9vias</label>
            <textarea id="av-cir" class="input" [(ngModel)]="cirurgia" rows="2"
              placeholder="Tipo e data das cirurgias..." [readonly]="avaliacaoJaFinalizada"></textarea>
          </div>
        </div>
        <div class="field-group">
          <label for="av-com">Comorbidades</label>
          <textarea id="av-com" class="input" [(ngModel)]="comodidade" rows="2"
            placeholder="Diabetes, hipertens\xE3o, obesidade..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
      </div>

      <!-- Avalia\xE7\xE3o F\xEDsica -->
      <div class="eval-section">
        <div class="eval-section__title">\u{1F52C} Avalia\xE7\xE3o F\xEDsica</div>
        <div class="field-group">
          <label for="av-testes">Testes Realizados *</label>
          <textarea id="av-testes" class="input" [(ngModel)]="testesRealizados" rows="4"
            placeholder="Ex: Teste de for\xE7a muscular \u2014 Grau 4/5 bilateral&#10;Teste de Las\xE8gue \u2014 Negativo&#10;Avalia\xE7\xE3o postural \u2014 hipercifose tor\xE1cica..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
        <div class="field-group">
          <label for="av-gon">Goniometria (Amplitude de Movimento)</label>
          <textarea id="av-gon" class="input" [(ngModel)]="goniometria" rows="3"
            placeholder="Ex: Joelho D \u2014 Flex\xE3o: 120\xB0 | Extens\xE3o: 0\xB0&#10;Ombro E \u2014 Flex\xE3o: 80\xB0 | Abdu\xE7\xE3o: 70\xB0" [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
      </div>

      <!-- Diagn\xF3stico e Conduta -->
      <div class="eval-section">
        <div class="eval-section__title">\u{1F48A} Diagn\xF3stico e Conduta</div>
        <div class="field-group">
          <label for="av-diag">Diagn\xF3stico Fisioterap\xEAutico *</label>
          <textarea id="av-diag" class="input" [(ngModel)]="diagnostico" rows="2"
            placeholder="Diagn\xF3stico cin\xE9tico funcional..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>

        <div class="field-group">
          <label>Conduta Terap\xEAutica</label>
          <div class="conduta-grid">
            <label *ngFor="let c of condutaOptions" class="conduta-item" [class.selected]="isCondutaSelected(c)" [class.disabled]="avaliacaoJaFinalizada">
              <input type="checkbox" [checked]="isCondutaSelected(c)" (change)="!avaliacaoJaFinalizada && toggleConduta(c)" [disabled]="avaliacaoJaFinalizada" />
              {{ c }}
            </label>
          </div>
        </div>

        <div class="field-group">
          <label for="av-prog">Progn\xF3stico *</label>
          <textarea id="av-prog" class="input" [(ngModel)]="prognostico" rows="3"
            placeholder="Expectativas de recupera\xE7\xE3o, tempo estimado..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
        <div class="field-group">
          <label for="av-des">Desfecho Esperado</label>
          <textarea id="av-des" class="input" [(ngModel)]="desfecho" rows="2"
            placeholder="Objetivos funcionais do tratamento..." [readonly]="avaliacaoJaFinalizada"></textarea>
        </div>
      </div>

    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EVOLU\xC7\xC3O \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="tab === 'evolucao'" class="tab-content">

      <ng-container *ngIf="sessaoId; else semSessao">
        <div class="evolucao-box card">
          <div class="evolucao-header">
            <span aria-hidden="true">\u{1F4C8}</span>
            <strong>Registrar Evolu\xE7\xE3o da Sess\xE3o</strong>
          </div>

          <div class="field-group">
            <label for="ev-notes">Observa\xE7\xF5es da Sess\xE3o</label>
            <textarea id="ev-notes" class="input" [(ngModel)]="sessionNotes" rows="4"
              placeholder="Como o paciente est\xE1? Houve melhora? Dificuldades encontradas?..."></textarea>
          </div>

          <div class="grid grid-2" style="gap:1rem">
            <div class="field-group">
              <label for="ev-pain">N\xEDvel de Dor Hoje (0\u201310)</label>
              <input id="ev-pain" class="input" type="number" [(ngModel)]="sessionPain"
                min="0" max="10" placeholder="0 = sem dor \xB7 10 = m\xE1xima" />
            </div>
            <div class="field-group">
              <label for="ev-mob">Mobilidade Atual (%)</label>
              <input id="ev-mob" class="input" type="number" [(ngModel)]="sessionMobility"
                min="0" max="100" placeholder="Percentual estimado" />
            </div>
          </div>
        </div>

        <div class="exercises-section">
          <div class="exercises-header">
            <strong>Exerc\xEDcios Realizados</strong>
            <button class="btn btn-outline btn-sm" type="button" (click)="addExercise()">+ Adicionar</button>
          </div>
          <div *ngIf="sessionExercises.length === 0" class="empty-state" style="padding:1.5rem 0">
            <span class="empty-icon" aria-hidden="true">\u{1F4C4}</span>
            <p>Nenhum exerc\xEDcio adicionado</p>
          </div>
          <div *ngFor="let ex of sessionExercises; let i = index" class="exercise-row">
            <input class="input" [(ngModel)]="ex.name"
              placeholder="Ex: Ponte \u2014 3\xD715 repeti\xE7\xF5es" [attr.aria-label]="'Exerc\xEDcio ' + (i + 1)" />
            <button class="btn btn-ghost btn-sm" type="button" (click)="removeExercise(i)" aria-label="Remover">\u2715</button>
          </div>
        </div>
      </ng-container>

      <ng-template #semSessao>
        <div class="sem-sessao-msg">
          <span aria-hidden="true">\u2139\uFE0F</span>
          <div>
            <strong>Nenhuma sess\xE3o selecionada</strong>
            <p>Para registrar a evolu\xE7\xE3o, abra o prontu\xE1rio a partir de um agendamento na <strong>Agenda de Hoje</strong>.</p>
          </div>
        </div>
      </ng-template>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 HIST\xD3RICO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="tab === 'historico'" class="tab-content">
      <div *ngIf="loadingHistorico" class="loading-state">Carregando hist\xF3rico...</div>

      <div *ngIf="!loadingHistorico && sessionHistory.length === 0" class="empty-state">
        <span class="empty-icon" aria-hidden="true">\u{1F550}</span>
        <p>Nenhuma sess\xE3o registrada ainda</p>
      </div>

      <div *ngIf="!loadingHistorico && sessionHistory.length > 0">
        <p class="text-sm text-gray" style="margin-bottom:1rem">
          {{ sessionHistory.length }} registro{{ sessionHistory.length !== 1 ? 's' : '' }} (avalia\xE7\xE3o + sess\xF5es)
        </p>
        <div class="history-list">
          <div class="history-item card" *ngFor="let s of sessionHistory; let i = index">
            <div class="history-item__header">
              <div>
                <strong>{{ s.tipo === 'avaliacao' ? 'Avalia\xE7\xE3o' : 'Sess\xE3o ' + (s.numeroOcorrencia ?? (sessionHistory.length - i)) }}</strong>
                <span class="text-xs text-gray">{{ formatData(s.dataHora) }}</span>
              </div>
              <span class="badge" [ngClass]="statusBadge(s.status)">{{ formatStatus(s.status) }}</span>
            </div>
            <div class="history-item__body" *ngIf="s.observacoes || s.nivelDor != null || s.exercicios?.length">
              <div class="history-field" *ngIf="s.observacoes">
                <span class="history-label">Observa\xE7\xF5es:</span>
                <span>{{ s.observacoes }}</span>
              </div>
              <div class="history-metrics" *ngIf="s.nivelDor != null || s.mobilidade != null">
                <span *ngIf="s.nivelDor != null" class="metric-badge">Dor: <strong>{{ s.nivelDor }}/10</strong></span>
                <span *ngIf="s.mobilidade != null" class="metric-badge">Mobilidade: <strong>{{ s.mobilidade }}%</strong></span>
              </div>
              <div class="history-field" *ngIf="s.exercicios?.length">
                <span class="history-label">Exerc\xEDcios:</span>
                <ul class="history-exercises">
                  <li *ngFor="let e of s.exercicios"><span class="dot" aria-hidden="true"></span>{{ e }}</li>
                </ul>
              </div>
            </div>
            <div class="history-no-data" *ngIf="!s.observacoes && s.nivelDor == null && !s.exercicios?.length">
              <span class="text-xs text-gray">Evolu\xE7\xE3o n\xE3o registrada nesta sess\xE3o</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="modal-footer">
      <button class="btn btn-outline" (click)="close()" [disabled]="saving">Cancelar</button>
      <button *ngIf="currentTabHasSave" class="btn btn-primary"
        [class.btn-success]="saveSuccess" (click)="save()" [disabled]="saving">
        {{ saveSuccess ? '\u2713 Salvo!' : saveLabel }}
      </button>
      <button *ngIf="!currentTabHasSave" class="btn btn-outline" (click)="close()">Fechar</button>
    </div>

  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/components/medical-record-dialog/medical-record-dialog.component.scss */\n.tab-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.slider-row {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n.slider {\n  flex: 1;\n  -webkit-appearance: none;\n  height: 5px;\n  border-radius: 999px;\n  background: #e9d5ff;\n  outline: none;\n  border: none;\n  padding: 0;\n  width: auto;\n}\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--grad-brand);\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(124, 58, 237, 0.35);\n}\n.slider-value {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--gray-800);\n  min-width: 2.5rem;\n  text-align: right;\n}\n.evolucao-box {\n  padding: 1.25rem;\n  background: var(--gray-50);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.evolucao-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.evolucao-header strong {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.exercises-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.exercises-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.exercises-header strong {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.exercise-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.history-item {\n  padding: 1.25rem;\n}\n.history-item__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.history-item__header strong {\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: block;\n}\n.history-item__header span.text-xs {\n  margin-top: 0.2rem;\n}\n.history-item__body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.history-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n}\n.history-label {\n  font-weight: 700;\n  color: var(--gray-800);\n}\n.history-exercises {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  padding-left: 0.25rem;\n}\n.history-exercises li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--gray-700);\n}\n.dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--purple-600);\n  flex-shrink: 0;\n}\n.mr-meta {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  color: var(--gray-500);\n  margin-top: 0.25rem;\n}\n.alert-success {\n  padding: 0.6rem 1rem;\n  background: var(--green-100);\n  color: var(--green-700);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.alert-error {\n  padding: 0.6rem 1rem;\n  background: var(--red-100);\n  color: var(--red-600);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  margin-bottom: 0.5rem;\n}\n.loading-state {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  color: var(--gray-400);\n  font-size: 0.9rem;\n}\n.history-metrics {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.metric-badge {\n  background: var(--purple-50);\n  color: var(--purple-700);\n  border-radius: 999px;\n  padding: 0.2rem 0.65rem;\n  font-size: 0.78rem;\n}\n.history-no-data {\n  padding-top: 0.25rem;\n}\n.btn-success {\n  background: var(--green-600) !important;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25) !important;\n}\n.eval-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.eval-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.eval-section__title {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--purple-700);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--purple-100);\n}\n.conduta-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.conduta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 0.82rem;\n  color: var(--gray-700);\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.conduta-item:hover {\n  border-color: var(--purple-300);\n  background: var(--purple-50);\n}\n.conduta-item.selected {\n  border-color: var(--purple-600);\n  background: var(--purple-50);\n  color: var(--purple-700);\n  font-weight: 600;\n}\n.conduta-item input {\n  cursor: pointer;\n  accent-color: var(--purple-600);\n}\n.sem-sessao-msg {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--blue-100);\n  border-radius: var(--radius);\n  font-size: 0.9rem;\n}\n.sem-sessao-msg > span {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.sem-sessao-msg strong {\n  display: block;\n  color: var(--gray-900);\n  margin-bottom: 0.25rem;\n}\n.sem-sessao-msg p {\n  color: var(--gray-600);\n  line-height: 1.6;\n}\n.alert-info {\n  padding: 0.6rem 1rem;\n  background: var(--blue-100);\n  color: var(--blue-600);\n  border-radius: var(--radius-sm);\n  font-size: 0.85rem;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=medical-record-dialog.component.css.map */\n'] }]
  }], () => [{ type: ApiService }], { open: [{
    type: Input
  }], patientName: [{
    type: Input
  }], patientAge: [{
    type: Input
  }], condition: [{
    type: Input
  }], isInitialEvaluation: [{
    type: Input
  }], avaliacaoId: [{
    type: Input
  }], sessaoId: [{
    type: Input
  }], pacienteId: [{
    type: Input
  }], openChange: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MedicalRecordDialogComponent, { className: "MedicalRecordDialogComponent", filePath: "src/app/components/medical-record-dialog/medical-record-dialog.component.ts", lineNumber: 21 });
})();

// src/app/pages/fisioterapeuta-dashboard/fisioterapeuta-dashboard.component.ts
function FisioterapeutaDashboardComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statsAvaliacoesPendentes);
  }
}
function FisioterapeutaDashboardComponent_section_58_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Carregando...");
    \u0275\u0275elementEnd();
  }
}
function FisioterapeutaDashboardComponent_section_58_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 38);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_section_58_div_5_div_1_Template_button_click_9_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRecord(item_r3));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", item_r3.time, " \xB7 ", ctx_r0.typeLabel(item_r3.type), " \xB7 ", item_r3.duration, " min");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusBadge(item_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(item_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.status === "concluido" ? "Ver prontu\xE1rio" : "Abrir prontu\xE1rio", " ");
  }
}
function FisioterapeutaDashboardComponent_section_58_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, FisioterapeutaDashboardComponent_section_58_div_5_div_1_Template, 11, 7, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.appointments);
  }
}
function FisioterapeutaDashboardComponent_section_58_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma sess\xE3o agendada para hoje");
    \u0275\u0275elementEnd()();
  }
}
function FisioterapeutaDashboardComponent_section_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 26)(1, "div", 27)(2, "h2");
    \u0275\u0275text(3, "Agenda de Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FisioterapeutaDashboardComponent_section_58_span_4_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FisioterapeutaDashboardComponent_section_58_div_5_Template, 2, 1, "div", 29)(6, FisioterapeutaDashboardComponent_section_58_ng_template_6_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyAgenda_r4 = \u0275\u0275reference(7);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appointments.length > 0)("ngIfElse", emptyAgenda_r4);
  }
}
function FisioterapeutaDashboardComponent_section_59_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_section_59_div_9_Template_div_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPatient(p_r7));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 50)(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 52)(12, "div", 53)(13, "span", 51);
    \u0275\u0275text(14, "Progresso");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 54);
    \u0275\u0275element(16, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 56);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.condition !== "sem_avaliacao" ? p_r7.condition : "Aguardando avalia\xE7\xE3o");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.nextAppointment !== "\u2014" ? p_r7.nextAppointment : "Sem pr\xF3xima sess\xE3o");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r7.totalSessions, " sess\xE3o", p_r7.totalSessions !== 1 ? "\xF5es" : "");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", p_r7.progress + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r7.progress, "% conclu\xEDdo");
  }
}
function FisioterapeutaDashboardComponent_section_59_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhum paciente encontrado");
    \u0275\u0275elementEnd()();
  }
}
function FisioterapeutaDashboardComponent_section_59_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "button", 58);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_section_59_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pacientePage = ctx_r0.pacientePage - 1);
    });
    \u0275\u0275text(2, "\u2190 Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 58);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_section_59_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pacientePage = ctx_r0.pacientePage + 1);
    });
    \u0275\u0275text(6, "Pr\xF3xima \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pacientePage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.pacientePage + 1, " / ", ctx_r0.pacienteTotalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pacientePage >= ctx_r0.pacienteTotalPages - 1);
  }
}
function FisioterapeutaDashboardComponent_section_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "div", 27)(2, "h2");
    \u0275\u0275text(3, "Acompanhamento de Pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "span", 42);
    \u0275\u0275text(6, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function FisioterapeutaDashboardComponent_section_59_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FisioterapeutaDashboardComponent_section_59_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pacientePage = 0);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275template(9, FisioterapeutaDashboardComponent_section_59_div_9_Template, 19, 8, "div", 45)(10, FisioterapeutaDashboardComponent_section_59_div_10_Template, 5, 0, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FisioterapeutaDashboardComponent_section_59_div_11_Template, 7, 4, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pacientesPaged);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pacientesPaged.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pacienteTotalPages > 1);
  }
}
function FisioterapeutaDashboardComponent_section_60_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const av_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", av_r10.telefone);
  }
}
function FisioterapeutaDashboardComponent_section_60_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FisioterapeutaDashboardComponent_section_60_div_3_div_1_span_6_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 65);
    \u0275\u0275text(8, "Aguardando avalia\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 66);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_section_60_div_3_div_1_Template_button_click_9_listener() {
      const av_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.iniciarAvaliacao(av_r10));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const av_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(av_r10.nome ?? "Paciente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDataHora(av_r10.dataHora));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", av_r10.telefone);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.iniciandoAvaliacao === av_r10.idSessao);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.iniciandoAvaliacao === av_r10.idSessao ? "Iniciando..." : "\u25B6 Iniciar Avalia\xE7\xE3o", " ");
  }
}
function FisioterapeutaDashboardComponent_section_60_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, FisioterapeutaDashboardComponent_section_60_div_3_div_1_Template, 11, 5, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.avaliacoesPendentes);
  }
}
function FisioterapeutaDashboardComponent_section_60_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma avalia\xE7\xE3o pendente");
    \u0275\u0275elementEnd()();
  }
}
function FisioterapeutaDashboardComponent_section_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 26)(1, "h2", 59);
    \u0275\u0275text(2, "Avalia\xE7\xF5es Aguardando Atendimento");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FisioterapeutaDashboardComponent_section_60_div_3_Template, 2, 1, "div", 60)(4, FisioterapeutaDashboardComponent_section_60_ng_template_4_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyEval_r11 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.avaliacoesPendentes.length > 0)("ngIfElse", emptyEval_r11);
  }
}
function FisioterapeutaDashboardComponent_section_61_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "Carregando hist\xF3rico...");
    \u0275\u0275elementEnd()();
  }
}
function FisioterapeutaDashboardComponent_section_61_div_4_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r12.resumo);
  }
}
function FisioterapeutaDashboardComponent_section_61_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FisioterapeutaDashboardComponent_section_61_div_4_div_1_span_6_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 68);
    \u0275\u0275text(8, "Finalizada");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r12.paciente);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatData(h_r12.data));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", h_r12.resumo && h_r12.resumo !== "Sem resumo");
  }
}
function FisioterapeutaDashboardComponent_section_61_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, FisioterapeutaDashboardComponent_section_61_div_4_div_1_Template, 9, 3, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.avaliacoesHistorico);
  }
}
function FisioterapeutaDashboardComponent_section_61_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma avalia\xE7\xE3o conclu\xEDda ainda");
    \u0275\u0275elementEnd()();
  }
}
function FisioterapeutaDashboardComponent_section_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 26)(1, "h2", 59);
    \u0275\u0275text(2, "Avalia\xE7\xF5es Conclu\xEDdas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FisioterapeutaDashboardComponent_section_61_div_3_Template, 3, 0, "div", 46)(4, FisioterapeutaDashboardComponent_section_61_div_4_Template, 2, 1, "div", 67)(5, FisioterapeutaDashboardComponent_section_61_div_5_Template, 5, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingHistorico);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingHistorico && ctx_r0.avaliacoesHistorico.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingHistorico && ctx_r0.avaliacoesHistorico.length === 0);
  }
}
var _FisioterapeutaDashboardComponent = class _FisioterapeutaDashboardComponent {
  get pacienteTotalPages() {
    return Math.ceil(this.filteredPatients().length / this.pacientePageSize);
  }
  get pacientesPaged() {
    const s = this.pacientePage * this.pacientePageSize;
    return this.filteredPatients().slice(s, s + this.pacientePageSize);
  }
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.tab = "agenda";
    this.searchTerm = "";
    this.recordOpen = false;
    this.selectedPatientName = "";
    this.selectedPatientAge = 0;
    this.selectedCondition = "";
    this.isInitialEvaluation = false;
    this.selectedAvaliacaoId = "";
    this.selectedSessaoId = "";
    this.selectedPacienteId = "";
    this.loading = false;
    this.iniciandoAvaliacao = null;
    this.Math = Math;
    this.appointments = [];
    this.patients = [];
    this.avaliacoesPendentes = [];
    this.avaliacoesHistorico = [];
    this.loadingHistorico = false;
    this.pacientePage = 0;
    this.pacientePageSize = 10;
    this.statsConsultasHoje = 0;
    this.statsPacientesAtivos = 0;
    this.statsAvaliacoesPendentes = 0;
    this.statsTaxaRecuperacao = "\u2014";
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.api.getSessoes({ date: today }).subscribe({
      next: (sessoes) => {
        this.appointments = sessoes.map((s) => this.sessaoToAppointment(s));
        this.statsConsultasHoje = sessoes.length;
        this.loading = false;
      },
      error: () => {
        this.appointments = [];
        this.statsConsultasHoje = 0;
        this.loading = false;
      }
    });
    this.api.getPacientesAtivos().subscribe({
      next: (pacientes) => {
        this.patients = pacientes.map((p) => this.pacienteToPatient(p));
        this.statsPacientesAtivos = pacientes.length;
      },
      error: () => {
        this.patients = [];
        this.statsPacientesAtivos = 0;
      }
    });
    this.api.getAvaliacoesPendentes().subscribe({
      next: (avs) => {
        this.avaliacoesPendentes = avs;
        this.statsAvaliacoesPendentes = avs.length;
      },
      error: () => {
        this.statsAvaliacoesPendentes = 0;
      }
    });
    this.api.getEstatisticas().subscribe({
      next: (stats) => {
        if (typeof stats["compareceu"] === "number" && typeof stats["total"] === "number") {
          const taxa = stats["total"] > 0 ? Math.round(stats["compareceu"] / stats["total"] * 100) : 0;
          this.statsTaxaRecuperacao = taxa + "%";
        }
      },
      error: () => {
        this.statsTaxaRecuperacao = "\u2014";
      }
    });
  }
  iniciarAvaliacao(av) {
    this.iniciandoAvaliacao = av.idSessao;
    this.api.converterLeadParaPaciente(av.idSessao).subscribe({
      next: (result) => {
        this.api.iniciarAvaliacao(result.avaliacaoId).subscribe({
          next: () => {
            this.selectedPatientName = result.pacienteNome;
            this.selectedPatientAge = 0;
            this.selectedCondition = "";
            this.isInitialEvaluation = true;
            this.selectedAvaliacaoId = result.avaliacaoId;
            this.selectedSessaoId = av.idSessao;
            this.selectedPacienteId = result.pacienteId;
            this.iniciandoAvaliacao = null;
            this.recordOpen = true;
            this.avaliacoesPendentes = this.avaliacoesPendentes.filter((a) => a.idSessao !== av.idSessao);
            this.statsAvaliacoesPendentes = this.avaliacoesPendentes.length;
          },
          error: () => {
            this.iniciandoAvaliacao = null;
          }
        });
      },
      error: (err) => {
        const msg = err?.error?.mensagem ?? "";
        if (msg.includes("j\xE1 est\xE1 vinculada a um paciente") && av.idPaciente) {
          this.selectedPatientName = av.nome ?? "Paciente";
          this.selectedPatientAge = 0;
          this.selectedCondition = "";
          this.isInitialEvaluation = true;
          this.selectedAvaliacaoId = "";
          this.selectedSessaoId = av.idSessao;
          this.iniciandoAvaliacao = null;
          this.recordOpen = true;
        } else {
          this.iniciandoAvaliacao = null;
        }
      }
    });
  }
  formatDataHora(dataHora) {
    const d = new Date(dataHora);
    return d.toLocaleDateString("pt-BR") + " \xB7 " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
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
  pacienteToPatient(p) {
    return {
      id: p.idPaciente,
      name: p.nome,
      age: 0,
      condition: p.statusClinico ?? "\u2014",
      sessionsCompleted: 0,
      totalSessions: Number(p.totalSessoes),
      progress: 0,
      nextAppointment: p.proximaSessao ?? "\u2014"
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
  filteredPatients() {
    const s = this.searchTerm.toLowerCase();
    return this.patients.filter((p) => p.name.toLowerCase().includes(s) || p.condition.toLowerCase().includes(s));
  }
  openRecord(item) {
    const patient = this.patients.find((p) => p.name === item.patient);
    this.selectedPatientName = item.patient;
    this.selectedPatientAge = patient?.age ?? 0;
    this.selectedCondition = patient?.condition ?? "";
    this.isInitialEvaluation = item.type === "avaliacao";
    this.selectedAvaliacaoId = "";
    this.selectedSessaoId = item.id;
    this.selectedPacienteId = item.pacienteId ?? patient?.id ?? "";
    this.recordOpen = true;
  }
  openPatient(patient) {
    this.selectedPatientName = patient.name;
    this.selectedPatientAge = patient.age;
    this.selectedCondition = patient.condition;
    this.isInitialEvaluation = false;
    this.selectedAvaliacaoId = "";
    this.selectedSessaoId = "";
    this.selectedPacienteId = patient.id;
    this.recordOpen = true;
  }
  typeLabel(type) {
    const map = { avaliacao: "Avalia\xE7\xE3o", sessao: "Sess\xE3o", reavaliacao: "Reavalia\xE7\xE3o" };
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
  loadHistoricoAvaliacoes() {
    if (this.avaliacoesHistorico.length > 0)
      return;
    this.loadingHistorico = true;
    this.api.getAvaliacoesHistorico().subscribe({
      next: (h) => {
        this.avaliacoesHistorico = h;
        this.loadingHistorico = false;
      },
      error: () => {
        this.loadingHistorico = false;
      }
    });
  }
  formatData(iso) {
    if (!iso)
      return "\u2014";
    return new Date(iso).toLocaleDateString("pt-BR");
  }
  onRecordSaved() {
    this.avaliacoesHistorico = [];
    this.loadData();
  }
  logout() {
    void this.router.navigateByUrl("/");
  }
};
_FisioterapeutaDashboardComponent.\u0275fac = function FisioterapeutaDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FisioterapeutaDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
};
_FisioterapeutaDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FisioterapeutaDashboardComponent, selectors: [["app-fisioterapeuta-dashboard"]], decls: 63, vars: 25, consts: [["emptyAgenda", ""], ["emptyEval", ""], [1, "dash-layout"], [1, "dash-header"], [1, "dash-title-group"], [1, "brand"], [1, "brand-icon"], [1, "dash-title-info"], [1, "btn", "btn-ghost", "btn-sm", "logout-btn", 3, "click"], [1, "dash-body"], [1, "grid", "grid-4"], [1, "stat-card"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value", "text-purple"], [1, "stat-icon", 2, "background", "#f5f3ff", "color", "#7c3aed"], [1, "stat-value", "text-pink"], [1, "stat-icon", 2, "background", "#fce7f3", "color", "#db2777"], [1, "stat-value", "text-green"], [1, "stat-icon", 2, "background", "#dcfce7", "color", "#16a34a"], [1, "tab-group"], [1, "tab-btn", 3, "click"], ["class", "tab-badge", 4, "ngIf"], ["class", "card", 4, "ngIf"], [3, "openChange", "saved", "open", "patientName", "patientAge", "condition", "isInitialEvaluation", "avaliacaoId", "sessaoId", "pacienteId"], [1, "tab-badge"], [1, "card"], [1, "section-title-row"], ["class", "text-sm text-gray", 4, "ngIf"], ["class", "appointment-list", 4, "ngIf", "ngIfElse"], [1, "text-sm", "text-gray"], [1, "appointment-list"], ["class", "appointment-item", 4, "ngFor", "ngForOf"], [1, "appointment-item"], [1, "appt-info"], [1, "appt-meta"], [1, "appt-right"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "empty-state"], [1, "empty-icon"], [1, "search-wrap"], [1, "search-icon"], ["placeholder", "Buscar paciente ou condi\xE7\xE3o...", 1, "input", "search-input", 3, "ngModelChange", "ngModel"], [1, "patient-list"], ["class", "patient-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-row", 4, "ngIf"], [1, "patient-item", 3, "click"], [1, "patient-item__info"], [1, "patient-item__right"], [1, "text-xs", "text-gray"], [1, "patient-item__progress"], [1, "progress-bar-label"], [1, "progress-bar-wrap"], [1, "progress-bar-fill"], [1, "text-xs", "text-purple", "font-semibold"], [1, "pagination-row"], [1, "btn", "btn-outline", "btn-sm", 3, "click", "disabled"], [2, "margin-bottom", "1.25rem"], ["class", "eval-list", 4, "ngIf", "ngIfElse"], [1, "eval-list"], ["class", "eval-item card", 4, "ngFor", "ngForOf"], [1, "eval-item", "card"], [1, "eval-info"], [1, "badge", "badge-yellow"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "eval-list", 4, "ngIf"], [1, "badge", "badge-green"]], template: function FisioterapeutaDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div", 4)(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Vida em Movimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "h1");
    \u0275\u0275text(9, "Painel do Fisioterapeuta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Dra. Juliana Ferreira");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_Template_button_click_12_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(13, "\u2197 Sair");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "main", 9)(15, "section", 10)(16, "div", 11)(17, "div", 12)(18, "p", 13);
    \u0275\u0275text(19, "Consultas Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275text(23, "\u{1F4C5}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "p", 13);
    \u0275\u0275text(27, "Avalia\xE7\xF5es Pendentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 16);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 17);
    \u0275\u0275text(31, "\u{1F4C4}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "div", 12)(34, "p", 13);
    \u0275\u0275text(35, "Pacientes Ativos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 14);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 15);
    \u0275\u0275text(39, "\u{1F464}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 11)(41, "div", 12)(42, "p", 13);
    \u0275\u0275text(43, "Taxa Comparecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 18);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19);
    \u0275\u0275text(47, "\u{1F4C8}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 20)(49, "button", 21);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_Template_button_click_49_listener() {
      return ctx.tab = "agenda";
    });
    \u0275\u0275text(50, "Agenda de Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 21);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_Template_button_click_51_listener() {
      return ctx.tab = "pacientes";
    });
    \u0275\u0275text(52, "Meus Pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 21);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_Template_button_click_53_listener() {
      return ctx.tab = "avaliacoes";
    });
    \u0275\u0275text(54, " Avalia\xE7\xF5es ");
    \u0275\u0275template(55, FisioterapeutaDashboardComponent_span_55_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 21);
    \u0275\u0275listener("click", function FisioterapeutaDashboardComponent_Template_button_click_56_listener() {
      ctx.tab = "historico";
      return ctx.loadHistoricoAvaliacoes();
    });
    \u0275\u0275text(57, " Avalia\xE7\xF5es Conclu\xEDdas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, FisioterapeutaDashboardComponent_section_58_Template, 8, 3, "section", 23)(59, FisioterapeutaDashboardComponent_section_59_Template, 12, 4, "section", 23)(60, FisioterapeutaDashboardComponent_section_60_Template, 6, 2, "section", 23)(61, FisioterapeutaDashboardComponent_section_61_Template, 6, 3, "section", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "app-medical-record-dialog", 24);
    \u0275\u0275twoWayListener("openChange", function FisioterapeutaDashboardComponent_Template_app_medical_record_dialog_openChange_62_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.recordOpen, $event) || (ctx.recordOpen = $event);
      return $event;
    });
    \u0275\u0275listener("saved", function FisioterapeutaDashboardComponent_Template_app_medical_record_dialog_saved_62_listener() {
      return ctx.onRecordSaved();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx.statsConsultasHoje);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.statsAvaliacoesPendentes);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.statsPacientesAtivos);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.statsTaxaRecuperacao);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.tab === "agenda");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "pacientes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.tab === "avaliacoes");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.statsAvaliacoesPendentes > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.tab === "historico");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.tab === "agenda");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "pacientes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "avaliacoes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tab === "historico");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx.recordOpen);
    \u0275\u0275property("patientName", ctx.selectedPatientName)("patientAge", ctx.selectedPatientAge)("condition", ctx.selectedCondition)("isInitialEvaluation", ctx.isInitialEvaluation)("avaliacaoId", ctx.selectedAvaliacaoId)("sessaoId", ctx.selectedSessaoId)("pacienteId", ctx.selectedPacienteId);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MedicalRecordDialogComponent], styles: ["\n\n.pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--gray-100);\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--pink-600);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 0.35rem;\n}\n.eval-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.eval-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1rem 1.25rem;\n}\n.eval-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.eval-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--gray-100);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.dash-header[_ngcontent-%COMP%]   .dash-title-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.dash-header[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n}\n.section-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.section-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.2rem;\n  width: 220px;\n}\n.appointment-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.appointment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--gray-100);\n  border-radius: var(--radius);\n  transition: background 0.15s;\n}\n.appointment-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n.appointment-item[_ngcontent-%COMP%]   .appt-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.appointment-item[_ngcontent-%COMP%]   .appt-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.appointment-item[_ngcontent-%COMP%]   .appt-info[_ngcontent-%COMP%]   .appt-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.appointment-item[_ngcontent-%COMP%]   .appt-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.patient-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.patient-item[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.25rem;\n  border: 1px solid var(--gray-100);\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.patient-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--purple-200);\n  background: var(--purple-50);\n}\n.patient-item__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.patient-item__info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.patient-item__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.patient-item__right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.patient-item__progress[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.eval-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.eval-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n}\n.eval-item[_ngcontent-%COMP%]   .eval-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.eval-item[_ngcontent-%COMP%]   .eval-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=fisioterapeuta-dashboard.component.css.map */"] });
var FisioterapeutaDashboardComponent = _FisioterapeutaDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FisioterapeutaDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-fisioterapeuta-dashboard", standalone: true, imports: [CommonModule, FormsModule, MedicalRecordDialogComponent], template: `<div class="dash-layout">

  <header class="dash-header">
    <div class="dash-title-group">
      <div class="brand"><span class="brand-icon">\u2665</span>Vida em Movimento</div>
      <div class="dash-title-info">
        <h1>Painel do Fisioterapeuta</h1>
        <p>Dra. Juliana Ferreira</p>
      </div>
    </div>
    <button class="btn btn-ghost btn-sm logout-btn" (click)="logout()">\u2197 Sair</button>
  </header>

  <main class="dash-body">

    <!-- STATS -->
    <section class="grid grid-4">
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Consultas Hoje</p>
          <p class="stat-value text-purple">{{ statsConsultasHoje }}</p>
        </div>
        <div class="stat-icon" style="background:#f5f3ff;color:#7c3aed">\u{1F4C5}</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Avalia\xE7\xF5es Pendentes</p>
          <p class="stat-value text-pink">{{ statsAvaliacoesPendentes }}</p>
        </div>
        <div class="stat-icon" style="background:#fce7f3;color:#db2777">\u{1F4C4}</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Pacientes Ativos</p>
          <p class="stat-value text-purple">{{ statsPacientesAtivos }}</p>
        </div>
        <div class="stat-icon" style="background:#f5f3ff;color:#7c3aed">\u{1F464}</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <p class="stat-label">Taxa Comparecimento</p>
          <p class="stat-value text-green">{{ statsTaxaRecuperacao }}</p>
        </div>
        <div class="stat-icon" style="background:#dcfce7;color:#16a34a">\u{1F4C8}</div>
      </div>
    </section>

    <!-- TABS -->
    <div class="tab-group">
      <button class="tab-btn" [class.active]="tab === 'agenda'"    (click)="tab = 'agenda'">Agenda de Hoje</button>
      <button class="tab-btn" [class.active]="tab === 'pacientes'" (click)="tab = 'pacientes'">Meus Pacientes</button>
      <button class="tab-btn" [class.active]="tab === 'avaliacoes'"(click)="tab = 'avaliacoes'">
        Avalia\xE7\xF5es
        <span class="tab-badge" *ngIf="statsAvaliacoesPendentes > 0">{{ statsAvaliacoesPendentes }}</span>
      </button>
      <button class="tab-btn" [class.active]="tab === 'historico'" (click)="tab = 'historico'; loadHistoricoAvaliacoes()">
        Avalia\xE7\xF5es Conclu\xEDdas
      </button>
    </div>

    <!-- AGENDA -->
    <section *ngIf="tab === 'agenda'" class="card">
      <div class="section-title-row">
        <h2>Agenda de Hoje</h2>
        <span *ngIf="loading" class="text-sm text-gray">Carregando...</span>
      </div>
      <div class="appointment-list" *ngIf="appointments.length > 0; else emptyAgenda">
        <div class="appointment-item" *ngFor="let item of appointments">
          <div class="appt-info">
            <strong>{{ item.patient }}</strong>
            <span class="appt-meta">{{ item.time }} \xB7 {{ typeLabel(item.type) }} \xB7 {{ item.duration }} min</span>
          </div>
          <div class="appt-right">
            <span class="badge" [ngClass]="statusBadge(item.status)">{{ statusLabel(item.status) }}</span>
            <button class="btn btn-primary btn-sm" (click)="openRecord(item)">
              {{ item.status === 'concluido' ? 'Ver prontu\xE1rio' : 'Abrir prontu\xE1rio' }}
            </button>
          </div>
        </div>
      </div>
      <ng-template #emptyAgenda>
        <div class="empty-state">
          <span class="empty-icon">\u{1F4C5}</span>
          <p>Nenhuma sess\xE3o agendada para hoje</p>
        </div>
      </ng-template>
    </section>

    <!-- PATIENTS -->
    <section *ngIf="tab === 'pacientes'" class="card">
      <div class="section-title-row">
        <h2>Acompanhamento de Pacientes</h2>
        <div class="search-wrap">
          <span class="search-icon">\u{1F50D}</span>
          <input class="input search-input" [(ngModel)]="searchTerm"
            (ngModelChange)="pacientePage = 0" placeholder="Buscar paciente ou condi\xE7\xE3o..." />
        </div>
      </div>

      <div class="patient-list">
        <div class="patient-item" *ngFor="let p of pacientesPaged" (click)="openPatient(p)">
          <div class="patient-item__info">
            <strong>{{ p.name }}</strong>
            <span>{{ p.condition !== 'sem_avaliacao' ? p.condition : 'Aguardando avalia\xE7\xE3o' }}</span>
          </div>
          <div class="patient-item__right">
            <span class="text-xs text-gray">{{ p.nextAppointment !== '\u2014' ? p.nextAppointment : 'Sem pr\xF3xima sess\xE3o' }}</span>
            <span class="text-xs text-gray">{{ p.totalSessions }} sess\xE3o{{ p.totalSessions !== 1 ? '\xF5es' : '' }}</span>
          </div>
          <div class="patient-item__progress">
            <div class="progress-bar-label">
              <span class="text-xs text-gray">Progresso</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" [style.width]="p.progress + '%'"></div>
            </div>
            <span class="text-xs text-purple font-semibold">{{ p.progress }}% conclu\xEDdo</span>
          </div>
        </div>
        <div class="empty-state" *ngIf="pacientesPaged.length === 0">
          <span class="empty-icon">\u{1F50D}</span>
          <p>Nenhum paciente encontrado</p>
        </div>
      </div>

      <!-- Pagina\xE7\xE3o pacientes -->
      <div class="pagination-row" *ngIf="pacienteTotalPages > 1">
        <button class="btn btn-outline btn-sm" [disabled]="pacientePage === 0" (click)="pacientePage = pacientePage - 1">\u2190 Anterior</button>
        <span class="text-sm text-gray">{{ pacientePage + 1 }} / {{ pacienteTotalPages }}</span>
        <button class="btn btn-outline btn-sm" [disabled]="pacientePage >= pacienteTotalPages - 1" (click)="pacientePage = pacientePage + 1">Pr\xF3xima \u2192</button>
      </div>
    </section>

    <!-- AVALIA\xC7\xD5ES PENDENTES -->
    <section *ngIf="tab === 'avaliacoes'" class="card">
      <h2 style="margin-bottom:1.25rem">Avalia\xE7\xF5es Aguardando Atendimento</h2>

      <div class="eval-list" *ngIf="avaliacoesPendentes.length > 0; else emptyEval">
        <div class="eval-item card" *ngFor="let av of avaliacoesPendentes">
          <div class="eval-info">
            <strong>{{ av.nome ?? 'Paciente' }}</strong>
            <span class="text-sm text-gray">{{ formatDataHora(av.dataHora) }}</span>
            <span *ngIf="av.telefone" class="text-sm text-gray">\u{1F4DE} {{ av.telefone }}</span>
          </div>
          <span class="badge badge-yellow">Aguardando avalia\xE7\xE3o</span>
          <button
            class="btn btn-primary btn-sm"
            [disabled]="iniciandoAvaliacao === av.idSessao"
            (click)="iniciarAvaliacao(av)"
          >
            {{ iniciandoAvaliacao === av.idSessao ? 'Iniciando...' : '\u25B6 Iniciar Avalia\xE7\xE3o' }}
          </button>
        </div>
      </div>

      <ng-template #emptyEval>
        <div class="empty-state">
          <span class="empty-icon">\u2705</span>
          <p>Nenhuma avalia\xE7\xE3o pendente</p>
        </div>
      </ng-template>
    </section>

    <!-- HIST\xD3RICO DE AVALIA\xC7\xD5ES CONCLU\xCDDAS -->
    <section *ngIf="tab === 'historico'" class="card">
      <h2 style="margin-bottom:1.25rem">Avalia\xE7\xF5es Conclu\xEDdas</h2>

      <div *ngIf="loadingHistorico" class="empty-state">
        <p>Carregando hist\xF3rico...</p>
      </div>

      <div class="eval-list" *ngIf="!loadingHistorico && avaliacoesHistorico.length > 0">
        <div class="eval-item card" *ngFor="let h of avaliacoesHistorico">
          <div class="eval-info">
            <strong>{{ h.paciente }}</strong>
            <span class="text-sm text-gray">{{ formatData(h.data) }}</span>
            <span class="text-sm text-gray" *ngIf="h.resumo && h.resumo !== 'Sem resumo'">{{ h.resumo }}</span>
          </div>
          <span class="badge badge-green">Finalizada</span>
        </div>
      </div>

      <div class="empty-state" *ngIf="!loadingHistorico && avaliacoesHistorico.length === 0">
        <span class="empty-icon">\u{1F4CB}</span>
        <p>Nenhuma avalia\xE7\xE3o conclu\xEDda ainda</p>
      </div>
    </section>

  </main>
</div>

<app-medical-record-dialog
  [(open)]="recordOpen"
  [patientName]="selectedPatientName"
  [patientAge]="selectedPatientAge"
  [condition]="selectedCondition"
  [isInitialEvaluation]="isInitialEvaluation"
  [avaliacaoId]="selectedAvaliacaoId"
  [sessaoId]="selectedSessaoId"
  [pacienteId]="selectedPacienteId"
  (saved)="onRecordSaved()"
/>
`, styles: ["/* src/app/pages/fisioterapeuta-dashboard/fisioterapeuta-dashboard.component.scss */\n.pagination-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--gray-100);\n}\n.tab-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--pink-600);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 0.35rem;\n}\n.eval-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.eval-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1rem 1.25rem;\n}\n.eval-info {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.eval-info strong {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.dash-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--gray-100);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.dash-header .dash-title-group {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dash-header .dash-title-info h1 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.dash-header .dash-title-info p {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.dash-header .logout-btn {\n  color: var(--gray-500);\n}\n.section-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.section-title-row h2 {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.search-wrap {\n  position: relative;\n}\n.search-wrap .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.search-wrap .search-input {\n  padding-left: 2.2rem;\n  width: 220px;\n}\n.appointment-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.appointment-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--gray-100);\n  border-radius: var(--radius);\n  transition: background 0.15s;\n}\n.appointment-item:hover {\n  background: var(--gray-50);\n}\n.appointment-item .appt-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.appointment-item .appt-info strong {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.appointment-item .appt-info .appt-meta {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.appointment-item .appt-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.patient-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.patient-item {\n  padding: 1.1rem 1.25rem;\n  border: 1px solid var(--gray-100);\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.patient-item:hover {\n  border-color: var(--purple-200);\n  background: var(--purple-50);\n}\n.patient-item__info {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.patient-item__info strong {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.patient-item__info span {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.patient-item__right {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.patient-item__progress {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.eval-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.eval-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n}\n.eval-item .eval-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.eval-item .eval-info strong {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=fisioterapeuta-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FisioterapeutaDashboardComponent, { className: "FisioterapeutaDashboardComponent", filePath: "src/app/pages/fisioterapeuta-dashboard/fisioterapeuta-dashboard.component.ts", lineNumber: 16 });
})();
export {
  FisioterapeutaDashboardComponent
};
//# sourceMappingURL=chunk-5FF7WJBC.js.map
