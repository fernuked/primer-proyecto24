import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  // LOCAL
  // DEFINIMOS COLECCION LOCAL DE USUARIOS.
  public conleccionUsuariosLocales: Usuario[];

  constructor() {
    this.conleccionUsuariosLocales = [
      {
        uid: '',
        nombre: 'santi',
        apellido: 'nuñez',
        email: 'santiagonuñe@gmail.com',
        rol: 'vis',
        password: 'abc1234'
      },

      {
        uid: '',
        nombre: 'mili',
        apellido: 'romero',
        email: 'miliromero@gmail.com',
        rol: 'vis',
        password: 'abc5678'
      },

      {
        uid: '',
        nombre: '',
        apellido: '',
        email: '',
        rol: '',
        password: ''
      }
    ]
  }
  // fin local. 
  // definimos la interfaz usuario.
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // FUNCION INICIAR SESION. 
  Iniciosesion() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    for (let i = 0; i < this.conleccionUsuariosLocales.length; i++) {
      const usuariolocal = this.conleccionUsuariosLocales[i];

      if (usuariolocal.nombre == credenciales.nombre && usuariolocal.apellido === credenciales.apellido &&
        usuariolocal.email === credenciales.email && usuariolocal.password === credenciales.password && usuariolocal.rol === credenciales.rol) {
        // Notificamos al usuario que pudo ingresar. 
        alert("Ingresaste con exito!")
        break;  // Paramos la funcion. 
      } else {
        alert("ocurrio un problema jeje.")
        break; // Paramos la funcion. 
      }
    }
  }
}




















//   usuarioss: Usuario = {
//     uid: '',
//     nombre: '',
//     apellido: '',
//     email: '',
//     rol: '',
//     password: ''
//   }
// }

// perfiles() {
//   const datos = {
//     uid: this.usuarios.uid,
//     email: this.usuarios.email,
//     password: this.usuarios.password
//   }

//   this.coleccionUsuarios.push(datos)
//   // mostramos credenciales x consola
//   console.log(datos);
// }



