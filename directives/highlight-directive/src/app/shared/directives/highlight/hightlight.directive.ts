import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input() highlightColor: string;

  private element: HTMLElement;

  constructor(elem: ElementRef) {
    this.element = elem.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'transparent');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.style.backgroundColor = color;
  }

}
