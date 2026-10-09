import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { UserType } from '../../core/models';
import { isValidEmail } from '../../core/validators';

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

  profiles: Array<{ type: UserType; title: string; description: string; colorClass: string; symbol: string }> = [
    { type: 'fisioterapeuta', title: 'Fisioterapeuta',  description: 'Acesso ao painel de atendimentos e prontuários', colorClass: 'purple', symbol: 'stethoscope' },
    { type: 'recepcionista',  title: 'Recepcionista',   description: 'Gestão de agendamentos e primeira triagem',       colorClass: 'pink',   symbol: 'assignment'  },
    { type: 'paciente',       title: 'Paciente',         description: 'Acompanhe sua agenda e progresso',               colorClass: 'violet', symbol: 'person'      },
  ];

  constructor(
    private readonly router:      Router,
    private readonly authService: AuthService,
  ) {}

  get selectedLabel(): string {
    if (this.loading) return 'Entrando...';
    if (!this.selectedType) return 'Selecione um perfil';
    const found = this.profiles.find((p) => p.type === this.selectedType);
    return `Entrar como ${found?.title ?? this.selectedType}`;
  }

  login(): void {
    if (!this.selectedType || !this.email || !this.password) return;
    if (!isValidEmail(this.email)) {
      this.errorMessage = 'Digite um e-mail válido.';
      return;
    }
    this.errorMessage = '';
    this.loading      = true;

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        const dest = this.authService.dashboardFor(this.selectedType!);
        if (!dest) {
          this.authService.logout();
          const found = this.profiles.find(p => p.type === this.selectedType);
          this.errorMessage = `Seu usuário não tem acesso ao perfil ${found?.title ?? this.selectedType}.`;
          this.loading      = false;
          return;
        }
        void this.router.navigateByUrl(`/dashboard/${dest}`);
      },
      error: () => {
        this.errorMessage = 'E-mail ou senha inválidos.';
        this.loading      = false;
      },
    });
  }
}
