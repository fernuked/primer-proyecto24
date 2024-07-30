import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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

}


// Editar prodcuto.
// Eliminar producto.
// Obtener producto. 