import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //inclut ngModel - penser à l'ajouter aux imports de ngModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LogsComponent } from './logs/logs.component';
import { BandeauStatutComponent } from './bandeau-statut/bandeau-statut.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LogsComponent,
    BandeauStatutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
