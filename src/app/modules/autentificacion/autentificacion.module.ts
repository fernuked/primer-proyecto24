import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// archivo de rutas hijas
import { AutentificacionRoutingModule } from './autentificacion-routing.module';

// vista de autentificacion
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

// componenetes de material
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],

  exports: [
    RegistroComponent,
    IniciosesionComponent,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule

  ]
})
export class AutentificacionModule { }
