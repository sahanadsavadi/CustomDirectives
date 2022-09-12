import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('appAppHighlight') highlighliteColor: string = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.highlighliteColor);
  }

  @HostListener('mouseleave') onMouseleve() {
    this.setBackgroundColor('blue');
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    );
  }
}
