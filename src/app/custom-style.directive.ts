import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
})
export class CustomStyleDirective {
  constructor(private eleref: ElementRef) {
    //eleref.nativeElement.style.color= "red";
    //eleref.nativeElement.style.background= "black";
    //eleref.nativeElement.style.display= "none";
    eleref.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('blue');
  }

  private highlight(color: string) {
    this.eleref.nativeElement.style.color = color;
  }
}

/*Angular ElementRef is a wrapper around a native element inside of a View. */
