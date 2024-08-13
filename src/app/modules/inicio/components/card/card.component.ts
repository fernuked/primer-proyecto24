import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
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
  
 


 