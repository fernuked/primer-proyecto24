import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { LisasComponent } from './pages/lisas/lisas.component';
import { EstampadosComponent } from './pages/estampados/estampados.component';
import { BordadosComponent } from './pages/bordados/bordados.component';


@NgModule({
  declarations: [
    ProductoComponent,
    LisasComponent,
    EstampadosComponent,
    BordadosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
