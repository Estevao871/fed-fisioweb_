import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserRole } from '../../core/models';

export interface RoleOption {
  value: UserRole;
  label: string;
  icon: string;
}

export const ALL_ROLE_OPTIONS: RoleOption[] = [
  { value: 'admin',          label: 'Admin',          icon: 'shield_person'   },
  { value: 'fisioterapeuta', label: 'Fisioterapeuta', icon: 'physical_therapy' },
  { value: 'recepcionista',  label: 'Recepcionista',  icon: 'support_agent'   },
  { value: 'paciente',       label: 'Paciente',       icon: 'person'          },
];

/** Lê `roles` da API, caindo para `role` em respostas antigas. */
export function rolesFromApi(u: { role: string; roles?: string[] }): UserRole[] {
  const roles = u.roles?.length ? u.roles : [u.role];
  return roles.map(r => r.toLowerCase() as UserRole);
}

/** Seleção múltipla de perfis — mantém sempre pelo menos um selecionado. */
@Component({
  selector: 'app-role-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-picker.component.html',
  styleUrl: './role-picker.component.scss',
})
export class RolePickerComponent {
  @Input()  options: RoleOption[] = ALL_ROLE_OPTIONS;
  @Input()  selected: UserRole[] = [];
  @Input()  disabled = false;
  @Output() selectedChange = new EventEmitter<UserRole[]>();

  isSelected(role: UserRole): boolean {
    return this.selected.includes(role);
  }

  toggle(role: UserRole): void {
    if (this.disabled) return;
    if (this.isSelected(role)) {
      if (this.selected.length === 1) return;
      this.selectedChange.emit(this.selected.filter(r => r !== role));
    } else {
      // Mantém a ordem das opções para que o perfil principal (roles[0]) seja previsível
      const next = [...this.selected, role];
      this.selectedChange.emit(this.options.map(o => o.value).filter(v => next.includes(v)));
    }
  }
}
