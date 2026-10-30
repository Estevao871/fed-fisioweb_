import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

interface Especialidade {
  title: string;
  desc: string;
  img: string;
  imgPos: string;
  alt: string;
}

/** Seção "Especialidades" da landing: grade de 4 cards com ilustração. */
@Component({
  selector: 'app-especialidades-section',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './especialidades-section.component.html',
  styleUrl: './especialidades-section.component.scss',
})
export class EspecialidadesSectionComponent {
  /** Clique em "Agendar avaliação" — a landing abre a modal de contato. */
  @Output() agendar = new EventEmitter<string>();

  // Ordem importa: 01 card grande, 02 e 03 empilhados à direita, 04 largo embaixo
  readonly especialidades: Especialidade[] = [
    {
      title: 'Reabilitação Ortopédica',
      desc: 'Tratamento de lesões em músculos, articulações e ligamentos para recuperar força, mobilidade e confiança no movimento.',
      img: 'assets/especialidades/ortopedica.webp', imgPos: '60% 50%',
      alt: 'Ilustração de articulação do joelho',
    },
    {
      title: 'Fisioterapia Neurológica',
      desc: 'Acompanhamento voltado ao controle motor, ao equilíbrio e à independência nas atividades do dia a dia.',
      img: 'assets/especialidades/neurologica.webp', imgPos: '50% 50%',
      alt: 'Ilustração de cérebro com conexões neurais',
    },
    {
      title: 'Fisioterapia Respiratória',
      desc: 'Exercícios e técnicas para melhorar a função respiratória e o condicionamento.',
      img: 'assets/especialidades/respiratoria.webp', imgPos: '50% 50%',
      alt: 'Ilustração de pulmões',
    },
    {
      title: 'Reabilitação Funcional',
      desc: 'Foco nos movimentos da sua rotina — caminhar, levantar, carregar — para voltar às atividades com segurança.',
      img: 'assets/especialidades/funcional.webp', imgPos: '50% 55%',
      alt: 'Ilustração de uma linha de evolução ascendente',
    },
  ];
}
