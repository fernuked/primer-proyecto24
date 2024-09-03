import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from "sweetalert2";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  // string que modificara el valor del @input en el componenete hijo
  product: string = '';

  // coleccion de productos añadido a la lista
  productoCarrusel: Producto[] = [];;

  productoAnadido(producto: Producto) {
    this.product = `${producto.nombre} : $${producto.precio}`

    try {
      //recibimos la informacion recibida por el parametro de la funcion a la coleccion del carrusel. 
      this.productoCarrusel.push(producto);

      Swal.fire({
        title: '¡Eso chaval!',
        text: 'Añadio el producto con exito!',
        icon: 'info'
      })
    }
    catch (error) {
      Swal.fire({
        title: '¡Oh, no!',
        text: 'Ocurrio un error\n' + error,
        icon: 'error'
      })
    }
  }
  
}