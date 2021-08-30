import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './contador.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    Contador,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
                                                                                                                                                                                                                                                              