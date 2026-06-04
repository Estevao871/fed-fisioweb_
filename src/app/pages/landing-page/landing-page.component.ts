import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { ContactFormDialogComponent } from '../../components/contact-form-dialog/contact-form-dialog.component';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ContactFormDialogComponent, LoginDialogComponent, RevealOnScrollDirective],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  contactOpen = false;
  loginOpen   = false;

  /* Fale Conosco */
  contatoNome      = '';
  contatoTelefone  = '';
  contatoMensagem  = '';
  contatoErro      = '';
  contatoSucesso   = false;
  contatoLoading   = false;

  constructor(private readonly api: ApiService) {}

  enviarContato(): void {
    this.contatoErro = '';
    if (!this.contatoNome.trim() || !this.contatoTelefone.trim() || !this.contatoMensagem.trim()) {
      this.contatoErro = 'Preencha todos os campos.';
      return;
    }
    this.contatoLoading = true;
    const parts = this.contatoNome.trim().split(' ');
    this.api.criarLead({
      nome: parts[0],
      sobrenome: parts.slice(1).join(' ') || parts[0],
      telefone: this.contatoTelefone,
      email: `${parts[0].toLowerCase()}.contato@fisiolife.temp`,
      observacao: this.contatoMensagem,
    }).subscribe({
      next: () => {
        this.contatoLoading = false;
        this.contatoSucesso = true;
        this.contatoNome = ''; this.contatoTelefone = ''; this.contatoMensagem = '';
      },
      error: () => {
        this.contatoLoading = false;
        this.contatoErro = 'Não foi possível enviar. Tente novamente.';
      },
    });
  }

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
      description: 'Cada paciente recebe um protocolo desenvolvido especificamente para o seu quadro clínico, sem fórmulas genéricas.',
    },
    {
      icon: 'monitoring',
      title: 'Acompanhamento Contínuo',
      description: 'O fisioterapeuta registra a evolução em cada sessão — nível de dor, mobilidade e exercícios — e ajusta o tratamento ao longo do processo.',
    },
    {
      icon: 'fact_check',
      title: 'Evolução Documentada',
      description: 'Todo o histórico de sessões fica registrado e acessível, oferecendo visibilidade completa sobre o progresso do tratamento.',
    },
  ];

  benefits = [
    { icon: 'emoji_events',   title: 'Profissionais Qualificados',  description: 'Especialistas certificados com anos de experiência clínica' },
    { icon: 'lightbulb',      title: 'Tecnologia Avançada',         description: 'Equipamentos modernos para diagnóstico e tratamento precisos' },
    { icon: 'local_hospital', title: 'Ambiente Acolhedor',          description: 'Espaço confortável e moderno para a sua recuperação' },
    { icon: 'schedule',       title: 'Horários Flexíveis',          description: 'Agendamentos que se adaptam à sua rotina diária' },
    { icon: 'assignment',     title: 'Plano Personalizado',         description: 'Tratamento desenvolvido exclusivamente para as suas necessidades' },
    { icon: 'support_agent',  title: 'Suporte Contínuo',            description: 'Atendimento dedicado durante todo o tratamento, do primeiro contato até a alta' },
  ];

  sobreBullets = [
    'Avaliação clínica detalhada antes de iniciar qualquer tratamento',
    'Prontuário digital com acompanhamento de evolução sessão a sessão',
    'Comunicação direta entre paciente e equipe clínica',
  ];
}
