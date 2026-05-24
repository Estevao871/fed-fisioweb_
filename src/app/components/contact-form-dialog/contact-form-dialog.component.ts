import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { isValidEmail, isValidPhone } from '../../core/validators';

@Component({
  selector: 'app-contact-form-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form-dialog.component.html',
  styleUrl: './contact-form-dialog.component.scss',
})
export class ContactFormDialogComponent {
  @Input()  open = false;
  @Output() openChange = new EventEmitter<boolean>();

  step = 1;
  name = '';
  phone = '';
  email = '';
  complaint = '';
  loading = false;
  error = '';

  constructor(private readonly api: ApiService) {}

  get firstName(): string {
    return this.name.trim().split(' ')[0] || 'paciente';
  }

  get phoneValido(): boolean { return isValidPhone(this.phone); }
  get emailValido(): boolean { return isValidEmail(this.email); }

  get isValid(): boolean {
    return !!(
      this.name.trim() &&
      this.phone.trim() && this.phoneValido &&
      this.email.trim() && this.emailValido &&
      this.complaint.trim()
    );
  }

  submit(): void {
    if (!this.isValid || this.loading) return;

    this.loading = true;
    this.error = '';

    const parts = this.name.trim().split(' ');
    const nome = parts[0];
    const sobrenome = parts.slice(1).join(' ') || nome;

    this.api.criarLead({ nome, sobrenome, telefone: this.phone, email: this.email, observacao: this.complaint })
      .subscribe({
        next: () => {
          this.loading = false;
          this.step = 2;
        },
        error: () => {
          this.loading = false;
          this.error = 'Não foi possível enviar. Tente novamente.';
        },
      });
  }

  close(): void {
    this.openChange.emit(false);
    setTimeout(() => {
      this.step = 1;
      this.name = '';
      this.phone = '';
      this.email = '';
      this.complaint = '';
      this.loading = false;
      this.error = '';
    }, 300);
  }
}
