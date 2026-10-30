import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

/** Chamada final + dados de contato + rodapé da landing. */
@Component({
  selector: 'app-contato-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealOnScrollDirective],
  templateUrl: './contato-section.component.html',
  styleUrl: './contato-section.component.scss',
})
export class ContatoSectionComponent {
  /** "Agendar avaliação" — a landing abre a modal de contato (a clínica retorna). */
  @Output() agendar = new EventEmitter<void>();

  readonly ano = new Date().getFullYear();

  // 8 linhas decorativas no canto direito (viewBox 1200×500)
  readonly linhas = Array.from({ length: 8 }, (_, i) => ({
    d: `M 600 ${560 + i * 6} C 760 ${380 - i * 14}, 980 ${420 - i * 30}, 1260 ${80 + i * 22}`,
    o: 0.06 + i * 0.04,
  }));
}
