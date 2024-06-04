import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  public info: Usuario [] ;
  constructor() {
    this.info = [
      {
        uid: "",
        nombre: "Guadalupe",
        apellido: "Araya",
        password: "47049045",
        rol: "vis",
        email: "guadalupearaya50@gmail.com"
        
      },
    ]
  }
}

