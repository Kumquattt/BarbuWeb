import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //inclut ngModel - penser à l'ajouter aux imports de ngModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { GamePageComponent } from './game-page/game-page.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MtxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
