import { Component } from '@angular/core';
import { EstacionesDirective } from '../../directives/estaciones.directive';
import { MouseEventosDirective } from '../../directives/mouse-eventos.directive';
import { TecladoEventosDirective } from '../../directives/teclado-eventos.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EstacionesDirective,
    MouseEventosDirective,
    TecladoEventosDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
