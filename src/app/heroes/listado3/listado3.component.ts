import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado3',
  templateUrl: './listado3.component.html',
  styleUrls: ['./listado3.component.css']
})
export class Listado3Component  {

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
