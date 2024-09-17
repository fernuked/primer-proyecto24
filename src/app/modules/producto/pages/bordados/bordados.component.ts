import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-bordados',
  templateUrl: './bordados.component.html',
  styleUrls: ['./bordados.component.css']
})
export class BordadosComponent {
  public info: Ropa[]; 

  constructor() {
    this.info = [
      {
        id: "",
        nombre: "Facturas surtidas X DOC",
        precio: 7.000,
        imagen: "./assets/card1.png",
        alt: "",
        descripcion: ""
      },
      {
        id: "",
        nombre: "Churros X DOC",
        precio: 4.000,
        imagen: "./assets/card2.png",
        alt: "",
        descripcion: ""
      },

      {
        id: "",
        nombre: "Selva negra 1KG",
        precio: 10.000,
        imagen: "./assets/card3.png",
        alt: "",
        descripcion: ""
      }
  
    ]
  }
  
}
