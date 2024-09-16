import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
// importaciones para manejo de archivos y referencias
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage';

// getDownloadURL: obtener URL  de descarga para una imagen subida. 
// getStorage: para obtener la instancia de almanecamiento. 
// ref: para crear referencias a ubicaciones en el almacenamiento.
// UploadResult: tipo que representa el resultado de una operacion subida.
// UploadString: para subir imagenes en formato cadena
// deleteObject: para eliminar un espacion en el almacenamiento.

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Definimos coleccion para los productos de la web. 
  private productosCollection: AngularFirestoreCollection<Producto>

  // definir variable "respuesta" que podra subir resukltado. 
  private respuesta!: UploadResult;

  private storage = getStorage();

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }

  // CRUD: Crear nuevos productos
  crearProducto(producto: Producto, URL: string) {
    // Retornador cuando la promesa era resuelta y reject, que hubo algun problema!!
    return new Promise(async (resolve, reject) => {
      try {
        // Creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId()
        // Asignamos id creando el atributo IdProducto de la interfaz Producto
        producto.idProducto = idProducto;
        producto.imagen = URL;

        const resultado = await this.productosCollection.doc(idProducto).set(producto)

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
  eliminarProducto(idProducto: string, imagenURL: string) {
    return new Promise((resolve, reject) => {
      try {
        const storage = getStorage();
        const referenciaImagen = ref(storage, imagenURL);

        deleteObject(referenciaImagen)
          .then((res) => {
            const respuesta = this.productosCollection.doc(idProducto).delete()
            resolve(respuesta);

          })
          .catch(error => {
            reject("errpr añ eliminar la imagen")
          })

      }
      catch (error) {
        reject(error);
      }
    })
  }

  obtenerUrlImagen(respuesta: UploadResult) {
    return getDownloadURL(respuesta.ref)
  }

  /**
   * 
   * @param {string} nombre 
   * @param {any} imagen 
   * @param {string} ruta 
   * 
   * 
   */
  async subirImagen(nombre: string, imagen: any, ruta: string) {
    try {
      let referenciaImagen = ref(this.storage, ruta + '/' + nombre);

      this.respuesta = await uploadString(referenciaImagen, imagen, 'data_url')
        .then(resp => {
          return resp;
        })

      return this.respuesta;
    }
    catch (error) {
      console.log(error);
      return this.respuesta;
    }
  }

}

// Editar prodcuto.
// Eliminar producto.
// Obtener producto. 

// FormGroup => directiva para formulario, engloba una etiqueta fisica, toma uno x uno los datos del formulario 
// ngif => condicional 
// Obtener prodcuto y agregar producto
