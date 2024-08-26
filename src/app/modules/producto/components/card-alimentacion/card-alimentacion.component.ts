import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-alimentacion',
  templateUrl: './card-alimentacion.component.html',
  styleUrls: ['./card-alimentacion.component.css']
})
export class CardAlimentacionComponent {
  coleccionProducto: Producto[] = [];

  coleccionAlimentacion: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obetenerProductos().subscribe(producto => {
      this.coleccionProducto = producto;

      this.mostrarProductoAlimentacion();
    })
  }


  mostrarProductoAlimentacion(){
   this.coleccionProducto.forEach(producto => {
    if(producto.categoria === "alimentacion"){
      this.coleccionAlimentacion.push(producto);
    }
   })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
}
