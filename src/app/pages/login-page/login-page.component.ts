import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  email = '';
  password = '';

  profiles: Array<{ type: UserType; title: string; description: string; colorClass: string; symbol: string }> = [
    { type: 'fisioterapeuta', title: 'Fisioterapeuta',  description: 'Acesso ao painel de atendimentos e prontuários', colorClass: 'purple', symbol: 'stethoscope' },
    { type: 'recepcionista',  title: 'Recepcionista',   description: 'Gestão de agendamentos e primeira triagem',       colorClass: 'pink',   symbol: 'assignment'  },
    { type: 'paciente',       title: 'Paciente',         description: 'Acompanhe sua agenda e progresso',               colorClass: 'violet', symbol: 'person'      },
  ];

  constructor(private readonly router: Router) {}

  get selectedLabel(): string {
    if (!this.selectedType) return 'Selecione um perfil';
    const found = this.profiles.find((p) => p.type === this.selectedType);
    return `Entrar como ${found?.title ?? this.selectedType}`;
  }

  login(): void {
    if (!this.selectedType) return;
    void this.router.navigateByUrl(`/dashboard/${this.selectedType}`);
  }
}
