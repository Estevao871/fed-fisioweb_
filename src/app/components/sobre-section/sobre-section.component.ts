import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

/** Seção "Sobre a fisioterapeuta" da landing: foto em arco + texto e checklist. */
@Component({
  selector: 'app-sobre-section',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './sobre-section.component.html',
  styleUrl: './sobre-section.component.scss',
})
export class SobreSectionComponent {
  readonly bullets = [
    'Avaliação clínica detalhada antes de iniciar qualquer tratamento',
    'Prontuário digital com acompanhamento de evolução sessão a sessão',
    'Comunicação direta entre paciente e equipe clínica',
  ];
}
