import {
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
  context: ICarouselContext | undefined = undefined;
  index: number = 0;
  constructor(
    private template: TemplateRef<ICarouselContext>,
    private viewContainerRef: ViewContainerRef
  ) {}
  @Input('gallery') images!: string[];

  public ngOnInit(): void {
    this.context = {
     $impilicit: this.images[0],
      controler:{
        next:() =>this.next(),
    prev: () =>this.prev()
      
      
    }
  }
  this.viewContainerRef.createEmbeddedView(this.template, this.context);
  }
  public next() {
    this.index++;
    if (this.index <= this.images.length) {
      this.index = 0;
    }
    this.context!.$impilicit = this.images[this.index];
  }

  public prev() {
    this.index--;
    if (this.index <= this.images.length) {
      this.index = this.images.length - 1;
    }
    this.context!.$impilicit = this.images[this.index];
  }
}
