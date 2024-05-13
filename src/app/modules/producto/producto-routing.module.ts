import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { LisasComponent } from './pages/lisas/lisas.component';
import { EstampadosComponent } from './pages/estampados/estampados.component';
import { BordadosComponent } from './pages/bordados/bordados.component';

const routes: Routes = [
  {
    path: "producto", component: ProductoComponent
  },
  {
    path: "lisas", component: LisasComponent
  },
  {
    path: "estampados", component: EstampadosComponent
  },
  {
    path: "bordados", component: BordadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
