import { NgModule } from "@angular/core";
import { HeroeComponent } from './tipos-heroe/heroe.component';

@NgModule({
    declarations:[
        HeroeComponent
    ],
    exports:[
        HeroeComponent
    ]
})

export class TipoModule{

}