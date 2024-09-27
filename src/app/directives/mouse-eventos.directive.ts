import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEventos]',
  standalone: true,
})
export class MouseEventosDirective {
  color = 'purple';
  colorAnterior = null;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.colorAnterior = this.elementRef.nativeElement.style.color;
    this.elementRef.nativeElement.style.color = this.color;
  }

  @HostListener('mouseout') onMouseOut() {
    if (this.colorAnterior) {
      this.elementRef.nativeElement.style.color = this.colorAnterior;
    }
  }
}
