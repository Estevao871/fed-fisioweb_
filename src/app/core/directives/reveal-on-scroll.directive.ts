import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;
  @Input() revealRootMargin = '0px 0px -8% 0px';
  @Input() revealOnce = true;

  private observer: IntersectionObserver | null = null;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    this.renderer.addClass(el, 'reveal-ready');
    this.renderer.setStyle(el, 'transition-delay', `${this.revealDelay}ms`);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'is-revealed');
            if (this.revealOnce) this.observer?.unobserve(el);
          } else if (!this.revealOnce) {
            this.renderer.removeClass(el, 'is-revealed');
          }
        }
      },
      { threshold: this.revealThreshold, rootMargin: this.revealRootMargin }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
