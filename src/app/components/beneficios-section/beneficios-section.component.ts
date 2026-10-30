import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

/** Seção "Como a fisioterapia ajuda" da landing: fundo roxo profundo, lista numerada. */
@Component({
  selector: 'app-beneficios-section',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './beneficios-section.component.html',
  styleUrl: './beneficios-section.component.scss',
})
export class BeneficiosSectionComponent {
  readonly beneficios = [
    { title: 'Plano individualizado',   desc: 'Cada paciente recebe um protocolo desenvolvido para o seu quadro clínico, sem fórmulas genéricas.' },
    { title: 'Acompanhamento contínuo', desc: 'A evolução é registrada em cada sessão e o tratamento é ajustado ao longo do processo.' },
    { title: 'Evolução documentada',    desc: 'Todo o histórico de sessões fica registrado e acessível, com visibilidade sobre o progresso.' },
    { title: 'Mobilidade e autonomia',  desc: 'Recuperar amplitude e conforto para os movimentos do dia a dia.' },
    { title: 'Qualidade de vida',       desc: 'Menos limitações para trabalhar, descansar e aproveitar o tempo livre.' },
  ];

  // 10 linhas decorativas em leque (viewBox 600×500), cada uma um pouco mais forte
  readonly linhas = Array.from({ length: 10 }, (_, i) => ({
    d: `M 0 ${480 - i * 18} C 160 ${380 - i * 24}, 320 ${520 - i * 30}, 600 ${200 - i * 12}`,
    o: 0.08 + i * 0.04,
  }));
}
