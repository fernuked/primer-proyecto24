import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

// rutas hijas del modulo inicio

const routes: Routes = [
  {
    path:'',component:InicioComponent
  },
  {
    path:'Inicio', component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
