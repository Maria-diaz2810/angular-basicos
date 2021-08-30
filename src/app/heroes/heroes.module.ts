import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TipoModule } from "./heroe/tipo.module";
import { Listado1Component } from './listado1/listado1.component';
import { Listado2Component } from './listado2/listado2.component';
import { Listado3Component } from './listado3/listado3.component';


@NgModule({
    declarations:[
         Listado1Component,
         Listado2Component,
         Listado3Component
    ],
    exports:[
        Listado3Component
    ],
    imports:[
        CommonModule,
        TipoModule
    ]

})

export class HeroesModule{

}