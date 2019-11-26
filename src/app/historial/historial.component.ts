import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../Conexion/paciente.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  id_user = '';
  recetas = [];
  keys = []

  constructor(private _route: ActivatedRoute, private db: PacienteService, private route: Router) { }

  ngOnInit() {
    this.id_user = this._route.snapshot.paramMap.get('id');

    this.recetas = this.db.getAllRecetas(this.id_user);
    
    this.keys = this.db.getKeysRecetas(this.id_user);

    console.log(this.keys);
     
  }

  historial(i){
    this.route.navigate(['/receta/' + this.keys[i]])
  }

}
