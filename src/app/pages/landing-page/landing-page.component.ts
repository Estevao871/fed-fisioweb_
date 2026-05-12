import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormDialogComponent } from '../../components/contact-form-dialog/contact-form-dialog.component';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormDialogComponent, RevealOnScrollDirective],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  contactOpen = false;

  processSteps = [
    { title: 'Agendamento',         description: 'Agende sua primeira consulta de forma rápida e fácil',             symbol: 'calendar_month', icon: 'purple' },
    { title: 'Avaliação Inicial',   description: 'Realizamos uma avaliação completa para entender suas necessidades', symbol: 'bar_chart',      icon: 'pink'   },
    { title: 'Plano Personalizado', description: 'Criamos um plano de tratamento único para você',                    symbol: 'favorite',       icon: 'violet' },
    { title: 'Acompanhamento',      description: 'Monitoramento contínuo do seu progresso e recuperação',             symbol: 'group',          icon: 'blue'   },
  ];

  diferenciais = [
    {
      icon: 'assignment_ind',
      title: 'Plano Individualizado',
      description: 'Cada paciente recebe um protocolo desenvolvido especificamente para o seu quadro clinico, sem formulas genericas.',
    },
    {
      icon: 'monitoring',
      title: 'Acompanhamento Continuo',
      description: 'O fisioterapeuta registra a evolucao em cada sessao — nivel de dor, mobilidade e exercicios — e ajusta o tratamento ao longo do processo.',
    },
    {
      icon: 'fact_check',
      title: 'Evolucao Documentada',
      description: 'Todo o historico de sessoes fica registrado e acessivel, oferecendo visibilidade completa sobre o progresso do tratamento.',
    },
  ];

  benefits = [
    { icon: 'emoji_events',   title: 'Profissionais Qualificados',  description: 'Especialistas certificados com anos de experiência clínica' },
    { icon: 'lightbulb',      title: 'Tecnologia Avançada',         description: 'Equipamentos modernos para diagnóstico e tratamento precisos' },
    { icon: 'local_hospital', title: 'Ambiente Acolhedor',          description: 'Espaço confortável e moderno para a sua recuperação' },
    { icon: 'schedule',       title: 'Horários Flexíveis',          description: 'Agendamentos que se adaptam à sua rotina diária' },
    { icon: 'assignment',     title: 'Plano Personalizado',         description: 'Tratamento desenvolvido exclusivamente para as suas necessidades' },
    { icon: 'support_agent',  title: 'Suporte Continuo',            description: 'Atendimento dedicado durante todo o tratamento, do primeiro contato ate a alta' },
  ];
}
