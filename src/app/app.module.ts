import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './modules/shared/shared.module';

// FIREBASE -> importamos erramientas de la base de DataSource. 
import { environment} from 'src/environments/environment'; //vincula a la base de datos con la app
import { AngularFireModule} from '@angular/fire/compat' //trabaja con las colecciones de informacion
import { AngularFireAuthModule} from '@angular/fire/compat/auth' //trabaja con la autentificacion 
import {AngularFireStorageModule} from '@angular/fire/compat/storage' //trabaja con imagenes y archivos 

// npm install firebase --force <- fuerza la instalacion. 
// npm install @angular/fire --save --force. 


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule,

// VINCULACION CON FIREBASE. 
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
