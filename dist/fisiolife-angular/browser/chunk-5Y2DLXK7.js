import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-AU66TE26.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  Router,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WAB2DSBB.js";

// src/app/pages/login-page/login-page.component.ts
function LoginPageComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LoginPageComponent_button_16_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedType = p_r2.type);
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275text(9, "\u2713");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedType === p_r2.type);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selectedType === p_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "profile-icon--" + p_r2.colorClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.emoji, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.description);
  }
}
var _LoginPageComponent = class _LoginPageComponent {
  constructor(router) {
    this.router = router;
    this.selectedType = null;
    this.email = "";
    this.password = "";
    this.profiles = [
      { type: "fisioterapeuta", title: "Fisioterapeuta", description: "Acesso ao painel de atendimentos e prontu\xE1rios", colorClass: "purple", emoji: "\u{1FA7A}" },
      { type: "recepcionista", title: "Recepcionista", description: "Gest\xE3o de agendamentos e primeira triagem", colorClass: "pink", emoji: "\u{1F4CB}" },
      { type: "paciente", title: "Paciente", description: "Acompanhe sua agenda e progresso", colorClass: "violet", emoji: "\u{1F464}" }
    ];
  }
  get selectedLabel() {
    if (!this.selectedType)
      return "Selecione um perfil";
    const found = this.profiles.find((p) => p.type === this.selectedType);
    return `Entrar como ${found?.title ?? this.selectedType}`;
  }
  login() {
    if (!this.selectedType)
      return;
    void this.router.navigateByUrl(`/dashboard/${this.selectedType}`);
  }
};
_LoginPageComponent.\u0275fac = function LoginPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPageComponent)(\u0275\u0275directiveInject(Router));
};
_LoginPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPageComponent, selectors: [["app-login-page"]], decls: 41, vars: 5, consts: [[1, "login-page"], [1, "login-container"], [1, "login-topbar"], ["routerLink", "/", 1, "brand"], [1, "brand-icon"], ["routerLink", "/", 1, "btn", "btn-ghost", "btn-sm"], [1, "login-grid"], [1, "profiles-section"], [1, "profiles-subtitle"], [1, "profiles-list"], ["class", "profile-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "login-form-card", "card"], [1, "field-group"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "seu@email.com", "autocomplete", "email", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "input", 3, "ngModelChange", "ngModel"], [1, "login-meta"], [1, "remember-label"], ["type", "checkbox"], ["href", "javascript:void(0)", 1, "forgot-link"], [1, "btn", "btn-primary", "login-btn", 3, "click", "disabled"], [1, "register-tip"], ["href", "javascript:void(0)"], [1, "profile-card", 3, "click"], ["aria-hidden", "true", 1, "profile-icon", 3, "ngClass"], [1, "profile-info"], ["aria-hidden", "true", 1, "profile-check"]], template: function LoginPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
    \u0275\u0275text(5, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Vida em Movimento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 5);
    \u0275\u0275text(8, "\u2190 Voltar ao Site");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "section", 7)(11, "h2");
    \u0275\u0275text(12, "Selecione seu Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 8);
    \u0275\u0275text(14, "Escolha o tipo de acesso para continuar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9);
    \u0275\u0275template(16, LoginPageComponent_button_16_Template, 10, 7, "button", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "section", 11)(18, "h2");
    \u0275\u0275text(19, "Entrar na Plataforma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
    \u0275\u0275text(22, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 12)(25, "label", 15);
    \u0275\u0275text(26, "Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17)(29, "label", 18);
    \u0275\u0275element(30, "input", 19);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Lembrar-me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a", 20);
    \u0275\u0275text(34, "Esqueci minha senha");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 21);
    \u0275\u0275listener("click", function LoginPageComponent_Template_button_click_35_listener() {
      return ctx.login();
    });
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 22);
    \u0275\u0275text(38, " Novo paciente? ");
    \u0275\u0275elementStart(39, "a", 23);
    \u0275\u0275text(40, "Cadastre-se aqui");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx.profiles);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx.selectedType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.selectedLabel, " ");
  }
}, dependencies: [CommonModule, NgClass, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--gray-50);\n  background-image:\n    radial-gradient(\n      ellipse 50% 60% at 80% 20%,\n      rgba(237, 233, 254, 0.5) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 40% 40% at 10% 90%,\n      rgba(252, 231, 243, 0.35) 0%,\n      transparent 50%);\n  display: grid;\n  place-items: center;\n  padding: 1.5rem 1rem;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1060px;\n}\n.login-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.login-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  gap: 2rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .login-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.profiles-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "DM Serif Display",\n    Georgia,\n    serif;\n  font-size: 1.75rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.25;\n}\n.profiles-section[_ngcontent-%COMP%]   .profiles-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  margin-bottom: 1.5rem;\n}\n.profiles-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.profile-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius);\n  background: #fff;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.18s;\n}\n.profile-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(124, 58, 237, 0.35);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.06);\n}\n.profile-card.active[_ngcontent-%COMP%] {\n  border-color: var(--purple-600);\n  background: var(--purple-50);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);\n}\n.profile-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--purple-600);\n  outline-offset: 2px;\n}\n.profile-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.profile-icon--purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--purple-600),\n      #a855f7);\n}\n.profile-icon--pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--pink-600),\n      #f43f5e);\n}\n.profile-icon--violet[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      var(--purple-600));\n}\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.profile-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.profile-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.profile-check[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--purple-600);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.profile-card.active[_ngcontent-%COMP%]   .profile-check[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.login-form-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  box-shadow: var(--shadow);\n}\n.login-form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.1rem;\n  color: var(--gray-900);\n}\n.login-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -0.1rem;\n}\n.remember-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  color: var(--gray-600);\n  cursor: pointer;\n}\n.remember-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--purple-600);\n  width: 15px;\n  height: 15px;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--purple-600);\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forgot-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--purple-600);\n  border-radius: 2px;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 0.8rem;\n  font-size: 0.95rem;\n  margin-top: 0.1rem;\n}\n.register-tip[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  padding-top: 0.25rem;\n}\n.register-tip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--purple-600);\n  font-weight: 600;\n}\n.register-tip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.register-tip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--purple-600);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=login-page.component.css.map */'] });
var LoginPageComponent = _LoginPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPageComponent, [{
    type: Component,
    args: [{ selector: "app-login-page", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="login-page">
  <div class="login-container">

    <!-- TOP BAR -->
    <div class="login-topbar">
      <a routerLink="/" class="brand">
        <span class="brand-icon">\u2665</span>
        Vida em Movimento
      </a>
      <a routerLink="/" class="btn btn-ghost btn-sm">\u2190 Voltar ao Site</a>
    </div>

    <!-- GRID -->
    <div class="login-grid">

      <!-- LEFT: Profile Select -->
      <section class="profiles-section">
        <h2>Selecione seu Perfil</h2>
        <p class="profiles-subtitle">Escolha o tipo de acesso para continuar</p>

        <div class="profiles-list">
          <button
            class="profile-card"
            *ngFor="let p of profiles"
            [class.active]="selectedType === p.type"
            (click)="selectedType = p.type"
            [attr.aria-pressed]="selectedType === p.type"
          >
            <div class="profile-icon" [ngClass]="'profile-icon--' + p.colorClass" aria-hidden="true">
              {{ p.emoji }}
            </div>
            <div class="profile-info">
              <strong>{{ p.title }}</strong>
              <small>{{ p.description }}</small>
            </div>
            <span class="profile-check" aria-hidden="true">\u2713</span>
          </button>
        </div>
      </section>

      <!-- RIGHT: Login Form -->
      <section class="login-form-card card">
        <h2>Entrar na Plataforma</h2>

        <div class="field-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            class="input"
            type="email"
            name="email"
            [(ngModel)]="email"
            placeholder="seu@email.com"
            autocomplete="email"
          />
        </div>

        <div class="field-group">
          <label for="password">Senha</label>
          <input
            id="password"
            class="input"
            type="password"
            name="password"
            [(ngModel)]="password"
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            autocomplete="current-password"
          />
        </div>

        <div class="login-meta">
          <label class="remember-label">
            <input type="checkbox" />
            <span>Lembrar-me</span>
          </label>
          <a href="javascript:void(0)" class="forgot-link">Esqueci minha senha</a>
        </div>

        <button
          class="btn btn-primary login-btn"
          [disabled]="!selectedType"
          (click)="login()"
        >
          {{ selectedLabel }}
        </button>

        <div class="register-tip">
          Novo paciente?
          <a href="javascript:void(0)">Cadastre-se aqui</a>
        </div>
      </section>

    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/login-page/login-page.component.scss */\n.login-page {\n  min-height: 100vh;\n  background: var(--gray-50);\n  background-image:\n    radial-gradient(\n      ellipse 50% 60% at 80% 20%,\n      rgba(237, 233, 254, 0.5) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 40% 40% at 10% 90%,\n      rgba(252, 231, 243, 0.35) 0%,\n      transparent 50%);\n  display: grid;\n  place-items: center;\n  padding: 1.5rem 1rem;\n}\n.login-container {\n  width: 100%;\n  max-width: 1060px;\n}\n.login-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.login-grid {\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  gap: 2rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .login-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.profiles-section h2 {\n  font-family:\n    "DM Serif Display",\n    Georgia,\n    serif;\n  font-size: 1.75rem;\n  font-weight: 400;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n  line-height: 1.25;\n}\n.profiles-section .profiles-subtitle {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  margin-bottom: 1.5rem;\n}\n.profiles-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.profile-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius);\n  background: #fff;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.18s;\n}\n.profile-card:hover {\n  border-color: rgba(124, 58, 237, 0.35);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.06);\n}\n.profile-card.active {\n  border-color: var(--purple-600);\n  background: var(--purple-50);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);\n}\n.profile-card:focus-visible {\n  outline: 2px solid var(--purple-600);\n  outline-offset: 2px;\n}\n.profile-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.profile-icon--purple {\n  background:\n    linear-gradient(\n      135deg,\n      var(--purple-600),\n      #a855f7);\n}\n.profile-icon--pink {\n  background:\n    linear-gradient(\n      135deg,\n      var(--pink-600),\n      #f43f5e);\n}\n.profile-icon--violet {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      var(--purple-600));\n}\n.profile-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.profile-info strong {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.profile-info small {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n.profile-check {\n  margin-left: auto;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--purple-600);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.profile-card.active .profile-check {\n  opacity: 1;\n}\n.login-form-card {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  box-shadow: var(--shadow);\n}\n.login-form-card h2 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.1rem;\n  color: var(--gray-900);\n}\n.login-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -0.1rem;\n}\n.remember-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  color: var(--gray-600);\n  cursor: pointer;\n}\n.remember-label input {\n  cursor: pointer;\n  accent-color: var(--purple-600);\n  width: 15px;\n  height: 15px;\n}\n.forgot-link {\n  font-size: 0.85rem;\n  color: var(--purple-600);\n  font-weight: 500;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.forgot-link:focus-visible {\n  outline: 2px solid var(--purple-600);\n  border-radius: 2px;\n}\n.login-btn {\n  width: 100%;\n  justify-content: center;\n  padding: 0.8rem;\n  font-size: 0.95rem;\n  margin-top: 0.1rem;\n}\n.register-tip {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  padding-top: 0.25rem;\n}\n.register-tip a {\n  color: var(--purple-600);\n  font-weight: 600;\n}\n.register-tip a:hover {\n  text-decoration: underline;\n}\n.register-tip a:focus-visible {\n  outline: 2px solid var(--purple-600);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=login-page.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPageComponent, { className: "LoginPageComponent", filePath: "src/app/pages/login-page/login-page.component.ts", lineNumber: 14 });
})();
export {
  LoginPageComponent
};
//# sourceMappingURL=chunk-5Y2DLXK7.js.map
