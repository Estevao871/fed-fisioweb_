import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRecord } from '../../core/models';

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

  name = '';
  email = '';
  phone = '';
  role: 'paciente' | 'fisioterapeuta' | 'recepcionista' = 'paciente';
  password = '';
  confirmPassword = '';

  get isValid(): boolean {
    return !!(
      this.name &&
      this.email &&
      this.phone &&
      this.password &&
      this.password === this.confirmPassword
    );
  }

  create(): void {
    if (!this.isValid) return;

    const newUser: UserRecord = {
      id: crypto.randomUUID(),
      name: this.name,
      email: this.email,
      phone: this.phone,
      role: this.role,
      status: 'ativo',
      createdAt: new Date().toLocaleDateString('pt-BR'),
    };

    this.created.emit(newUser);
    this.openChange.emit(false);
    this.reset();
  }

  close(): void {
    this.openChange.emit(false);
    this.reset();
  }

  private reset(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.role = 'paciente';
    this.password = '';
    this.confirmPassword = '';
  }
}
