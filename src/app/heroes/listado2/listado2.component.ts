import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado2',
  templateUrl: './listado2.component.html',
  styleUrls: ['./listado2.component.css'],
})
export class Listado2Component {
  //ejemplo borrar un primer elemento del arreglo
  heroes: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'aguaman',
    'capitan america',
  ];
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
