import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { LisasComponent } from './pages/lisas/lisas.component';
import { EstampadosComponent } from './pages/estampados/estampados.component';
import { BordadosComponent } from './pages/bordados/bordados.component';
import { CardComponent } from './components/card/card.component';
import { CardAlimentacionComponent } from './components/card-alimentacion/card-alimentacion.component';


@NgModule({
  declarations: [
    ProductoComponent,
    LisasComponent,
    EstampadosComponent,
    BordadosComponent,
    CardComponent,
    CardAlimentacionComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    CardAlimentacionComponent,
    ProductoComponent,
    LisasComponent,
    EstampadosComponent,
    BordadosComponent,
    CardComponent
  ]
})
export class ProductoModule { }
