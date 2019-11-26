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
  add = true

  title = "Nuevo paciente"

  index = null;

  edad = '';
  alergira = '';
  paciente_name = '';
  sexo = '';

  receta: FormGroup;
  paciente: FormGroup;

  constructor(private route: Router, private fb: FormBuilder, private db: PacienteService) { }

  new(){
    this.add = true;
    this.title = "nuevo paciente";
    this.paciente.reset();
  }

  ngOnInit(){
    this.receta =this.fb.group({
      idPaciente: [''],
      diagnostico: [''],
      terminologia: [''],
      indicaciones: [''],
      receta: [''],
      fecha: [''],
      nombre: [''],
      sexo: [''],
      alergia: []  
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
    });

    this.user = localStorage.getItem('user')
    if(this.user != null){
      this.login = true;     
    }else{
      this.route.navigate(['/']);
    }
  }

  recetar_click(name, edad, alergia, sexo, position){
    this.paciente_name = name;
    this.edad = edad;
    this.alergira = alergia;
    this.index = position;
    this.sexo = sexo;
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
    form.nombre = this.paciente_name;
    form.edad = this.edad;
    form.alergia = this.alergira;
    form.sexo = this.sexo;
    let key = this.db.agregarReceta(form);

    console.log(key.key);
    
    this.route.navigate(['receta/' + key.key])
    //this.ngOnInit();
  }

  historial(posicion){
    this.route.navigate(['/historial/' + this.keys[posicion]])
  }

  detalles(item: any){
    this.add = false
    this.title = item.nombre;

    this.paciente = this.fb.group({
      nombre: item.nombre,
      direccion: item.ocupacion,
      ocupacion: item.ocupacion,
      telefono: item.telefono,
      edad: item.edad,
      sexo: item.sexo,
      estado: item.estado,

      diabetes: item.diabetes,
      dificultadrespiratoria: item.dificultadrespiratoria,
      hipertension: item.hipertension,
      cardiopatias: item.cardiopatias,
      hemorragia: item.cardiopatias,
      hepatitis: item.cardiopatias,
      endocrino: item.endocrino,
      embarazo: item.embarazo,
      convulsiones: item.convulsiones,
      renales: item.renales,
      fiebre: item.fiebre,
      alergia: item.alergia,

      sangre: item.sangre,
      talla: item.talla,
      peso: item.peso,
      adicciones: item.adicciones,
      hereditarios: item.hereditarios,
      glucosa: item.glucosa,
      ta: item.ta,

      dientes: item.dientes,
      atm: item.atm,
      tejidos: item.tejidos,
      observaciones: item.observaciones
    })
    console.log(this.paciente.value);
  }
}