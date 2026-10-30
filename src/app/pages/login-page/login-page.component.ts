import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { UserType } from '../../core/models';
import { isValidEmail } from '../../core/validators';

type Modo = 'login' | 'esqueci';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  modo: Modo = 'login';

  selectedType: UserType | null = null;
  email    = '';
  password = '';
  lembrar  = false;

  showPassword = false;
  capsLock     = false;
  loading      = false;
  sucesso      = false; // login ok → botão verde por um instante antes de navegar

  submitted     = false;
  emailTouched  = false;
  authErro: { titulo: string; msg: string } | null = null;

  readonly profiles: Array<{ type: UserType; title: string; symbol: string }> = [
    { type: 'fisioterapeuta', title: 'Fisioterapeuta', symbol: 'stethoscope' },
    { type: 'recepcionista',  title: 'Recepção',       symbol: 'assignment'  },
    { type: 'paciente',       title: 'Paciente',       symbol: 'person'      },
  ];

  // 10 linhas decorativas do painel roxo (viewBox 600×800)
  readonly linhas = Array.from({ length: 10 }, (_, i) => ({
    d: `M -40 ${760 - i * 22} C 160 ${620 - i * 30}, 340 ${780 - i * 40}, 660 ${320 - i * 26}`,
    o: 0.06 + i * 0.035,
  }));

  constructor(
    private readonly router:      Router,
    private readonly route:       ActivatedRoute,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {
    // /login?perfil=paciente → já chega com o perfil marcado (links da landing)
    const perfil = this.route.snapshot.queryParamMap.get('perfil');
    if (this.profiles.some(p => p.type === perfil)) this.selectedType = perfil as UserType;
  }

  // --- Validação (mostra erro depois de tentar entrar ou ao sair do campo) ---
  get erroPerfil(): string { return this.submitted && !this.selectedType ? 'Selecione um perfil para continuar.' : ''; }

  get erroEmail(): string {
    if (!this.submitted && !this.emailTouched) return '';
    if (!this.email.trim()) return 'Informe seu e-mail.';
    return isValidEmail(this.email.trim()) ? '' : 'E-mail inválido. Use o formato nome@email.com.';
  }

  get erroSenha(): string { return this.submitted && !this.password ? 'Informe sua senha.' : ''; }

  get emailOk(): boolean { return this.emailTouched && !!this.email.trim() && isValidEmail(this.email.trim()); }

  get perfilLabel(): string {
    return this.profiles.find(p => p.type === this.selectedType)?.title ?? '';
  }

  get btnLabel(): string {
    if (this.sucesso) return 'Acesso liberado. Entrando…';
    if (this.loading) return 'Verificando…';
    return this.selectedType ? `Entrar como ${this.perfilLabel}` : 'Entrar';
  }

  selecionarPerfil(type: UserType): void {
    this.selectedType = type;
    this.authErro = null;
  }

  onSenhaKey(e: KeyboardEvent): void {
    this.capsLock = e.getModifierState?.('CapsLock') ?? false;
  }

  login(): void {
    if (this.loading || this.sucesso) return;
    this.submitted = true;
    this.authErro  = null;
    if (this.erroPerfil || this.erroEmail || this.erroSenha) return;

    this.loading = true;
    this.authService.login({ email: this.email.trim(), password: this.password }, this.lembrar).subscribe({
      next: () => {
        const dest = this.authService.dashboardFor(this.selectedType!);
        if (!dest) {
          this.authService.logout();
          this.loading  = false;
          this.authErro = {
            titulo: `Sem acesso como ${this.perfilLabel}.`,
            msg: 'Esta conta está cadastrada com outro perfil. Selecione o perfil correto acima.',
          };
          return;
        }
        this.loading = false;
        this.sucesso = true;
        setTimeout(() => void this.router.navigateByUrl(`/dashboard/${dest}`), 600);
      },
      error: (err: HttpErrorResponse) => {
        this.loading  = false;
        this.authErro = err.status === 429
          ? { titulo: 'Acesso bloqueado temporariamente.', msg: 'Foram muitas tentativas sem sucesso. Por segurança, aguarde alguns minutos e tente de novo.' }
          : err.status === 0
            ? { titulo: 'Sem conexão com o servidor.', msg: 'Verifique sua internet e tente novamente.' }
            : { titulo: 'E-mail ou senha incorretos.', msg: 'Confira os dados e tente novamente.' };
      },
    });
  }
}
