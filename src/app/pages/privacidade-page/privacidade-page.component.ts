import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Política de Privacidade (LGPD). Texto-modelo: os trechos marcados com <mark> precisam ser
 * preenchidos com os dados da clínica e o texto deve passar por revisão jurídica antes de publicar.
 */
@Component({
  selector: 'app-privacidade-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacidade-page.component.html',
  styleUrl: './privacidade-page.component.scss',
})
export class PrivacidadePageComponent {
  readonly atualizadoEm = '30 de outubro de 2026';

  /** Índice: rola até a seção (um href="#x" puro voltaria para "/#x" por causa do <base href="/">). */
  irPara(id: string, ev: Event): void {
    ev.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
