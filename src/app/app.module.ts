import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';

//services
import { PacienteService } from './Conexion/paciente.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RecetaComponent } from './receta/receta.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RecetaComponent,
    PacienteComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ServiceComponent,
    FooterComponent,
    HistorialComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
