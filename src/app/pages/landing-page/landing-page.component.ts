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

  recoveryPoints = [
    'Redução da dor',
    'Aumento da mobilidade',
    'Fortalecimento muscular',
    'Prevenção de lesões',
  ];

  recoveryStats = [
    { label: 'Redução de dor',      pct: 85 },
    { label: 'Ganho de mobilidade', pct: 90 },
    { label: 'Força muscular',      pct: 78 },
    { label: 'Taxa de sucesso',     pct: 94 },
  ];

  benefits = [
    { icon: 'emoji_events',   title: 'Profissionais Qualificados',  description: 'Especialistas certificados com anos de experiência clínica' },
    { icon: 'lightbulb',      title: 'Tecnologia Avançada',         description: 'Equipamentos modernos para diagnóstico e tratamento precisos' },
    { icon: 'local_hospital', title: 'Ambiente Acolhedor',          description: 'Espaço confortável e moderno para a sua recuperação' },
    { icon: 'schedule',       title: 'Horários Flexíveis',          description: 'Agendamentos que se adaptam à sua rotina diária' },
    { icon: 'assignment',     title: 'Plano Personalizado',         description: 'Tratamento desenvolvido exclusivamente para as suas necessidades' },
    { icon: 'trending_up',    title: 'Resultados Comprovados',      description: '94% dos nossos pacientes atingem seus objetivos de recuperação' },
  ];
}
