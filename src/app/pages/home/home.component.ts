import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private observers: IntersectionObserver[] = [];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initScrollAnimations();
    this.initCounters();
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }

  private initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    this.el.nativeElement
      .querySelectorAll('[data-animate], [data-animate-left], [data-animate-right]')
      .forEach((element: Element) => observer.observe(element));

    this.observers.push(observer);
  }

  private initCounters(): void {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.el.nativeElement
      .querySelectorAll('[data-count]')
      .forEach((element: Element) => counterObserver.observe(element));

    this.observers.push(counterObserver);
  }

  private animateCounter(el: HTMLElement): void {
    const target = parseInt(el.dataset['count'] || '0', 10);
    const suffix = el.dataset['countSuffix'] || '';
    const duration = 1600;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    };

    requestAnimationFrame(update);
  }
}
