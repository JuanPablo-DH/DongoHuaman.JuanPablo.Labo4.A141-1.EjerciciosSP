import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo',
  standalone: true,
})
export class TextoLargoPipe implements PipeTransform {
  transform(
    value: string,
    maximo: number = 10,
    puntos: boolean = true
  ): string {
    let ret = '';

    if (value.length > maximo) {
      ret = value.slice(0, maximo);
    }

    if (puntos) {
      return ret + '...';
    }

    return ret;
  }
}
