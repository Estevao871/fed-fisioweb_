import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, UsuarioApi } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { UserRecord, UserRole } from '../../core/models';
import { isValidEmail, isValidPhone } from '../../core/validators';

@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss',
})
export class CreateUserDialogComponent {
  @Input()  open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() created    = new EventEmitter<UserRecord>();

  name            = '';
  email           = '';
  phone           = '';
  role: UserRole;
  password        = '';
  confirmPassword = '';
  errorMessage    = '';
  loading         = false;
  showPassword    = false;
  showConfirm     = false;

  private readonly allRoles: Array<{ value: UserRole; label: string }> = [
    { value: 'admin',          label: 'Admin'          },
    { value: 'fisioterapeuta', label: 'Fisioterapeuta' },
    { value: 'recepcionista',  label: 'Recepcionista'  },
    { value: 'paciente',       label: 'Paciente'       },
  ];

  constructor(
    private readonly api: ApiService,
    private readonly auth: AuthService,
  ) {
    this.role = this.defaultRole();
  }

  get isAdmin(): boolean { return this.auth.getRole()?.toLowerCase() === 'admin'; }

  // Só o admin cria funcionários; a recepção cria apenas pacientes.
  get roles(): Array<{ value: UserRole; label: string }> {
    return this.isAdmin ? this.allRoles : this.allRoles.filter(r => r.value === 'paciente');
  }

  get emailValido(): boolean { return isValidEmail(this.email); }
  get phoneValido(): boolean { return !this.phone.trim() || isValidPhone(this.phone); }

  get isValid(): boolean {
    return !!(
      this.name.trim() &&
      this.email && this.emailValido &&
      this.phoneValido &&
      this.password && this.password.length >= 8 &&
      this.password === this.confirmPassword
    );
  }

  create(): void {
    if (!this.isValid) return;
    this.errorMessage = '';
    this.loading      = true;

    this.api.criarUsuario({
      nome:  this.name,
      email: this.email,
      senha: this.password,
      role:  this.role.toUpperCase(),
    }).subscribe({
      next: (u: UsuarioApi) => {
        const record: UserRecord = {
          id:        u.id,
          name:      u.nome,
          email:     u.email,
          phone:     this.phone,
          role:      u.role as UserRole,
          status:    u.ativo ? 'ativo' : 'inativo',
          createdAt: new Date(u.criadoEm).toLocaleDateString('pt-BR'),
        };
        this.created.emit(record);
        this.openChange.emit(false);
        this.reset();
      },
      error: (err) => {
        this.errorMessage = err?.error?.mensagem ?? err?.error?.message ?? 'Erro ao criar usuário.';
        this.loading      = false;
      },
    });
  }

  close(): void {
    this.openChange.emit(false);
    this.reset();
  }

  private defaultRole(): UserRole {
    return this.isAdmin ? 'recepcionista' : 'paciente';
  }

  private reset(): void {
    this.name            = '';
    this.email           = '';
    this.phone           = '';
    this.role            = this.defaultRole();
    this.password        = '';
    this.confirmPassword = '';
    this.errorMessage    = '';
    this.loading         = false;
  }
}
