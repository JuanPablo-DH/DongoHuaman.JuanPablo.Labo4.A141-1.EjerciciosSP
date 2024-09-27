import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() hlColor = 'red';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.color = this.hlColor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.color = 'black';
  }
}
