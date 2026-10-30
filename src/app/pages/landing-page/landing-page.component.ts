import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { ContactFormDialogComponent } from '../../components/contact-form-dialog/contact-form-dialog.component';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { ParticleModelComponent } from '../../components/particle-model/particle-model.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ContactFormDialogComponent, LoginDialogComponent, RevealOnScrollDirective, ParticleModelComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  contactOpen = false;
  loginOpen   = false;
  menuOpen    = false;
  scrolled    = false;

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 24; }

  /* Fale Conosco */
  contatoNome      = '';
  contatoTelefone  = '';
  contatoMensagem  = '';
  contatoErro      = '';
  contatoSucesso   = false;
  contatoLoading   = false;

  /* Como funciona — caminho que se desenha com o scroll (ver docs/animacao-caminho.md) */
  readonly journeySteps = [
    { title: 'Avaliação inicial',     desc: 'Uma avaliação completa para entender sua história, sua rotina e o que está limitando o seu movimento.' },
    { title: 'Plano personalizado',   desc: 'Um plano de tratamento único, construído a partir da avaliação e das suas metas de vida.' },
    { title: 'Tratamento e evolução', desc: 'A cada sessão, a evolução é registrada — dor, mobilidade e exercícios — e o tratamento é ajustado ao longo do processo.' },
    { title: 'Retorno às atividades', desc: 'O objetivo é voltar a fazer o que importa para você, com mais autonomia e qualidade de vida.' },
  ];
  // viewBox 100×400 (desktop) e 48×400 (celular): uma curva por etapa, bolinha em y = 50/150/250/350
  readonly pathDesktop = 'M50 0 L50 50 C50 85 82 65 82 100 C82 135 50 115 50 150 C50 185 18 165 18 200 C18 235 50 215 50 250 C50 285 82 265 82 300 C82 335 50 315 50 350 L50 400';
  readonly pathMobile  = 'M24 0 L24 50 C24 85 40 65 40 100 C40 135 24 115 24 150 C24 185 8 165 8 200 C8 235 24 215 24 250 C24 285 40 265 40 300 C40 335 24 315 24 350 L24 400';
  activeStep    = -1;    // -1 = nenhuma etapa acesa
  journeyMobile = false; // < 860 (bp.$site-mobile)

  @ViewChild('journeyTrack') private journeyTrack?: ElementRef<HTMLElement>;
  @ViewChild('journeyClip')  private journeyClip?: ElementRef<SVGRectElement>;

  private journeyRaf = 0;
  private readonly reduceMotion =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  private readonly onJourneyScroll = (): void => {
    if (this.journeyRaf) return; // no máximo 1 cálculo por quadro
    this.journeyRaf = requestAnimationFrame(() => { this.journeyRaf = 0; this.updateJourney(); });
  };

  constructor(
    private readonly api: ApiService,
    private readonly zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    // Fora do Angular: rolar não dispara detecção de mudanças a cada pixel
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onJourneyScroll, { passive: true });
      window.addEventListener('resize', this.onJourneyScroll);
    });
    this.updateJourney();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onJourneyScroll);
    window.removeEventListener('resize', this.onJourneyScroll);
    cancelAnimationFrame(this.journeyRaf);
  }

  private updateJourney(): void {
    const track = this.journeyTrack?.nativeElement;
    const clip  = this.journeyClip?.nativeElement;
    if (!track || !clip) return;

    // Progresso: quanto da trilha já passou de uma linha imaginária a 60% da altura da tela
    let p = 1;
    if (!this.reduceMotion) {
      const rect = track.getBoundingClientRect();
      p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - rect.top) / rect.height));
    }
    // Revela a linha até a altura p (viewBox tem 400 de altura; +10 compensa o y=-10 do retângulo)
    clip.setAttribute('height', String(p * 400 + 10));

    // Etapa i acende quando a linha chega na bolinha dela (y = 50, 150, 250, 350 → (i + 0.5) / 4)
    let step = -1;
    for (let i = 0; i < this.journeySteps.length; i++) {
      if (p >= (i + 0.5) / this.journeySteps.length) step = i;
    }
    const mobile = window.innerWidth < 860;

    // Só volta para o Angular quando algo visível no template muda
    if (step !== this.activeStep || mobile !== this.journeyMobile) {
      this.zone.run(() => { this.activeStep = step; this.journeyMobile = mobile; });
    }
  }

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

  readonly rotationPoseT = -Math.PI / 2;

  bodyAreas = [
    { icon: 'accessibility_new', label: 'Ombro',   desc: 'Tendinite, luxação, síndrome do impacto' },
    { icon: 'line_axis',         label: 'Coluna',   desc: 'Hérnia de disco, lombalgia, escoliose' },
    { icon: 'sports_martial_arts', label: 'Quadril', desc: 'Bursites, artroses, pós-operatório' },
    { icon: 'directions_walk',   label: 'Joelho',   desc: 'Ligamento, menisco, condromalácia' },
  ];

  sobreBullets = [
    'Avaliação clínica detalhada antes de iniciar qualquer tratamento',
    'Prontuário digital com acompanhamento de evolução sessão a sessão',
    'Comunicação direta entre paciente e equipe clínica',
  ];
}
