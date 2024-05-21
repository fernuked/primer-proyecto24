import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
// import { AcercadeComponent } from './secciones/acercade/acercade.component';

const routes: Routes = [
   // ruta inicial / principal
  { path: '', component: InicioComponent },
    // carga perezosa -> ruta al modulo inicio
    // loadChildren: indica que sera ruta hija del modulo raiz 
    // () =>: funcion flecha que importara la direccion del modulo
    // .then: promesa que nos devolvera un valor resuelto o rechazado 
  {
    path: '', loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },

  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }