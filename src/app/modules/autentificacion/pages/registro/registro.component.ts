import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
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

  // FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  registrar() {

    // CONSTANTE CREDENCIALES VA A RESGUARDAR LA INFORMACION QUE INGRESE EL USUARIO
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    // enviamos nueva infomacion como un nuevo objeto 0

    this.coleccionUsuarios.push(credenciales)
    // mostramos credenciales x consola
    // console.log(credenciales);
    alert("Te registraste con exito");

    // Llamamos la funcion limpiarInputs() para ejecutarla. 
    this.limpiarInputs();

  }

  // Registro de forma local. 
  limpiarInputs() {
    // En constante "inputs" llamamos a los atributos y la 
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



