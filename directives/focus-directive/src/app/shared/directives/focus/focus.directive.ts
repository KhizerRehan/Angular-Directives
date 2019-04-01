import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {


  constructor(private elem: ElementRef<HTMLElement>) { 
    if( !elem.nativeElement['focus']) {
      throw new Error('Element does not accept focus attribute');
    }
  }

  ngOnInit(): void {
    const input: HTMLInputElement = this.elem.nativeElement as HTMLInputElement;
    input.focus();
    input.select();
  }

}
