import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoLargoPipe } from './pipes/texto-largo.pipe';
import { UltimaVezPipe } from './pipes/ultima-vez.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    TextoLargoPipe,
    UltimaVezPipe,
    HighlightDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicios-sp';
  dinero = 5000;
  texto = 'sdfñk,dfsk,lfsdkml,sdfmklsdfkmlsdfpksdfklmsdfmklsdf';
  fecha = new Date('2024-06-03 09:00:00');
  hlColor = 'yellow';
}
