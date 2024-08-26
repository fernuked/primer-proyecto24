import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // coleccion de productos locales
  coleccionProductos: Producto[] = [];

  // Valiable local para seleccionar un prodcuto especifico.
  productoSeleccionado!: Producto;


  // Manejar el estado de un modal (que se muestre o no) 
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obetenerProductos().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }


  // Funcion oara mostrar mas informacion de los prodcutos
  mostrarVer(info: Producto) {

    // Cambio el estdo del modal a : true
    this.modalVisible = true;

    // Guardo en variable seleccionado la infor de producto elegido
    this.productoSeleccionado = info;
  }
}
