import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { isValidEmail, isValidPhone } from '../../core/validators';

type Campo = 'name' | 'phone' | 'email' | 'complaint';

/** Modal "Solicite uma Avaliação" — primeiro contato do site. Cria um lead; a recepção retorna. */
@Component({
  selector: 'app-contact-form-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form-dialog.component.html',
  styleUrl: './contact-form-dialog.component.scss',
})
export class ContactFormDialogComponent implements OnChanges {
  @Input()  open = false;
  /** Opcional: de onde veio o clique (ex.: "Reabilitação Ortopédica", "Joelho"). Vai junto na observação. */
  @Input()  assunto = '';
  @Output() openChange = new EventEmitter<boolean>();

  readonly maxQueixa = 500;

  step: 1 | 2 = 1;
  name = '';
  phone = '';
  email = '';
  complaint = '';
  loading = false;
  error = '';

  submitted = false;
  private touched = new Set<Campo>();

  @ViewChild('panel')     private panel?: ElementRef<HTMLElement>;
  @ViewChild('nameInput') private nameInput?: ElementRef<HTMLInputElement>;

  constructor(private readonly api: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Ao abrir: foco no primeiro campo (depois do *ngIf renderizar)
    if (changes['open']?.currentValue) setTimeout(() => this.nameInput?.nativeElement.focus(), 50);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void { if (this.open && !this.loading) this.close(); }

  get firstName(): string {
    return this.name.trim().split(/\s+/)[0] || 'paciente';
  }

  // --- Validação: mensagem aparece depois de sair do campo ou de tentar enviar ---
  private erroDe(campo: Campo): string {
    switch (campo) {
      case 'name': {
        const partes = this.name.trim().split(/\s+/).filter(Boolean);
        if (!partes.length) return 'Informe seu nome completo.';
        return partes.length < 2 ? 'Informe nome e sobrenome.' : '';
      }
      case 'phone':
        if (!this.phone.trim()) return 'Informe um telefone para contato.';
        return isValidPhone(this.phone) ? '' : 'Telefone incompleto. Use (11) 99999-9999.';
      case 'email':
        if (!this.email.trim()) return 'Informe seu e-mail.';
        return isValidEmail(this.email) ? '' : 'E-mail inválido. Use o formato nome@email.com.';
      case 'complaint':
        return this.complaint.trim() ? '' : 'Conte brevemente o que você está sentindo.';
    }
  }

  erro(campo: Campo): string {
    return this.submitted || this.touched.has(campo) ? this.erroDe(campo) : '';
  }

  ok(campo: Campo): boolean {
    return this.touched.has(campo) && !this.erroDe(campo);
  }

  tocar(campo: Campo): void {
    // Só marca como "tocado" se a pessoa digitou algo — sair de um campo vazio não grita erro
    const valor = { name: this.name, phone: this.phone, email: this.email, complaint: this.complaint }[campo];
    if (valor.trim()) this.touched.add(campo);
  }

  /** Máscara (11) 99999-9999 / (11) 9999-9999 enquanto digita. */
  onPhone(valor: string): void {
    const d = valor.replace(/\D/g, '').slice(0, 11);
    let fmt = d;
    if (d.length > 0)  fmt = `(${d.slice(0, 2)}`;
    if (d.length >= 3) fmt += `) ${d.slice(2, d.length > 10 ? 7 : 6)}`;
    if (d.length >= 7) fmt += `-${d.slice(d.length > 10 ? 7 : 6)}`;
    this.phone = fmt;
  }

  submit(): void {
    if (this.loading) return;
    this.submitted = true;
    this.error = '';

    const campos: Campo[] = ['name', 'phone', 'email', 'complaint'];
    const primeiroErro = campos.find(c => this.erroDe(c));
    if (primeiroErro) {
      this.shake();
      document.getElementById(`cf-${primeiroErro}`)?.focus();
      return;
    }

    this.loading = true;
    const [nome, ...resto] = this.name.trim().split(/\s+/);
    const queixa = this.complaint.trim();
    const observacao = this.assunto ? `Interesse: ${this.assunto}\n\n${queixa}` : queixa;

    this.api.criarLead({ nome, sobrenome: resto.join(' '), telefone: this.phone, email: this.email.trim(), observacao })
      .subscribe({
        next: () => {
          this.loading = false;
          this.step = 2;
        },
        error: () => {
          this.loading = false;
          this.error = 'Não foi possível enviar agora. Verifique sua conexão e tente novamente.';
        },
      });
  }

  onBackdrop(ev: MouseEvent): void {
    if (ev.target === ev.currentTarget && !this.loading) this.close();
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
      this.submitted = false;
      this.touched.clear();
    }, 300);
  }

  private shake(): void {
    this.panel?.nativeElement.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(7px)' },
       { transform: 'translateX(-4px)' }, { transform: 'translateX(0)' }],
      { duration: 380 },
    );
  }
}
