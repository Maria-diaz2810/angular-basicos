import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado1',
  templateUrl: './listado1.component.html',
  styleUrls: ['./listado1.component.css']
})
export class Listado1Component  {

  //ejemplo borrar un primer elemento del arreglo
  heroes : string []=['spiderman','ironman','hulk','aguaman','capitan america'];
  heroeBorrado: string = '';
  borrarHeroe(){
    // this.heroes.shift();
    // que se borre y luego lo muestre 
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
