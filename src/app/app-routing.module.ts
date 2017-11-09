import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AreasComponent } from './areas/areas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EventosComponent } from './eventos/eventos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';

const routes: Routes = [
  { path: 'areas', component: AreasComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
