import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../Conexion/paciente.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  id_user = '';
  recetas = [];
  constructor(private _route: ActivatedRoute, private db: PacienteService) { }

  ngOnInit() {
    this.id_user = this._route.snapshot.paramMap.get('id');
    console.log("id " + this.id_user);

    this.recetas = this.db.getAllRecetas(this.id_user);
    console.log(this.recetas);
    
    
  }

}
