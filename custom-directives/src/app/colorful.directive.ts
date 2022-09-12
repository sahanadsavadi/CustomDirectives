import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]',
})
export class ColorfulDirective {
  avalablColors = [
    'red',
    'rebeccapurple',
    'blue',
    'yellow',
    'green',
    'orang',
    'violet',
  ];
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostListener('keydown') newcolor() {
    const randomColorIndex = Math.floor(
      Math.random() * this.avalablColors.length
      
    );
    this.color =this.borderColor =this.avalablColors[randomColorIndex]
  }

  constructor() {}
}
