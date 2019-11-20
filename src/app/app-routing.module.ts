import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RecetaComponent } from './receta/receta.component';
import { ServiceComponent } from './service/service.component';
import { HistorialComponent } from './historial/historial.component';


const routes: Routes = [
  { path:'', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'receta', component: RecetaComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'historial/:id', component: HistorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
