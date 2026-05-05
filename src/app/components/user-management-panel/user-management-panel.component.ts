import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { UserRecord } from '../../core/models';

@Component({
  selector: 'app-user-management-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, CreateUserDialogComponent],
  templateUrl: './user-management-panel.component.html',
  styleUrl: './user-management-panel.component.scss',
})
export class UserManagementPanelComponent {
  searchTerm = '';
  createOpen = false;
  users: UserRecord[] = [];

  filteredUsers(): UserRecord[] {
    const s = this.searchTerm.toLowerCase();
    return this.users.filter(
      (u) =>
        u.name.toLowerCase().includes(s) ||
        u.email.toLowerCase().includes(s) ||
        u.phone.includes(s),
    );
  }

  addUser(user: UserRecord): void {
    this.users = [user, ...this.users];
  }

  resetPassword(user: UserRecord): void {
    window.alert(`Link de redefinição de senha enviado para ${user.email}.`);
  }

  toggleStatus(user: UserRecord): void {
    this.users = this.users.map((u) =>
      u.id === user.id
        ? { ...u, status: u.status === 'ativo' ? 'inativo' : 'ativo' }
        : u,
    );
  }

  roleLabel(role: string): string {
    const map: Record<string, string> = {
      paciente: 'Paciente',
      fisioterapeuta: 'Fisioterapeuta',
      recepcionista: 'Recepcionista',
    };
    return map[role] ?? role;
  }

  roleBadge(role: string): string {
    const map: Record<string, string> = {
      paciente: 'badge-blue',
      fisioterapeuta: 'badge-purple',
      recepcionista: 'badge-pink',
    };
    return map[role] ?? 'badge-gray';
  }
}
