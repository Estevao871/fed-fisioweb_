# Animação "Um caminho claro, no seu ritmo"

Abra a pré-visualização com **Ctrl + Shift + V** para ver o código colorido.

Baseado no arquivo `Fisio Movimento.dc.html` do projeto de design, adaptado para Angular.
Já está aplicado em `landing-page.component` (seção `.journey`). Os trechos abaixo são resumos para entender. O código real está nos arquivos.

---

## 1. A ideia em 3 partes

| Parte | O que é | Como anima |
|---|---|---|
| **Linha cinza** | Um caminho em S, sempre visível, em lilás bem claro | Não anima. É o "trilho" |
| **Linha roxa** | O **mesmo** caminho, desenhado por cima | Vai sendo "pintada" conforme a página rola |
| **Etapas** | 4 blocos (bolinha, texto e número grande) | Ficam apagadas (28%) e "acendem" quando a linha roxa passa por elas |

Tudo depende de **um único número: o progresso `p`**, que vai de `0` a `1`:

- `p = 0` → a seção ainda está lá embaixo, nada pintado
- `p = 0.5` → metade da linha pintada, 2 etapas acesas
- `p = 1` → linha inteira pintada, 4 etapas acesas

---

## 2. O truque da linha que "se desenha"

A linha roxa fica inteira o tempo todo, mas escondida atrás de uma **"janela" (`clipPath`)**.
A janela é um retângulo que começa com altura 0 e vai crescendo para baixo. Só aparece o pedaço da linha que está dentro dela.

```html
<defs>
  <clipPath id="journey-clip" clipPathUnits="userSpaceOnUse">
    <rect #journeyClip x="-20" y="-10" width="140" height="0" />
  </clipPath>
</defs>
<path class="journey__line" clip-path="url(#journey-clip)" ... />
```

```ts
clip.setAttribute('height', String(p * 400 + 10)); // 400 = altura do viewBox
```

> **Por que não `stroke-dasharray` + `pathLength`?** É a técnica mais comum, mas **não funciona junto com `vector-effect="non-scaling-stroke"`**. O navegador passa a medir o tracejado em pixels da tela, e a linha aparece em pedaços. Como precisamos do `non-scaling-stroke` para a linha não ficar torta quando o SVG estica, usamos a janela.

## 3. Como calcular o progresso `p` com o scroll

```ts
const rect = track.getBoundingClientRect();   // posição da trilha na tela
const vh   = window.innerHeight;               // altura da janela

p = (vh * 0.6 - rect.top) / rect.height;
p = Math.min(1, Math.max(0, p));               // trava entre 0 e 1
```

Na prática: imagine uma **linha invisível a 60% da altura da tela**. `p` é "quanto da trilha já passou dessa linha".

- Topo da trilha chegou na linha dos 60% → `p = 0`
- Fim da trilha chegou na linha dos 60% → `p = 1`

**Qual etapa está acesa?** A etapa `i` (0 a 3) acende quando `p` passa de `(i + 0.5) / 4`, que é exatamente quando a linha chega na bolinha dela:

| Etapa | Acende em `p ≥` |
|---|---|
| 1 | 0.125 (bolinha em y = 50 de 400) |
| 2 | 0.375 (y = 150) |
| 3 | 0.625 (y = 250) |
| 4 | 0.875 (y = 350) |

---

## 4. O desenho do caminho (o "S")

```ts
// Desktop: viewBox 0 0 100 400 → 100 de largura, 400 de altura (4 etapas × 100)
const PATH_DESKTOP =
  'M50 0 L50 50 ' +                          // desce reto pelo meio
  'C50 85 82 65 82 100 C82 135 50 115 50 150 ' + // curva para a direita e volta
  'C50 185 18 165 18 200 C18 235 50 215 50 250 ' + // curva para a esquerda e volta
  'C50 285 82 265 82 300 C82 335 50 315 50 350 ' + // direita de novo
  'L50 400';                                 // termina reto

// Celular: a linha fica numa faixa de 48px à esquerda
const PATH_MOBILE =
  'M24 0 L24 50 C24 85 40 65 40 100 C40 135 24 115 24 150 ' +
  'C24 185 8 165 8 200 C8 235 24 215 24 250 C24 285 40 265 40 300 ' +
  'C40 335 24 315 24 350 L24 400';
```

- `50` = meio da largura. `82` = direita, `18` = esquerda.
- Cada etapa ocupa 100 unidades de altura, e a bolinha fica no meio (50, 150, 250, 350).
- `preserveAspectRatio="none"` estica o desenho para a altura real da trilha.
- `vector-effect="non-scaling-stroke"` mantém a espessura em 4px mesmo esticado. Sem isso a linha ficaria grossa ou fina de forma torta.

---

## 5. Código Angular

### 5.1 `landing-page.component.ts`

```ts
import {
  AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild,
} from '@angular/core';

export class LandingPageComponent implements AfterViewInit, OnDestroy {

  readonly journeySteps = [
    { title: 'Avaliação inicial',     desc: 'Uma avaliação completa para entender sua história, sua rotina e o que está limitando o seu movimento.' },
    { title: 'Plano personalizado',   desc: 'Um plano de tratamento único, construído a partir da avaliação e das suas metas de vida.' },
    { title: 'Tratamento e evolução', desc: 'A cada sessão, a evolução é registrada — dor, mobilidade e exercícios — e o tratamento é ajustado ao longo do processo.' },
    { title: 'Retorno às atividades', desc: 'O objetivo é voltar a fazer o que importa para você, com mais autonomia e qualidade de vida.' },
  ];

  readonly pathDesktop = 'M50 0 L50 50 C50 85 82 65 82 100 C82 135 50 115 50 150 C50 185 18 165 18 200 C18 235 50 215 50 250 C50 285 82 265 82 300 C82 335 50 315 50 350 L50 400';
  readonly pathMobile  = 'M24 0 L24 50 C24 85 40 65 40 100 C40 135 24 115 24 150 C24 185 8 165 8 200 C8 235 24 215 24 250 C24 285 40 265 40 300 C40 335 24 315 24 350 L24 400';

  activeStep = -1; // -1 = nenhuma acesa

  @ViewChild('journeyTrack') private trackRef?: ElementRef<HTMLElement>;
  @ViewChild('journeyPath')  private pathRef?: ElementRef<SVGPathElement>;

  private raf = 0;
  private readonly reduceMotion =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  private readonly onScroll = () => {
    if (this.raf) return;                       // no máximo 1 cálculo por quadro
    this.raf = requestAnimationFrame(() => { this.raf = 0; this.updateJourney(); });
  };

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    // Fora do Angular: rolar a página NÃO dispara detecção de mudanças a cada pixel
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll);
    });
    this.updateJourney();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    cancelAnimationFrame(this.raf);
  }

  private updateJourney(): void {
    const track = this.trackRef?.nativeElement;
    const path  = this.pathRef?.nativeElement;
    if (!track || !path) return;

    let p = 1;
    if (!this.reduceMotion) {
      const rect = track.getBoundingClientRect();
      p = (window.innerHeight * 0.6 - rect.top) / rect.height;
      p = Math.min(1, Math.max(0, p));
    }

    // 1) Linha: mexe direto no DOM (barato, sem Angular)
    path.style.strokeDashoffset = String(1 - p);

    // 2) Etapas: só avisa o Angular quando a etapa MUDA (no máximo 4 vezes)
    let step = -1;
    for (let i = 0; i < this.journeySteps.length; i++) {
      if (p >= (i + 0.25) / this.journeySteps.length) step = i;
    }
    if (step !== this.activeStep) {
      this.zone.run(() => (this.activeStep = step));
    }
  }
}
```

> **Por que `runOutsideAngular`?** O evento de scroll dispara dezenas de vezes por segundo. Dentro do Angular, cada disparo faria a página inteira ser verificada. Fora dele, só a linha é atualizada, e o Angular só entra quando uma etapa acende.

### 5.2 `landing-page.component.html`

```html
<section class="journey" aria-labelledby="process-heading">
  <div class="journey__inner">

    <header class="journey__head">
      <span class="eyebrow">Como funciona</span>
      <h2 id="process-heading">Um caminho claro, <span class="accent">no seu ritmo.</span></h2>
      <p>Da primeira avaliação ao retorno às atividades, cada etapa é planejada e acompanhada de perto.</p>
    </header>

    <div class="journey__track" #journeyTrack>

      <!-- Desktop -->
      <svg class="journey__svg journey__svg--desk" viewBox="0 0 100 400" preserveAspectRatio="none" aria-hidden="true">
        <path class="journey__rail" [attr.d]="pathDesktop" vector-effect="non-scaling-stroke" />
        <path class="journey__line" #journeyPath [attr.d]="pathDesktop"
          pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" vector-effect="non-scaling-stroke" />
      </svg>

      <div *ngFor="let s of journeySteps; let i = index; let even = even"
        class="journey__step"
        [class.is-left]="even"
        [class.is-right]="!even"
        [class.is-on]="i <= activeStep">

        <span class="journey__dot" aria-hidden="true"></span>

        <div class="journey__text">
          <div class="journey__label">Etapa {{ i + 1 }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>

        <div class="journey__num" aria-hidden="true">0{{ i + 1 }}</div>
      </div>
    </div>
  </div>
</section>
```

> Para simplificar, este exemplo usa só o caminho de desktop. No celular, troque o `[attr.d]` por `pathMobile` e o `viewBox` por `0 0 48 400`, ou crie um segundo `<svg>` e alterne entre os dois com CSS (o `@ViewChild` precisa apontar para o que estiver visível).

### 5.3 `landing-page.component.scss`

```scss
@use 'breakpoints' as bp;

.journey {
  position: relative;
  background: #fff;
  padding: clamp(60px, 9vw, 120px) clamp(20px, 5vw, 64px) clamp(80px, 12vw, 150px);

  &__inner { max-width: 1120px; margin: 0 auto; }

  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    text-align: center;
    margin-bottom: clamp(56px, 8vw, 96px);

    h2 {
      max-width: 760px;
      font-size: clamp(34px, 4.6vw, 64px);  // título de seção do guia
      line-height: 1.04;
      letter-spacing: -0.04em;
      text-wrap: balance;
    }

    p { max-width: 540px; font-size: 18px; line-height: 1.6; color: var(--gray-600); }
  }

  // Trilha: 4 linhas de 240px. O SVG fica atrás, ocupando tudo.
  &__track {
    position: relative;
    display: grid;
    grid-template-rows: repeat(4, 240px);

    @media (max-width: bp.$site-mobile) { grid-template-rows: repeat(4, 250px); }
  }

  &__svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;

    path { fill: none; stroke-width: 4; stroke-linecap: round; }
  }

  &__rail { stroke: var(--purple-100); }   // trilho claro
  &__line { stroke: var(--purple-600); }   // linha que se desenha

  // Cada etapa: [texto | bolinha 96px | número], e o lado alterna
  &__step {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 96px minmax(0, 1fr);
    align-items: center;

    @media (max-width: bp.$site-mobile) { grid-template-columns: 48px minmax(0, 1fr); }
  }

  &__dot {
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    width: 22px;
    height: 22px;
    border-radius: var(--radius-pill);
    background: #fff;
    border: 2px solid var(--purple-500);
    transition: all .6s cubic-bezier(.2, .7, .2, 1);

    @media (max-width: bp.$site-mobile) { grid-column: 1; }
  }

  &__text {
    grid-row: 1;
    max-width: 420px;
    padding: 0 8px;
    opacity: .28;                           // apagada
    transform: translateY(16px);
    transition: opacity .8s ease, transform .8s cubic-bezier(.2, .7, .2, 1);

    h3 {
      margin: 0 0 12px;
      font-size: clamp(24px, 2.4vw, 32px);
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    p { font-size: 17px; line-height: 1.6; color: var(--gray-600); text-wrap: pretty; }
  }

  &__label {
    margin-bottom: 8px;
    font-family: var(--font-accent);
    font-style: italic;
    font-size: 22px;
    color: var(--purple-600);
  }

  &__num {
    grid-row: 1;
    padding: 0 48px;
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 150px;
    line-height: 1;
    letter-spacing: -0.06em;
    color: var(--purple-100);
    opacity: .28;
    transition: opacity .8s;

    @media (max-width: bp.$site-mobile) { display: none; }
  }

  // Lado: etapas 1 e 3 com texto à esquerda, 2 e 4 à direita
  &__step.is-left {
    .journey__text { grid-column: 1; justify-self: end;   text-align: right; }
    .journey__num  { grid-column: 3; justify-self: start; }
  }

  &__step.is-right {
    .journey__text { grid-column: 3; justify-self: start; text-align: left; }
    .journey__num  { grid-column: 1; justify-self: end; }
  }

  // No celular, todo texto vai para a direita da linha
  @media (max-width: bp.$site-mobile) {
    &__step.is-left .journey__text,
    &__step.is-right .journey__text {
      grid-column: 2;
      justify-self: start;
      text-align: left;
      padding-left: 16px;
    }
  }

  // ACESA: a linha roxa passou por aqui
  &__step.is-on {
    .journey__dot {
      background: var(--purple-600);
      border-color: var(--purple-600);
      box-shadow: 0 0 0 8px rgba(var(--purple-rgb), .14);
    }

    .journey__text { opacity: 1; transform: none; }
    .journey__num  { opacity: 1; }
  }
}
```

---

## 6. Checklist ao aplicar

- [ ] A seção atual "Como Funciona Nosso Processo" (`processSteps` + `.steps-grid`) sai, e esta entra no lugar
- [ ] Manter `id="process-heading"` no `<h2>`, porque o menu "Como funciona" aponta para ele
- [ ] `AfterViewInit, OnDestroy, NgZone, ViewChild, ElementRef` importados no `.ts`
- [ ] Testar com **"reduzir animações"** ligado no Windows: deve aparecer tudo aceso e a linha inteira
- [ ] Testar abaixo de 860px (celular): linha à esquerda e textos à direita

## 7. Ajustes rápidos

| Quero... | Mude |
|---|---|
| Que a linha comece a pintar mais cedo | `0.6` → `0.8` em `innerHeight * 0.6` |
| Que as etapas acendam um pouco antes da linha chegar | `(i + 0.5)` → `(i + 0.4)` |
| Etapas mais espaçadas | `repeat(4, 240px)` → `repeat(4, 300px)` |
| Linha mais grossa | `stroke-width: 4` → `6` |
| Curvas mais abertas | No caminho, troque `82` por `90` e `18` por `10` |
