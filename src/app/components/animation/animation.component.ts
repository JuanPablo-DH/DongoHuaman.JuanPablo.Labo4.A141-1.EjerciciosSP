import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

const mostrarOcultar = trigger('mostrarOcultarTrigger', [
  state('abierto', style({ opacity: 1 })),
  state('cerrado', style({ opacity: 0 })),
  // Se puede usar * dentro de trasntion
  transition('abierto -> cerrado', [animate('1s')]),
  transition('cerrado -> abierto', [animate('0.5s')]),
]);

const mostrarOcultar2 = trigger('mostrarOcultarTrigger', [
  // Se puede usar * dentro de trasntion
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
]);

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations: [mostrarOcultar, mostrarOcultar2],
})
export class AnimationComponent {
  mostrarContenido: boolean = true;
  mostrarOcultar() {
    this.mostrarContenido = !this.mostrarContenido;
  }
}
