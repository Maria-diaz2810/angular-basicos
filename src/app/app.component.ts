import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre del componente 
  templateUrl: './app.component.html', //hoja template
  // template:'<span>Maria</span>',
  // template: '<h1>Soy maria </h1>',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'bases';
  // public tittle:string = 'contador app';
  //nivel de acceso 

  //Ejercicio 1 contador
  //  numero: number = 10;

  //Metodo segunda forma 
  //  sumar(){
  //    this.numero +=1
  //  }
  //  restar(){
  //    this.numero -=1;
  //  }

  //Metodo tercera forma
  // acumular (valor:number){
  //   this.numero += valor;
  // }

}
