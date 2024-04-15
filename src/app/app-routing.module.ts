import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { AcercadeComponent } from './secciones/acercade/acercade.component';

const routes : Routes = [
  {path:'ComponentInicio', component: InicioComponent},
  {path:'ComponentAcercade', component: AcercadeComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
