import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

// importamos servicio de Autentificacio
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

// importamos componentes de rutas de Angular
import { Router } from '@angular/router';

// IMPORTAMOS PAQUETERIA DE CRIPTACION. 
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // imput de la contraseña para ver los caracteres o no.
  hide = true;

  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR.
  usuarios: Usuario = {
    uid: '', // inicializamos con comillas simples porque es string
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }
  // CREAMOS COLECCION DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  // FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar() {

    // // CONSTANTE CREDENCIALES VA A RESGUARDAR LA INFORMACION QUE INGRESE EL USUARIO
    // Esto era registro local jeje. 
    // const credenciales = {
    //   uid: this.usuarios.uid,
    //   nombre: this.usuarios.nombre,
    //   apellido: this.usuarios.apellido,
    //   email: this.usuarios.email,
    //   rol: this.usuarios.rol,
    //   password: this.usuarios.password
    // }


    // registro con servicio de auth.
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      // el metodo then es una promesa que devuelve el mismo valor
      .then(rest => {
        alert("Se pudo registrar con exitoooo :p");

        // el metodo NAVIGATE nos redirecciona a otra visita
        this.servicioRutas.navigate(['/inicio']);
      })
      // El metodo cath captura una falla y la vuelve un error cuando la promesa salga mal
      .catch(error => {
        alert("hubo un problema o un error al registrar un nuevo usuario :( \n" + error)
      })


    // // enviamos nueva infomacion como un nuevo objeto a la coleccion
    // this.coleccionUsuarios.push(credenciales)
    // // mostramos credenciales x consola
    // // console.log(credenciales);
    // alert("Te registraste con exito");

    // // Llamamos la funcion limpiarInputs() para ejecutarla.
    // this.limpiarInputs();

    const uid = await this.servicioAuth.obtenerUid();
    //  se le asigna al atributo de la interfaz esta constante. 
    this.usuarios.uid = uid;

    // (ALGORITMO DE HASH) QUE NOS PERMITE ENCRIPTAR EN HEXADECIMAL QUE VA A REPRESENTAR A SU HASH
    // toString: CONVIERTE EL RESULTADO EN LA CADENA DE CARACTERES LEGIBLE. 
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    //  llamamos a a funsion guardarusuario()
    this.guadarUsuario();

    this.limpiarInputs();

  }

  // Funcion que accede a sevicios firestore y envia la infomacion agrega junto al uid.

  async guadarUsuario() {
    this.servicioFirestore.agregarUusario(this.usuarios, this.usuarios.uid).then(res => {
      console.log(this.usuarios);
    })
      .catch(err => {
        console.log('error =>', err);
      })
  }

  // Función para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}