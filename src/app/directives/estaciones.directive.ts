import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appEstaciones]',
  standalone: true,
})
export class EstacionesDirective implements OnChanges {
  @Input() estacion = 'primavera';

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.estacion) {
      case 'primavera':
        this.elementRef.nativeElement.style.color = 'green';
        break;
      case 'verano':
        this.elementRef.nativeElement.style.color = 'yellow';
        break;
      case 'otoño':
        this.elementRef.nativeElement.style.color = 'orange';
        break;
      case 'invierno':
        this.elementRef.nativeElement.style.color = 'blue';
        break;
      default:
        this.elementRef.nativeElement.style.color = 'white';
    }
  }
}
