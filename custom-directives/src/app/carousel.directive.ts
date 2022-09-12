import {
  AfterViewInit,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { ICarouselContext } from './interface/app-interface';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective implements OnInit {
  context!: ICarouselContext;
  index: number = 0;

  constructor(
    private templateRef: TemplateRef<ICarouselContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('appCarouselFrom') images!: string[];
  timer: any;

  @Input('appCarouselAutoplay') set aoutoplay(val: string) {
    val === 'No'?this.clear():this.pleyAutoPlay();
  }
  public ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }
  public next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }

  public prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context!.$implicit = this.images[this.index];
  }
  public pleyAutoPlay() {
    this.timer = setInterval(() => {
      this.next();
    }, 1000);
  }
  public clear() {
    clearInterval(this.timer);
  }
}
