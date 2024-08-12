import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos coleccion local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // TOMA VALORES VACIOS
  modalVisibleProducto: boolean = false

  // definimos formulario para los productos.
  // atributos alfanumericos (string) se inicializan con comillas simples 
  // atributos numericos (number) se inicialozan con 0 (cero jejeje)

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripccion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { 
  }

  ngOnInit(): void { 
    this.servicioCrud.obetenerProductos().subscribe(producto => {
      this.coleccionProductos = producto;

      // SUSCRIBE => NOTIFICA CUANDO HACEMOS UNA CAPTURA Y ACTIVA LAS NOTIFICACIONES 
      // D TODOS LOS CAMBIOS QUE HAYAN EN EL SISTEMA
    })
  }
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripccion: this.producto.value.descripccion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con exito")
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar el prodcuto. ");
        });
    };

  }

  mostrarBorrar(productoSeleccionado : Producto) {
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto(){
  this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto).then(respuesta => {
    alert("se ha podido eliminar con exito")
  })
  .catch(error => {
    alert("ha ocurrido un error al eliminar prodcuto:\n"+error)
  });
  }
}
