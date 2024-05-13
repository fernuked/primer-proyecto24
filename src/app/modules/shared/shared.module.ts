import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule, 
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule

  ]
})
export class SharedModule { }
