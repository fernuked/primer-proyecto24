import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: Ropa[];

  constructor() {
    this.info = [
      {
        id: "",
        nombre: "campera",
        precio: 52.00,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713547-MLA50302812877_062022-O.webp"
      },
      {
        id: "",
        nombre: "campera negra",
        precio: 52.00,
        imagen: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2ca0518a/products/NI_BV2645-010/NI_BV2645-010-1.JPG"
      }

    ]
  }
}

