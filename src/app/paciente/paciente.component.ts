import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PacienteService } from '../Conexion/paciente.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  user: any;

  keys = [];
  allUsers = [];
  login = false;

  index = null;
  paciente_name = '';

  receta: FormGroup;
  paciente: FormGroup;

  constructor(private route: Router, private fb: FormBuilder, private db: PacienteService) { }

  ngOnInit(){
    this.receta =this.fb.group({
      idPaciente: [''],
      diagnostico: [''],
      terminologia: [''],
      indicaciones: [''],
      receta: [''],
      fecha: ['']
    });
    
    this.keys = this.db.getKey()
    
    this.allUsers =  this.db.getAll()
    this.paciente = this.fb.group({
      nombre: [''],
      direccion: [''],
      ocupacion: [''],
      telefono: [''],
      edad: [''],
      sexo: [''],
      estado: [''],

      diabetes: [0],
      dificultadrespiratoria: [0],
      hipertension: [0],
      cardiopatias: [0],
      hemorragia: [0],
      hepatitis: [0],
      endocrino: [0],
      embarazo: [0],
      convulsiones: [0],
      renales: [0],
      fiebre: [0],
      alergia: [0],

      sangre: [''],
      talla: [''],
      peso: [''],
      adicciones: [''],
      hereditarios: [''],
      glucosa: [''],
      ta: [''],

      dientes: [''],
      atm: [''],
      tejidos: [''],
      observaciones: ['']
    })

    
    

    this.user = localStorage.getItem('user')
    if(this.user != null){
      this.login = true;     
    }else{
      this.route.navigate(['/']);
    }
  }

  recetar_click(name, position){
    this.paciente_name = name;
    this.index = position;
  }

  register(form: any){
    this.db.agregar(form);
    this.allUsers = []
    this.ngOnInit();
  }

  crearReceta(form: any){

    let hoy = new Date();
    form.fecha = hoy.toDateString();
    form.idPaciente = this.keys[this.index]
    
    this.db.agregarReceta(form);
    this.ngOnInit();
  }

  historial(posicion){
    this.route.navigate(['/historial/' + this.keys[posicion]])
  }
}
