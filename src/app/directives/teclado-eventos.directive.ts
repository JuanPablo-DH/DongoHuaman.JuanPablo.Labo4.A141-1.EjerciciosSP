import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTecladoEventos]',
  standalone: true,
})
export class TecladoEventosDirective {
  constructor() {}

  @HostListener('document:keydown', ['$event']) onKeydown(
    event: KeyboardEvent
  ) {
    console.log(`tecla: ${event.key}`);
  }
}
