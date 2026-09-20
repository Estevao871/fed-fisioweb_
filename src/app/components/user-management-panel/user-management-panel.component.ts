import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, AtualizarUsuarioDto } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { UserRecord, UserRole } from '../../core/models';
import { isValidEmail } from '../../core/validators';

@Component({
  selector: 'app-user-management-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, CreateUserDialogComponent],
  templateUrl: './user-management-panel.component.html',
  styleUrl: './user-management-panel.component.scss',
})
export class UserManagementPanelComponent implements OnInit {
  searchTerm = '';
  createOpen = false;
  users: UserRecord[] = [];

  resetOpen = false;
  resetUser: UserRecord | null = null;
  resetNovaSenha = '';
  resetConfirmar = '';
  resetError = '';
  resetSaving = false;
  resetSuccess = false;
  showResetSenha = false;
  showResetConfirmar = false;

  editOpen = false;
  editUser: UserRecord | null = null;
  editName = '';
  editEmail = '';
  editRole: UserRole = 'recepcionista';
  editError = '';
  editLoading = false;

  readonly roles: Array<{ value: UserRole; label: string }> = [
    { value: 'admin',          label: 'Admin'          },
    { value: 'fisioterapeuta', label: 'Fisioterapeuta' },
    { value: 'recepcionista',  label: 'Recepcionista'  },
    { value: 'paciente',       label: 'Paciente'       },
  ];

  get editEmailValido(): boolean { return isValidEmail(this.editEmail); }
  get editValido(): boolean { return !!(this.editName.trim() && this.editEmail && this.editEmailValido); }

  constructor(
    private readonly api: ApiService,
    private readonly auth: AuthService,
  ) {}

  get isAdmin(): boolean { return this.auth.getRole()?.toLowerCase() === 'admin'; }

  ngOnInit(): void {
    this.api.getUsuarios().subscribe({
      next: (lista) => {
        this.users = lista.map(u => ({
          id:        u.id,
          name:      u.nome,
          email:     u.email,
          phone:     '',
          role:      u.role as UserRole,
          status:    u.ativo ? 'ativo' : 'inativo',
          createdAt: new Date(u.criadoEm).toLocaleDateString('pt-BR'),
        }));
      },
    });
  }

  filteredUsers(): UserRecord[] {
    const s = this.searchTerm.toLowerCase();
    return this.users.filter(
      (u) =>
        u.name.toLowerCase().includes(s) ||
        u.email.toLowerCase().includes(s),
    );
  }

  addUser(user: UserRecord): void {
    this.users = [user, ...this.users];
  }

  resetPassword(user: UserRecord): void {
    this.resetUser = user;
    this.resetNovaSenha = '';
    this.resetConfirmar = '';
    this.resetError = '';
    this.resetSuccess = false;
    this.resetSaving = false;
    this.showResetSenha = false;
    this.showResetConfirmar = false;
    this.resetOpen = true;
  }

  confirmarReset(): void {
    if (!this.resetUser) return;
    this.resetError = '';
    if (this.resetNovaSenha.length < 8) {
      this.resetError = 'A senha deve ter pelo menos 8 caracteres.';
      return;
    }
    if (this.resetNovaSenha !== this.resetConfirmar) {
      this.resetError = 'As senhas não coincidem.';
      return;
    }
    this.resetSaving = true;
    this.api.resetarSenhaUsuario(this.resetUser.id, this.resetNovaSenha).subscribe({
      next: () => {
        this.resetSaving = false;
        this.resetSuccess = true;
        setTimeout(() => { this.resetOpen = false; }, 1500);
      },
      error: () => {
        this.resetSaving = false;
        this.resetError = 'Não foi possível redefinir a senha.';
      },
    });
  }

  fecharReset(): void {
    this.resetOpen = false;
  }

  openEdit(user: UserRecord): void {
    this.editUser    = user;
    this.editName    = user.name;
    this.editEmail   = user.email;
    this.editRole    = user.role;
    this.editError   = '';
    this.editLoading = false;
    this.editOpen    = true;
  }

  saveEdit(): void {
    if (!this.editUser || !this.editValido) return;
    this.editError   = '';
    this.editLoading = true;

    const dto: AtualizarUsuarioDto = {
      nome:  this.editName.trim(),
      email: this.editEmail,
      role:  this.editRole.toUpperCase(),
    };

    this.api.atualizarUsuario(this.editUser.id, dto).subscribe({
      next: (updated) => {
        this.users = this.users.map(u =>
          u.id === this.editUser!.id
            ? { ...u, name: updated.nome, email: updated.email, role: updated.role as UserRole }
            : u,
        );
        this.editLoading = false;
        this.editOpen    = false;
      },
      error: (err) => {
        this.editLoading = false;
        this.editError   = err?.error?.mensagem ?? 'Nao foi possivel salvar as alteracoes.';
      },
    });
  }

  toggleStatus(user: UserRecord): void {
    this.api.alternarStatusUsuario(user.id).subscribe({
      next: (updated) => {
        this.users = this.users.map(u =>
          u.id === user.id
            ? { ...u, status: updated.ativo ? 'ativo' : 'inativo' }
            : u,
        );
      },
    });
  }

  roleLabel(role: string): string {
    const map: Record<string, string> = {
      admin:         'Admin',
      paciente:      'Paciente',
      fisioterapeuta:'Fisioterapeuta',
      recepcionista: 'Recepcionista',
    };
    return map[role] ?? role;
  }

  roleBadge(role: string): string {
    const map: Record<string, string> = {
      admin:         'badge-red',
      paciente:      'badge-blue',
      fisioterapeuta:'badge-purple',
      recepcionista: 'badge-pink',
    };
    return map[role] ?? 'badge-gray';
  }
}
