import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { UserType } from '../../core/models';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  selectedType: UserType | null = null;
  email    = '';
  password = '';
  errorMessage = '';
  loading      = false;

  showForgot = false;
  showPassword = false;
  showRegister = false;
  showRegPassword = false;
  showRegConfirm  = false;
  regName     = '';
  regEmail    = '';
  regPassword = '';
  regConfirm  = '';
  regError    = '';
  regSuccess  = false;
  regLoading  = false;

  profiles: Array<{ type: UserType; title: string; description: string; colorClass: string; symbol: string }> = [
    { type: 'fisioterapeuta', title: 'Fisioterapeuta',  description: 'Acesso ao painel de atendimentos e prontuários', colorClass: 'purple', symbol: 'stethoscope' },
    { type: 'recepcionista',  title: 'Recepcionista',   description: 'Gestão de agendamentos e primeira triagem',       colorClass: 'pink',   symbol: 'assignment'  },
    { type: 'paciente',       title: 'Paciente',         description: 'Acompanhe sua agenda e progresso',               colorClass: 'violet', symbol: 'person'      },
  ];

  constructor(
    private readonly router:      Router,
    private readonly authService: AuthService,
    private readonly api:         ApiService,
  ) {}

  get selectedLabel(): string {
    if (this.loading) return 'Entrando...';
    if (!this.selectedType) return 'Selecione um perfil';
    const found = this.profiles.find((p) => p.type === this.selectedType);
    return `Entrar como ${found?.title ?? this.selectedType}`;
  }

  register(): void {
    this.regError = '';
    if (!this.regName.trim() || !this.regEmail || !this.regPassword) {
      this.regError = 'Preencha todos os campos.';
      return;
    }
    if (this.regPassword !== this.regConfirm) {
      this.regError = 'As senhas não coincidem.';
      return;
    }
    this.regLoading = true;
    this.api.criarUsuario({ nome: this.regName.trim(), email: this.regEmail, senha: this.regPassword, role: 'paciente' }).subscribe({
      next: () => {
        this.regLoading = false;
        this.regSuccess = true;
        setTimeout(() => {
          this.email = this.regEmail;
          this.voltarParaLogin();
        }, 2000);
      },
      error: (err) => {
        this.regLoading = false;
        this.regError = (err?.error?.mensagem as string | undefined) ?? 'Não foi possível criar a conta.';
      },
    });
  }

  voltarParaLogin(): void {
    this.showRegister = false;
    this.regName = ''; this.regEmail = ''; this.regPassword = ''; this.regConfirm = '';
    this.regError = ''; this.regSuccess = false; this.regLoading = false;
  }

  login(): void {
    if (!this.selectedType || !this.email || !this.password) return;
    this.errorMessage = '';
    this.loading      = true;

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (result) => {
        const dest = result.role === 'admin' ? 'recepcionista' : result.role;
        void this.router.navigateByUrl(`/dashboard/${dest}`);
      },
      error: () => {
        this.errorMessage = 'E-mail ou senha inválidos.';
        this.loading      = false;
      },
    });
  }
}
