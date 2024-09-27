import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ultimaVez',
  standalone: true,
})
export class UltimaVezPipe implements PipeTransform {
  transform(value: Date): any {
    const actual = new Date();
    const vieja = value;
    let diferenciaEnMilisegundos = actual.getTime() - vieja.getTime();
    let diferenciaEnDias = Math.floor(
      diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
    );
    if (diferenciaEnDias === -1) {
      diferenciaEnDias = 0;
    }
    return diferenciaEnDias + ' días';
  }
}
