import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AreasComponent } from './areas/areas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EventosComponent } from './eventos/eventos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ButtonComponent } from './component/button/button.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    AreasComponent,
    AcercaDeComponent,
    EventosComponent,
    IntegrantesComponent,
    ButtonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
