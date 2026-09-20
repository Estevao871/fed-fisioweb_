import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { UserType } from '../../core/models';
import { isValidEmail } from '../../core/validators';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent {
  @Input()  open = false;
  @Output() openChange = new EventEmitter<boolean>();

  selectedType: UserType | null = null;
  email    = '';
  password = '';
  errorMessage = '';
  loading      = false;
  showPassword = false;
  showForgot   = false;

  readonly profiles: Array<{ type: UserType; title: string; description: string; symbol: string }> = [
    { type: 'fisioterapeuta', title: 'Fisioterapeuta', description: 'Atendimentos e prontuários', symbol: 'stethoscope' },
    { type: 'recepcionista',  title: 'Recepcionista',  description: 'Agendamentos e triagem',     symbol: 'assignment'  },
    { type: 'paciente',       title: 'Paciente',        description: 'Agenda e progresso',         symbol: 'person'      },
  ];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  get selectedLabel(): string {
    if (this.loading) return 'Entrando...';
    if (!this.selectedType) return 'Selecione um perfil';
    const found = this.profiles.find(p => p.type === this.selectedType);
    return `Entrar como ${found?.title ?? this.selectedType}`;
  }

  login(): void {
    if (!this.selectedType || !this.email || !this.password) return;
    if (!isValidEmail(this.email)) { this.errorMessage = 'Digite um e-mail válido.'; return; }
    this.errorMessage = '';
    this.loading = true;
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (result) => {
        const dest = result.role === 'admin' ? 'recepcionista' : result.role;
        void this.router.navigateByUrl(`/dashboard/${dest}`);
        this.close();
      },
      error: () => {
        this.errorMessage = 'E-mail ou senha inválidos.';
        this.loading = false;
      },
    });
  }

  close(): void {
    this.openChange.emit(false);
    setTimeout(() => {
      this.email = ''; this.password = ''; this.errorMessage = '';
      this.loading = false; this.selectedType = null;
      this.showForgot = false; this.showPassword = false;
    }, 300);
  }
}
