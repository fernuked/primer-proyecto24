import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map, pipe } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Definimos coleccion para los productos de la web. 
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }

  // CRUD: Crear nuevos productos
  crearProducto(producto: Producto) {
    // Retornador cuando la promesa era resuelta y reject, que hubo algun problema!!
    return new Promise(async (resolve, reject) => {
      try {
        // Creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId();
        // Asignamos id creando el atributo IdProducto de la interfaz Producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      } catch (error) {
        reject(error);
      }
    })
  }

  obetenerProductos() {

    // snapshotChanges => toma captura del estaod de los datos. 
    // pipe => tuberias que retoma nuevos arreglos.
    // map => mapea o recorre esa nueva informacion. (observador)
    // payload => convierte en un documento.


    // Toma la captura y viaja x la tuberia (pipe) recive los datos y los guarda a la base de datos.
    // Por ejemplo; si guardamos los nuevos productos se suben nuevos elementos (?) 
    // Accedemos la coleccion, el punto concatena con la captura, llamamos a la pipe (tuberia) 
    // enviamos a map para leer la informacion y la leemos en un elemento  "a" y lo tranformamos en un nuevo documento (doc) junto a su informacion.

    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  // MODIFICAR PRODUCTO
  modificarProducto(idProducto: string, nuevaData: Producto) {
    // ACCEDEMOS A LA NUEVA COLECCION "PRODUCTO" DE LA BASE DE DATOS, BUSCAMOS EL ID DEL PRODUCTO SELECCIONADO
    //  Y LO ACTUALIZAMOS CON EL METODO UPDATE, ENVIDANDO LA NUEVA INFORMACION
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }

// ELIMINAR prodcuto
  eliminarProducto(idProducto: string) {
return new Promise((resolve, reject) => {
  try {
    const respuesta = this.productosCollection.doc(idProducto).delete();
    resolve (respuesta);

  }
  catch(error){
    reject (error);
  }
})
  }
}


// Editar prodcuto.
// Eliminar producto.
// Obtener producto. 

// FormGroup => directiva para formulario, engloba una etiqueta fisica, toma uno x uno los datos del formulario 
// ngif => condicional 
// Obtener prodcuto y agregar producto
