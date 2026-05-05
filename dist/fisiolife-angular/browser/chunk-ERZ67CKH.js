import {
  ApiService
} from "./chunk-RSO275VZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-AU66TE26.js";
import {
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  Renderer2,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WAB2DSBB.js";

// src/app/components/contact-form-dialog/contact-form-dialog.component.ts
function ContactFormDialogComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Solicita\xE7\xE3o Enviada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Obrigado, ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". Entraremos em contato pelo n\xFAmero ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " em at\xE9 24h.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 7);
    \u0275\u0275listener("click", function ContactFormDialogComponent_div_0_div_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(14, "Fechar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.phone);
  }
}
function ContactFormDialogComponent_div_0_ng_container_3_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ContactFormDialogComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div")(3, "h2", 9);
    \u0275\u0275text(4, "Solicite uma Avalia\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "Preencha seus dados e retornaremos em at\xE9 24h.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ContactFormDialogComponent_div_0_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "label", 14);
    \u0275\u0275text(12, "Nome completo ");
    \u0275\u0275elementStart(13, "span", 15);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ContactFormDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 13)(18, "label", 18);
    \u0275\u0275text(19, "Telefone ");
    \u0275\u0275elementStart(20, "span", 15);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ContactFormDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "label", 20);
    \u0275\u0275text(25, "E-mail ");
    \u0275\u0275elementStart(26, "span", 15);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ContactFormDialogComponent_div_0_ng_container_3_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 13)(30, "label", 22);
    \u0275\u0275text(31, "Queixa principal ");
    \u0275\u0275elementStart(32, "span", 15);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ContactFormDialogComponent_div_0_ng_container_3_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.complaint, $event) || (ctx_r1.complaint = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, ContactFormDialogComponent_div_0_ng_container_3_p_35_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 25)(37, "button", 26);
    \u0275\u0275listener("click", function ContactFormDialogComponent_div_0_ng_container_3_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(38, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 27);
    \u0275\u0275listener("click", function ContactFormDialogComponent_div_0_ng_container_3_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.phone);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.complaint);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isValid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Enviando..." : "Enviar Solicita\xE7\xE3o", " ");
  }
}
function ContactFormDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ContactFormDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ContactFormDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, ContactFormDialogComponent_div_0_div_2_Template, 15, 2, "div", 3)(3, ContactFormDialogComponent_div_0_ng_container_3_Template, 41, 8, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.step === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 1);
  }
}
var _ContactFormDialogComponent = class _ContactFormDialogComponent {
  constructor(api) {
    this.api = api;
    this.open = false;
    this.openChange = new EventEmitter();
    this.step = 1;
    this.name = "";
    this.phone = "";
    this.email = "";
    this.complaint = "";
    this.loading = false;
    this.error = "";
  }
  get firstName() {
    return this.name.trim().split(" ")[0] || "paciente";
  }
  get isValid() {
    return !!(this.name.trim() && this.phone.trim() && this.email.trim() && this.complaint.trim());
  }
  submit() {
    if (!this.isValid || this.loading)
      return;
    this.loading = true;
    this.error = "";
    const parts = this.name.trim().split(" ");
    const nome = parts[0];
    const sobrenome = parts.slice(1).join(" ") || nome;
    this.api.criarLead({ nome, sobrenome, telefone: this.phone, email: this.email, observacao: this.complaint }).subscribe({
      next: () => {
        this.loading = false;
        this.step = 2;
      },
      error: () => {
        this.loading = false;
        this.error = "N\xE3o foi poss\xEDvel enviar. Tente novamente.";
      }
    });
  }
  close() {
    this.openChange.emit(false);
    setTimeout(() => {
      this.step = 1;
      this.name = "";
      this.phone = "";
      this.email = "";
      this.complaint = "";
      this.loading = false;
      this.error = "";
    }, 300);
  }
};
_ContactFormDialogComponent.\u0275fac = function ContactFormDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactFormDialogComponent)(\u0275\u0275directiveInject(ApiService));
};
_ContactFormDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactFormDialogComponent, selectors: [["app-contact-form-dialog"]], inputs: { open: "open" }, outputs: { openChange: "openChange" }, decls: 1, vars: 1, consts: [["class", "modal-backdrop", "role", "dialog", "aria-modal", "true", "aria-labelledby", "cf-title", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "cf-title", 1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], ["class", "success-state", 4, "ngIf"], [4, "ngIf"], [1, "success-state"], ["aria-hidden", "true", 1, "success-icon"], [1, "btn", "btn-primary", 2, "margin-top", "1rem", 3, "click"], [1, "modal-header"], ["id", "cf-title"], [1, "text-sm", "text-gray", 2, "margin-top", ".25rem"], ["aria-label", "Fechar", 1, "modal-close", 3, "click"], [1, "form-body"], [1, "field-group"], ["for", "cf-name"], ["aria-hidden", "true", 2, "color", "var(--red-600)"], ["id", "cf-name", "name", "name", "placeholder", "Seu nome completo", "autocomplete", "name", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-2", 2, "gap", ".875rem"], ["for", "cf-phone"], ["id", "cf-phone", "name", "phone", "placeholder", "(11) 99999-9999", "autocomplete", "tel", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "cf-email"], ["id", "cf-email", "name", "email", "type", "email", "placeholder", "seu@email.com", "autocomplete", "email", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "cf-complaint"], ["id", "cf-complaint", "name", "complaint", "rows", "4", "placeholder", "Descreva sua dor ou limita\xE7\xE3o...", 1, "input", 3, "ngModelChange", "ngModel"], ["role", "alert", "style", "color:var(--red-600);font-size:.85rem;margin:0", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["role", "alert", 2, "color", "var(--red-600)", "font-size", ".85rem", "margin", "0"]], template: function ContactFormDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContactFormDialogComponent_div_0_Template, 4, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.open);
  }
}, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n.form-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=contact-form-dialog.component.css.map */"] });
var ContactFormDialogComponent = _ContactFormDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactFormDialogComponent, [{
    type: Component,
    args: [{ selector: "app-contact-form-dialog", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-backdrop" *ngIf="open" (click)="close()" role="dialog" aria-modal="true" aria-labelledby="cf-title">
  <div class="modal" (click)="$event.stopPropagation()">

    <!-- SUCCESS STATE -->
    <div *ngIf="step === 2" class="success-state">
      <div class="success-icon" aria-hidden="true">\u2705</div>
      <h2>Solicita\xE7\xE3o Enviada!</h2>
      <p>Obrigado, <strong>{{ firstName }}</strong>. Entraremos em contato pelo n\xFAmero <strong>{{ phone }}</strong> em at\xE9 24h.</p>
      <button class="btn btn-primary" style="margin-top:1rem" (click)="close()">Fechar</button>
    </div>

    <!-- FORM STATE -->
    <ng-container *ngIf="step === 1">
      <div class="modal-header">
        <div>
          <h2 id="cf-title">Solicite uma Avalia\xE7\xE3o</h2>
          <p class="text-sm text-gray" style="margin-top:.25rem">Preencha seus dados e retornaremos em at\xE9 24h.</p>
        </div>
        <button class="modal-close" (click)="close()" aria-label="Fechar">\u2715</button>
      </div>

      <div class="form-body">
        <div class="field-group">
          <label for="cf-name">Nome completo <span aria-hidden="true" style="color:var(--red-600)">*</span></label>
          <input id="cf-name" class="input" name="name" [(ngModel)]="name" placeholder="Seu nome completo" autocomplete="name" required />
        </div>

        <div class="grid grid-2" style="gap:.875rem">
          <div class="field-group">
            <label for="cf-phone">Telefone <span aria-hidden="true" style="color:var(--red-600)">*</span></label>
            <input id="cf-phone" class="input" name="phone" [(ngModel)]="phone" placeholder="(11) 99999-9999" autocomplete="tel" required />
          </div>
          <div class="field-group">
            <label for="cf-email">E-mail <span aria-hidden="true" style="color:var(--red-600)">*</span></label>
            <input id="cf-email" class="input" name="email" type="email" [(ngModel)]="email" placeholder="seu@email.com" autocomplete="email" required />
          </div>
        </div>

        <div class="field-group">
          <label for="cf-complaint">Queixa principal <span aria-hidden="true" style="color:var(--red-600)">*</span></label>
          <textarea id="cf-complaint" class="input" name="complaint" [(ngModel)]="complaint" rows="4" placeholder="Descreva sua dor ou limita\xE7\xE3o..."></textarea>
        </div>

        <p *ngIf="error" role="alert" style="color:var(--red-600);font-size:.85rem;margin:0">{{ error }}</p>
      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" (click)="close()" [disabled]="loading">Cancelar</button>
        <button class="btn btn-primary" (click)="submit()" [disabled]="!isValid || loading">
          {{ loading ? 'Enviando...' : 'Enviar Solicita\xE7\xE3o' }}
        </button>
      </div>
    </ng-container>

  </div>
</div>
`, styles: ["/* src/app/components/contact-form-dialog/contact-form-dialog.component.scss */\n.form-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.success-state {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.success-state .success-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.success-state h2 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.success-state p {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=contact-form-dialog.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], { open: [{
    type: Input
  }], openChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactFormDialogComponent, { className: "ContactFormDialogComponent", filePath: "src/app/components/contact-form-dialog/contact-form-dialog.component.ts", lineNumber: 13 });
})();

// src/app/core/directives/reveal-on-scroll.directive.ts
var _RevealOnScrollDirective = class _RevealOnScrollDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.revealDelay = 0;
    this.revealThreshold = 0.15;
    this.revealRootMargin = "0px 0px -8% 0px";
    this.revealOnce = true;
    this.observer = null;
  }
  ngAfterViewInit() {
    const el = this.elementRef.nativeElement;
    this.renderer.addClass(el, "reveal-ready");
    this.renderer.setStyle(el, "transition-delay", `${this.revealDelay}ms`);
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.renderer.addClass(el, "is-revealed");
          if (this.revealOnce)
            this.observer?.unobserve(el);
        } else if (!this.revealOnce) {
          this.renderer.removeClass(el, "is-revealed");
        }
      }
    }, { threshold: this.revealThreshold, rootMargin: this.revealRootMargin });
    this.observer.observe(el);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
};
_RevealOnScrollDirective.\u0275fac = function RevealOnScrollDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RevealOnScrollDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_RevealOnScrollDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RevealOnScrollDirective, selectors: [["", "appRevealOnScroll", ""]], inputs: { revealDelay: "revealDelay", revealThreshold: "revealThreshold", revealRootMargin: "revealRootMargin", revealOnce: "revealOnce" } });
var RevealOnScrollDirective = _RevealOnScrollDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevealOnScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[appRevealOnScroll]",
      standalone: true
    }]
  }], () => [{ type: ElementRef }, { type: Renderer2 }], { revealDelay: [{
    type: Input
  }], revealThreshold: [{
    type: Input
  }], revealRootMargin: [{
    type: Input
  }], revealOnce: [{
    type: Input
  }] });
})();

// src/app/pages/landing-page/landing-page.component.ts
function LandingPageComponent_article_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 61)(1, "div", 62)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275property("revealDelay", i_r2 * 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "step-icon--" + step_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.description);
  }
}
function LandingPageComponent_li_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 63)(1, "span", 64);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275property("revealDelay", i_r4 * 80);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", point_r3, " ");
  }
}
function LandingPageComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275element(7, "div", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275styleProp("--bar-delay", i_r6 * 120 + "ms");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r5.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", s_r5.pct + "%");
  }
}
function LandingPageComponent_article_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 69)(1, "div", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const benefit_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275property("revealDelay", i_r8 * 80);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r7.description);
  }
}
var _LandingPageComponent = class _LandingPageComponent {
  constructor() {
    this.contactOpen = false;
    this.processSteps = [
      { title: "Agendamento", description: "Agende sua primeira consulta de forma r\xE1pida e f\xE1cil", emoji: "\u{1F4C5}", icon: "purple" },
      { title: "Avalia\xE7\xE3o Inicial", description: "Realizamos uma avalia\xE7\xE3o completa para entender suas necessidades", emoji: "\u{1F4CA}", icon: "pink" },
      { title: "Plano Personalizado", description: "Criamos um plano de tratamento \xFAnico para voc\xEA", emoji: "\u2764\uFE0F", icon: "violet" },
      { title: "Acompanhamento", description: "Monitoramento cont\xEDnuo do seu progresso e recupera\xE7\xE3o", emoji: "\u{1F465}", icon: "blue" }
    ];
    this.recoveryPoints = [
      "Redu\xE7\xE3o da dor",
      "Aumento da mobilidade",
      "Fortalecimento muscular",
      "Preven\xE7\xE3o de les\xF5es"
    ];
    this.recoveryStats = [
      { label: "Redu\xE7\xE3o de dor", pct: 85 },
      { label: "Ganho de mobilidade", pct: 90 },
      { label: "For\xE7a muscular", pct: 78 },
      { label: "Taxa de sucesso", pct: 94 }
    ];
    this.benefits = [
      { icon: "\u{1F3C6}", title: "Profissionais Qualificados", description: "Especialistas certificados com anos de experi\xEAncia cl\xEDnica" },
      { icon: "\u{1F4A1}", title: "Tecnologia Avan\xE7ada", description: "Equipamentos modernos para diagn\xF3stico e tratamento precisos" },
      { icon: "\u{1F3E5}", title: "Ambiente Acolhedor", description: "Espa\xE7o confort\xE1vel e moderno para a sua recupera\xE7\xE3o" },
      { icon: "\u{1F550}", title: "Hor\xE1rios Flex\xEDveis", description: "Agendamentos que se adaptam \xE0 sua rotina di\xE1ria" },
      { icon: "\u{1F4CB}", title: "Plano Personalizado", description: "Tratamento desenvolvido exclusivamente para as suas necessidades" },
      { icon: "\u{1F4C8}", title: "Resultados Comprovados", description: "94% dos nossos pacientes atingem seus objetivos de recupera\xE7\xE3o" }
    ];
  }
};
_LandingPageComponent.\u0275fac = function LandingPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingPageComponent)();
};
_LandingPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPageComponent, selectors: [["app-landing-page"]], decls: 119, vars: 5, consts: [[1, "page", "landing"], ["role", "banner", 1, "lp-header"], [1, "container", "lp-header__inner"], ["routerLink", "/", "aria-label", "Vida em Movimento \u2014 p\xE1gina inicial", 1, "brand"], ["aria-hidden", "true", 1, "brand-icon"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-sm"], ["aria-label", "Apresenta\xE7\xE3o", 1, "hero"], [1, "container", "hero__inner"], [1, "hero__text", "enter-up"], [1, "hero__title"], [1, "highlight"], [1, "highlight-dark"], [1, "hero__sub"], [1, "hero__actions"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], ["aria-hidden", "true"], ["routerLink", "/login", 1, "btn", "btn-outline", "btn-lg"], ["aria-hidden", "true", 1, "hero__visual", "enter-scale"], [1, "hero-stat"], [1, "hero-stat__value"], [1, "hero-stat__label"], [1, "hero-card"], [1, "hero-card__badge"], [1, "hero-card__patient"], [1, "hero-card__avatar"], [1, "hero-card__info"], [1, "hero-card__status-dot"], [1, "hero-card__time"], [1, "hero-card__progress"], [1, "hero-card__progress-label"], [1, "progress-bar-wrap", "colored"], [1, "progress-bar-fill", 2, "width", "60%"], [1, "hero-notif"], [1, "hero-notif__icon"], ["aria-labelledby", "process-heading", 1, "section", "section--white"], [1, "container"], ["appRevealOnScroll", "", 1, "section-heading"], ["id", "process-heading"], [1, "grid", "grid-4", "steps-grid"], ["class", "step-card card", "appRevealOnScroll", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["aria-labelledby", "recovery-heading", 1, "section", "section--soft"], ["id", "recovery-heading"], ["appRevealOnScroll", "", 1, "recovery-card", "card"], [1, "recovery-card__text"], [1, "recovery-list"], ["appRevealOnScroll", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "recovery-card__visual"], [1, "rec-stats"], ["class", "rec-stat", 3, "--bar-delay", 4, "ngFor", "ngForOf"], ["aria-labelledby", "benefits-heading", 1, "section", "section--white"], ["id", "benefits-heading"], [1, "grid", "grid-3", "benefits-grid"], ["class", "benefit-card card", "appRevealOnScroll", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appRevealOnScroll", "", "aria-labelledby", "cta-heading", 1, "cta-band"], [1, "container", "cta-band__inner"], ["id", "cta-heading"], [1, "btn", "cta-band__btn", 3, "click"], ["role", "contentinfo", 1, "lp-footer"], [1, "container", "lp-footer__inner"], ["routerLink", "/", "aria-label", "Vida em Movimento \u2014 p\xE1gina inicial", 1, "brand", "brand--white"], [3, "openChange", "open"], ["appRevealOnScroll", "", 1, "step-card", "card", 3, "revealDelay"], ["aria-hidden", "true", 1, "step-icon", 3, "ngClass"], ["appRevealOnScroll", "", 3, "revealDelay"], ["aria-hidden", "true", 1, "check-circle"], [1, "rec-stat"], [1, "rec-stat__header"], [1, "rec-bar"], [1, "rec-bar__fill"], ["appRevealOnScroll", "", 1, "benefit-card", "card", 3, "revealDelay"], ["aria-hidden", "true", 1, "benefit-icon"]], template: function LandingPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
    \u0275\u0275text(5, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Vida em Movimento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 5);
    \u0275\u0275text(8, "\xC1rea do Cliente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "section", 6)(10, "div", 7)(11, "div", 8)(12, "h1", 9);
    \u0275\u0275text(13, " Sua ");
    \u0275\u0275elementStart(14, "em", 10);
    \u0275\u0275text(15, "sa\xFAde");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " em");
    \u0275\u0275element(17, "br");
    \u0275\u0275elementStart(18, "span", 11);
    \u0275\u0275text(19, "movimento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 12);
    \u0275\u0275text(21, " Tratamentos de fisioterapia personalizados com tecnologia avan\xE7ada e profissionais especializados para sua recupera\xE7\xE3o completa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13)(23, "button", 14);
    \u0275\u0275listener("click", function LandingPageComponent_Template_button_click_23_listener() {
      return ctx.contactOpen = true;
    });
    \u0275\u0275text(24, " Agende sua Consulta ");
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "a", 16);
    \u0275\u0275text(28, "\xC1rea do Paciente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 17)(30, "div", 18)(31, "span", 19);
    \u0275\u0275text(32, "94%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 20);
    \u0275\u0275text(34, "recupera\xE7\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 21)(36, "span", 22);
    \u0275\u0275text(37, "Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 23)(39, "div", 24);
    \u0275\u0275text(40, "JS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 25)(42, "strong");
    \u0275\u0275text(43, "Jo\xE3o Santos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Sess\xE3o de Fisioterapia");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(46, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 27)(48, "span");
    \u0275\u0275text(49, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " 14:30 \xB7 45 min ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 28)(52, "div", 29)(53, "span");
    \u0275\u0275text(54, "Progresso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "6 / 10 sess\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 30);
    \u0275\u0275element(58, "div", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 32)(60, "span", 33);
    \u0275\u0275text(61, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "Sess\xE3o confirmada \u2014 Dra. Silva");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(64, "section", 34)(65, "div", 35)(66, "div", 36)(67, "h2", 37);
    \u0275\u0275text(68, "Como Funciona Nosso Processo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p");
    \u0275\u0275text(70, "Um caminho claro para sua recupera\xE7\xE3o completa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 38);
    \u0275\u0275template(72, LandingPageComponent_article_72_Template, 8, 5, "article", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "section", 40)(74, "div", 35)(75, "div", 36)(76, "h2", 41);
    \u0275\u0275text(77, "Como a Fisioterapia Ajuda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79, "Veja o processo de recupera\xE7\xE3o em a\xE7\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "article", 42)(81, "div", 43)(82, "h3");
    \u0275\u0275text(83, "Recupera\xE7\xE3o Progressiva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p");
    \u0275\u0275text(85, " Atrav\xE9s de exerc\xEDcios direcionados e t\xE9cnicas especializadas, sua mobilidade e for\xE7a s\xE3o restauradas gradualmente. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ul", 44);
    \u0275\u0275template(87, LandingPageComponent_li_87_Template, 4, 2, "li", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 46)(89, "div", 47);
    \u0275\u0275template(90, LandingPageComponent_div_90_Template, 8, 6, "div", 48);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(91, "section", 49)(92, "div", 35)(93, "div", 36)(94, "h2", 50);
    \u0275\u0275text(95, "Por Que Escolher Vida em Movimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "p");
    \u0275\u0275text(97, "Excel\xEAncia em cada detalhe do seu tratamento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 51);
    \u0275\u0275template(99, LandingPageComponent_article_99_Template, 7, 4, "article", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "section", 53)(101, "div", 54)(102, "h2", 55);
    \u0275\u0275text(103, "Pronto para Come\xE7ar sua Recupera\xE7\xE3o?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p");
    \u0275\u0275text(105, " Agende sua primeira consulta hoje e d\xEA o primeiro passo para uma vida sem dor e com mais mobilidade. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "button", 56);
    \u0275\u0275listener("click", function LandingPageComponent_Template_button_click_106_listener() {
      return ctx.contactOpen = true;
    });
    \u0275\u0275text(107, " Agendar Consulta ");
    \u0275\u0275elementStart(108, "span", 15);
    \u0275\u0275text(109, "\u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "footer", 57)(111, "div", 58)(112, "a", 59)(113, "span", 4);
    \u0275\u0275text(114, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, " Vida em Movimento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p");
    \u0275\u0275text(117, "\xA9 2026 Vida em Movimento. Todos os direitos reservados.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(118, "app-contact-form-dialog", 60);
    \u0275\u0275twoWayListener("openChange", function LandingPageComponent_Template_app_contact_form_dialog_openChange_118_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.contactOpen, $event) || (ctx.contactOpen = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(72);
    \u0275\u0275property("ngForOf", ctx.processSteps);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx.recoveryPoints);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.recoveryStats);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.benefits);
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("open", ctx.contactOpen);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, RouterLink, ContactFormDialogComponent, RevealOnScrollDirective], styles: ['\n\n.lp-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--gray-100);\n}\n.lp-header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 60px;\n}\n.hero[_ngcontent-%COMP%] {\n  background: #fafafa;\n  background-image:\n    radial-gradient(\n      ellipse 60% 50% at 70% 50%,\n      rgba(237, 233, 254, 0.45) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 40% 40% at 20% 80%,\n      rgba(252, 231, 243, 0.35) 0%,\n      transparent 60%);\n  padding: 5rem 0 4.5rem;\n  min-height: 520px;\n}\n.hero__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 3rem;\n}\n@media (max-width: 768px) {\n  .hero__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hero__text[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.hero__title[_ngcontent-%COMP%] {\n  font-family:\n    "DM Serif Display",\n    Georgia,\n    serif;\n  font-size: clamp(2.25rem, 4.5vw, 3.25rem);\n  font-weight: 400;\n  line-height: 1.1;\n  color: var(--gray-900);\n  margin-bottom: 1.25rem;\n}\n.hero__title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--purple-600);\n  font-style: italic;\n}\n.hero__title[_ngcontent-%COMP%]   .highlight-dark[_ngcontent-%COMP%] {\n  display: block;\n}\n.hero__title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.hero__sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--gray-500);\n  line-height: 1.75;\n  margin-bottom: 2rem;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.hero__visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 360px;\n}\n@media (max-width: 768px) {\n  .hero__visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  width: 264px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n  z-index: 2;\n}\n.hero-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-start;\n  background: var(--green-100);\n  color: var(--green-700);\n  border-radius: 999px;\n  padding: 0.2rem 0.65rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.hero-card__patient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.hero-card__avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--grad-brand);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.hero-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.hero-card__info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  margin-top: 0.1rem;\n}\n.hero-card__status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--green-600);\n  flex-shrink: 0;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.hero-card__time[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--gray-600);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.hero-card__progress[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.hero-card__progress-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.hero-stat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 8px;\n  background: var(--grad-brand);\n  border-radius: var(--radius);\n  padding: 0.75rem 1rem;\n  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);\n  text-align: center;\n  z-index: 3;\n}\n.hero-stat__value[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font-family: "DM Serif Display", serif;\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 1;\n}\n.hero-stat__label[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.65rem;\n  font-weight: 500;\n  margin-top: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.hero-notif[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  left: 0px;\n  background: #fff;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  padding: 0.55rem 0.875rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--gray-700);\n  white-space: nowrap;\n  z-index: 3;\n}\n.hero-notif__icon[_ngcontent-%COMP%] {\n  color: var(--green-600);\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section--white[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.section--soft[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.steps-grid[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.step-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.step-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow);\n}\n.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.6;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--purple-100);\n  display: grid;\n  place-items: center;\n  font-size: 1.3rem;\n  color: var(--purple-600);\n}\n.recovery-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: center;\n  padding: 2.25rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n@media (max-width: 640px) {\n  .recovery-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.recovery-card__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.recovery-card__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--gray-500);\n  line-height: 1.75;\n  margin-bottom: 1.25rem;\n}\n.recovery-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.recovery-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n}\n.check-circle[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid var(--purple-500);\n  display: grid;\n  place-items: center;\n  font-size: 0.7rem;\n  color: var(--purple-600);\n  flex-shrink: 0;\n  font-weight: 700;\n}\n.rec-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  width: 100%;\n}\n.rec-stat__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.45rem;\n}\n.rec-stat__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.rec-stat__header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--gray-800);\n  font-weight: 700;\n}\n.rec-bar[_ngcontent-%COMP%] {\n  height: 7px;\n  background: var(--gray-100);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.rec-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--grad-brand);\n  transform: scaleX(0);\n  transform-origin: left;\n  animation: _ngcontent-%COMP%_barGrow 0.9s cubic-bezier(0.4, 0, 0.2, 1) var(--bar-delay, 0ms) both;\n}\n@keyframes _ngcontent-%COMP%_barGrow {\n  from {\n    transform: scaleX(0);\n  }\n  to {\n    transform: scaleX(1);\n  }\n}\n.benefits-grid[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.6rem;\n  text-align: left;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow);\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.6;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: var(--purple-50);\n  display: grid;\n  place-items: center;\n}\n.cta-band[_ngcontent-%COMP%] {\n  background: var(--gray-900);\n  padding: 4.5rem 0;\n}\n.cta-band__inner[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.cta-band__inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "DM Serif Display",\n    Georgia,\n    serif;\n  font-size: 2rem;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 1rem;\n  line-height: 1.25;\n}\n.cta-band__inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.cta-band__btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #fff;\n  color: var(--gray-900);\n  padding: 0.8rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: var(--radius-sm);\n  transition: background 0.2s, color 0.2s;\n}\n.cta-band__btn[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #fff;\n}\n.lp-footer[_ngcontent-%COMP%] {\n  background: #0a0a0a;\n  padding: 2rem 0;\n}\n.lp-footer__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.lp-footer__inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.35);\n}\n.lp-footer[_ngcontent-%COMP%]   .brand--white[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.lp-footer[_ngcontent-%COMP%]   .brand--white[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n/*# sourceMappingURL=landing-page.component.css.map */'] });
var LandingPageComponent = _LandingPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPageComponent, [{
    type: Component,
    args: [{ selector: "app-landing-page", standalone: true, imports: [CommonModule, RouterLink, ContactFormDialogComponent, RevealOnScrollDirective], template: `<div class="page landing">

  <!-- HEADER -->
  <header class="lp-header" role="banner">
    <div class="container lp-header__inner">
      <a routerLink="/" class="brand" aria-label="Vida em Movimento \u2014 p\xE1gina inicial">
        <span class="brand-icon" aria-hidden="true">\u2665</span>
        Vida em Movimento
      </a>
      <a routerLink="/login" class="btn btn-primary btn-sm">\xC1rea do Cliente</a>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero" aria-label="Apresenta\xE7\xE3o">
    <div class="container hero__inner">

      <div class="hero__text enter-up">
        <h1 class="hero__title">
          Sua <em class="highlight">sa\xFAde</em> em<br />
          <span class="highlight-dark">movimento</span>
        </h1>
        <p class="hero__sub">
          Tratamentos de fisioterapia personalizados com tecnologia avan\xE7ada e
          profissionais especializados para sua recupera\xE7\xE3o completa.
        </p>
        <div class="hero__actions">
          <button class="btn btn-primary btn-lg" (click)="contactOpen = true">
            Agende sua Consulta <span aria-hidden="true">\u2192</span>
          </button>
          <a routerLink="/login" class="btn btn-outline btn-lg">\xC1rea do Paciente</a>
        </div>
      </div>

      <!-- Hero visual: floating appointment card -->
      <div class="hero__visual enter-scale" aria-hidden="true">

        <div class="hero-stat">
          <span class="hero-stat__value">94%</span>
          <span class="hero-stat__label">recupera\xE7\xE3o</span>
        </div>

        <div class="hero-card">
          <span class="hero-card__badge">Hoje</span>
          <div class="hero-card__patient">
            <div class="hero-card__avatar">JS</div>
            <div class="hero-card__info">
              <strong>Jo\xE3o Santos</strong>
              <span>Sess\xE3o de Fisioterapia</span>
            </div>
            <span class="hero-card__status-dot"></span>
          </div>
          <div class="hero-card__time">
            <span>\u23F0</span> 14:30 \xB7 45 min
          </div>
          <div class="hero-card__progress">
            <div class="hero-card__progress-label">
              <span>Progresso</span>
              <span>6 / 10 sess\xF5es</span>
            </div>
            <div class="progress-bar-wrap colored">
              <div class="progress-bar-fill" style="width: 60%"></div>
            </div>
          </div>
        </div>

        <div class="hero-notif">
          <span class="hero-notif__icon">\u2713</span>
          <span>Sess\xE3o confirmada \u2014 Dra. Silva</span>
        </div>

      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="section section--white" aria-labelledby="process-heading">
    <div class="container">
      <div class="section-heading" appRevealOnScroll>
        <h2 id="process-heading">Como Funciona Nosso Processo</h2>
        <p>Um caminho claro para sua recupera\xE7\xE3o completa</p>
      </div>
      <div class="grid grid-4 steps-grid">
        <article
          class="step-card card"
          *ngFor="let step of processSteps; let i = index"
          appRevealOnScroll
          [revealDelay]="i * 100"
        >
          <div class="step-icon" [ngClass]="'step-icon--' + step.icon" aria-hidden="true">
            <span>{{ step.emoji }}</span>
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- HOW IT HELPS -->
  <section class="section section--soft" aria-labelledby="recovery-heading">
    <div class="container">
      <div class="section-heading" appRevealOnScroll>
        <h2 id="recovery-heading">Como a Fisioterapia Ajuda</h2>
        <p>Veja o processo de recupera\xE7\xE3o em a\xE7\xE3o</p>
      </div>
      <article class="recovery-card card" appRevealOnScroll>
        <div class="recovery-card__text">
          <h3>Recupera\xE7\xE3o Progressiva</h3>
          <p>
            Atrav\xE9s de exerc\xEDcios direcionados e t\xE9cnicas especializadas, sua
            mobilidade e for\xE7a s\xE3o restauradas gradualmente.
          </p>
          <ul class="recovery-list">
            <li *ngFor="let point of recoveryPoints; let i = index" appRevealOnScroll [revealDelay]="i * 80">
              <span class="check-circle" aria-hidden="true">\u2713</span>
              {{ point }}
            </li>
          </ul>
        </div>
        <div class="recovery-card__visual" aria-hidden="true">
          <div class="rec-stats">
            <div class="rec-stat" *ngFor="let s of recoveryStats; let i = index" [style.--bar-delay]="(i * 120) + 'ms'">
              <div class="rec-stat__header">
                <span>{{ s.label }}</span>
                <strong>{{ s.pct }}%</strong>
              </div>
              <div class="rec-bar">
                <div class="rec-bar__fill" [style.width]="s.pct + '%'"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- WHY Vida em Movimento -->
  <section class="section section--white" aria-labelledby="benefits-heading">
    <div class="container">
      <div class="section-heading" appRevealOnScroll>
        <h2 id="benefits-heading">Por Que Escolher Vida em Movimento</h2>
        <p>Excel\xEAncia em cada detalhe do seu tratamento</p>
      </div>
      <div class="grid grid-3 benefits-grid">
        <article
          class="benefit-card card"
          *ngFor="let benefit of benefits; let i = index"
          appRevealOnScroll
          [revealDelay]="i * 80"
        >
          <div class="benefit-icon" aria-hidden="true">{{ benefit.icon }}</div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA BAND -->
  <section class="cta-band" appRevealOnScroll aria-labelledby="cta-heading">
    <div class="container cta-band__inner">
      <h2 id="cta-heading">Pronto para Come\xE7ar sua Recupera\xE7\xE3o?</h2>
      <p>
        Agende sua primeira consulta hoje e d\xEA o primeiro passo para uma vida
        sem dor e com mais mobilidade.
      </p>
      <button class="btn cta-band__btn" (click)="contactOpen = true">
        Agendar Consulta <span aria-hidden="true">\u2192</span>
      </button>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="lp-footer" role="contentinfo">
    <div class="container lp-footer__inner">
      <a routerLink="/" class="brand brand--white" aria-label="Vida em Movimento \u2014 p\xE1gina inicial">
        <span class="brand-icon" aria-hidden="true">\u2665</span>
        Vida em Movimento
      </a>
      <p>\xA9 2026 Vida em Movimento. Todos os direitos reservados.</p>
    </div>
  </footer>

</div>

<!-- CONTACT DIALOG -->
<app-contact-form-dialog [(open)]="contactOpen" />
`, styles: ['/* src/app/pages/landing-page/landing-page.component.scss */\n.lp-header {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--gray-100);\n}\n.lp-header__inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 60px;\n}\n.hero {\n  background: #fafafa;\n  background-image:\n    radial-gradient(\n      ellipse 60% 50% at 70% 50%,\n      rgba(237, 233, 254, 0.45) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 40% 40% at 20% 80%,\n      rgba(252, 231, 243, 0.35) 0%,\n      transparent 60%);\n  padding: 5rem 0 4.5rem;\n  min-height: 520px;\n}\n.hero__inner {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 3rem;\n}\n@media (max-width: 768px) {\n  .hero__inner {\n    grid-template-columns: 1fr;\n  }\n}\n.hero__text {\n  max-width: 540px;\n}\n.hero__title {\n  font-family:\n    "DM Serif Display",\n    Georgia,\n    serif;\n  font-size: clamp(2.25rem, 4.5vw, 3.25rem);\n  font-weight: 400;\n  line-height: 1.1;\n  color: var(--gray-900);\n  margin-bottom: 1.25rem;\n}\n.hero__title .highlight {\n  color: var(--purple-600);\n  font-style: italic;\n}\n.hero__title .highlight-dark {\n  display: block;\n}\n.hero__title em {\n  font-style: italic;\n}\n.hero__sub {\n  font-size: 1rem;\n  color: var(--gray-500);\n  line-height: 1.75;\n  margin-bottom: 2rem;\n}\n.hero__actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.hero__visual {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 360px;\n}\n@media (max-width: 768px) {\n  .hero__visual {\n    display: none;\n  }\n}\n.hero-card {\n  background: #fff;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  width: 264px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n  z-index: 2;\n}\n.hero-card__badge {\n  display: inline-flex;\n  align-self: flex-start;\n  background: var(--green-100);\n  color: var(--green-700);\n  border-radius: 999px;\n  padding: 0.2rem 0.65rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.hero-card__patient {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.hero-card__avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--grad-brand);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.hero-card__info {\n  flex: 1;\n  min-width: 0;\n}\n.hero-card__info strong {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-card__info span {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n  margin-top: 0.1rem;\n}\n.hero-card__status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--green-600);\n  flex-shrink: 0;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);\n}\n.hero-card__time {\n  font-size: 0.83rem;\n  color: var(--gray-600);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.hero-card__progress {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.hero-card__progress-label {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.hero-stat {\n  position: absolute;\n  top: 16px;\n  right: 8px;\n  background: var(--grad-brand);\n  border-radius: var(--radius);\n  padding: 0.75rem 1rem;\n  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);\n  text-align: center;\n  z-index: 3;\n}\n.hero-stat__value {\n  display: block;\n  color: #fff;\n  font-family: "DM Serif Display", serif;\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 1;\n}\n.hero-stat__label {\n  display: block;\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.65rem;\n  font-weight: 500;\n  margin-top: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.hero-notif {\n  position: absolute;\n  bottom: 24px;\n  left: 0px;\n  background: #fff;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  padding: 0.55rem 0.875rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--gray-700);\n  white-space: nowrap;\n  z-index: 3;\n}\n.hero-notif__icon {\n  color: var(--green-600);\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.section {\n  padding: 5rem 0;\n}\n.section--white {\n  background: #fff;\n}\n.section--soft {\n  background: #fafafa;\n}\n.steps-grid {\n  margin-top: 1rem;\n}\n.step-card {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.step-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow);\n}\n.step-card h3 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.step-card p {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.6;\n}\n.step-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--purple-100);\n  display: grid;\n  place-items: center;\n  font-size: 1.3rem;\n  color: var(--purple-600);\n}\n.recovery-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: center;\n  padding: 2.25rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n@media (max-width: 640px) {\n  .recovery-card {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.recovery-card__text h3 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.recovery-card__text p {\n  font-size: 0.9rem;\n  color: var(--gray-500);\n  line-height: 1.75;\n  margin-bottom: 1.25rem;\n}\n.recovery-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.recovery-list li {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n}\n.check-circle {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid var(--purple-500);\n  display: grid;\n  place-items: center;\n  font-size: 0.7rem;\n  color: var(--purple-600);\n  flex-shrink: 0;\n  font-weight: 700;\n}\n.rec-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  width: 100%;\n}\n.rec-stat__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.45rem;\n}\n.rec-stat__header span {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.rec-stat__header strong {\n  font-size: 0.85rem;\n  color: var(--gray-800);\n  font-weight: 700;\n}\n.rec-bar {\n  height: 7px;\n  background: var(--gray-100);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.rec-bar__fill {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--grad-brand);\n  transform: scaleX(0);\n  transform-origin: left;\n  animation: barGrow 0.9s cubic-bezier(0.4, 0, 0.2, 1) var(--bar-delay, 0ms) both;\n}\n@keyframes barGrow {\n  from {\n    transform: scaleX(0);\n  }\n  to {\n    transform: scaleX(1);\n  }\n}\n.benefits-grid {\n  margin-top: 1rem;\n}\n.benefit-card {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.6rem;\n  text-align: left;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.benefit-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow);\n}\n.benefit-card h3 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.benefit-card p {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.6;\n}\n.benefit-icon {\n  font-size: 1.5rem;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: var(--purple-50);\n  display: grid;\n  place-items: center;\n}\n.cta-band {\n  background: var(--gray-900);\n  padding: 4.5rem 0;\n}\n.cta-band__inner {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.cta-band__inner h2 {\n  font-family:\n    "DM Serif Display",\n    Georgia,\n    serif;\n  font-size: 2rem;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 1rem;\n  line-height: 1.25;\n}\n.cta-band__inner p {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.cta-band__btn {\n  background: #fff;\n  border: 2px solid #fff;\n  color: var(--gray-900);\n  padding: 0.8rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: var(--radius-sm);\n  transition: background 0.2s, color 0.2s;\n}\n.cta-band__btn:hover {\n  background: transparent;\n  color: #fff;\n}\n.lp-footer {\n  background: #0a0a0a;\n  padding: 2rem 0;\n}\n.lp-footer__inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.lp-footer__inner p {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.35);\n}\n.lp-footer .brand--white {\n  color: rgba(255, 255, 255, 0.9);\n}\n.lp-footer .brand--white .brand-icon {\n  opacity: 0.85;\n}\n/*# sourceMappingURL=landing-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPageComponent, { className: "LandingPageComponent", filePath: "src/app/pages/landing-page/landing-page.component.ts", lineNumber: 14 });
})();
export {
  LandingPageComponent
};
//# sourceMappingURL=chunk-ERZ67CKH.js.map
