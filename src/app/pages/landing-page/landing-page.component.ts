import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormDialogComponent } from '../../components/contact-form-dialog/contact-form-dialog.component';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { ParticleModelComponent } from '../../components/particle-model/particle-model.component';
import { EspecialidadesSectionComponent } from '../../components/especialidades-section/especialidades-section.component';
import { BeneficiosSectionComponent } from '../../components/beneficios-section/beneficios-section.component';
import { SobreSectionComponent } from '../../components/sobre-section/sobre-section.component';
import { ContatoSectionComponent } from '../../components/contato-section/contato-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule, RouterLink, ContactFormDialogComponent, RevealOnScrollDirective, ParticleModelComponent,
    EspecialidadesSectionComponent, BeneficiosSectionComponent, SobreSectionComponent, ContatoSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  contactOpen = false;
  contactAssunto = ''; // de onde veio o clique (especialidade ou região) → vai junto no lead

  abrirContato(assunto = ''): void {
    this.contactAssunto = assunto;
    this.contactOpen = true;
  }
  menuOpen    = false;
  scrolled    = false;

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 24; }

  /* Menu: âncoras nos títulos (h2) das seções. O scroll-margin-top de cada título desconta o header fixo. */
  readonly navLinks = [
    { id: 'process-heading',        label: 'Como funciona'  },
    { id: 'pose-heading',           label: 'Regiões'        },
    { id: 'especialidades-heading', label: 'Especialidades' },
    { id: 'sobre-heading',          label: 'Sobre'          },
    { id: 'contato-heading',        label: 'Contato'        },
  ];
  activeSection = ''; // seção visível agora → link marcado no menu

  /**
   * Rola até a seção com scrollIntoView (respeita o scroll-margin-top; o anchorScrolling do
   * Angular não respeita e ignora clique repetido no mesmo link).
   */
  irPara(id: string, ev?: Event): void {
    ev?.preventDefault();
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: this.reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`); // mantém o endereço compartilhável
  }

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
    this.journeyRaf = requestAnimationFrame(() => { this.journeyRaf = 0; this.updateJourney(); this.updateActiveSection(); });
  };

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    // Fora do Angular: rolar não dispara detecção de mudanças a cada pixel
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onJourneyScroll, { passive: true });
      window.addEventListener('resize', this.onJourneyScroll);
    });
    this.updateJourney();

    // Entrou já com #secao no endereço (link compartilhado): espera o layout assentar e rola
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash) setTimeout(() => this.irPara(hash), 300);
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

  /** Marca no menu a última seção cujo título já passou da faixa logo abaixo do header. */
  private updateActiveSection(): void {
    let atual = '';
    for (const l of this.navLinks) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= 160) atual = l.id;
    }
    // Chegou ao fim da página: a última seção (Contato) fica marcada mesmo sem o título subir tanto
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      atual = this.navLinks[this.navLinks.length - 1].id;
    }
    if (atual !== this.activeSection) this.zone.run(() => (this.activeSection = atual));
  }

  /* Cada corpo é único — boneco em T de partículas (assets/pose-t.glb)
     dx/dy = distância do centro do quadro em frações da ALTURA do quadro (--fig-h).
     O modelo escala pela altura (câmera com ângulo vertical fixo), então os pontos ficam
     presos ao corpo em qualquer largura. Para ajustar um ponto, mexa só nesses números.
     side = lado do rótulo (r = direita, l = esquerda). */
  readonly rotationPoseT = -Math.PI / 2;
  readonly bodyRegions = [
    { title: 'Ombro',   dx: 0.095, dy: -0.225, side: 'r', trat: 'Reabilitação ortopédica',            desc: 'Tendinite, luxação e síndrome do impacto.' },
    { title: 'Coluna',  dx: 0,     dy: -0.085, side: 'l', trat: 'Reabilitação ortopédica · funcional', desc: 'Hérnia de disco, lombalgia e escoliose.' },
    { title: 'Quadril', dx: 0.055, dy: -0.02,  side: 'r', trat: 'Reabilitação ortopédica',            desc: 'Bursites, artroses e pós-operatório.' },
    { title: 'Joelho',  dx: 0.05,  dy: 0.17,   side: 'r', trat: 'Reabilitação ortopédica',            desc: 'Lesões de ligamento, menisco e condromalácia.' },
  ];
  activeRegion = 0;
}
