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
  alergia = '';
  paciente_name = '';
  sexo = '';

  receta: FormGroup;
  paciente: FormGroup;

  constructor(private route: Router, private fb: FormBuilder, private db: PacienteService) { }

  new(){
    this.add = true;
    this.title = "Nuevo paciente";
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
      curp: [''],

      diabetes: false,
      dificultadrespiratoria: false,
      hipertension: false,
      cardiopatias: false,
      hemorragia: false,
      hepatitis: false,
      endocrino: false,
      embarazo: false,
      convulsiones: false,
      renales: false,
      fiebre: false,
      alergia: false,

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
    this.alergia = alergia;
    this.index = position;
    this.sexo = sexo;

    console.log("alergia " + this.alergia, " edad " + this.edad);
    
  }

  register(form: any){
    console.log(form);
    
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
    form.alergia = this.alergia;
    form.sexo = this.sexo;
    if(form.diagnostico == 'CARIES DENTAL'){
      form.terminologia = 'K02';
    }
    if(form.diagnostico == 'CARIES LIMITADA AL ESMALTE'){
      form.terminologia = 'K020';
    }
    if(form.diagnostico == 'CARIES DE LA DENTINA'){
      form.terminologia = 'K021';
    }
    if(form.diagnostico == 'CARIES DEL CEMENTO'){
      form.terminologia = 'K022';
    }
    if(form.diagnostico == 'CARIES DENTARIA DETENIDA'){
      form.terminologia = 'K023';
    }
    if(form.diagnostico == 'CARIES CON EXPOSICION PULPAR'){
      form.terminologia = 'K025';
    }
    if(form.diagnostico == 'OTRAS CARIES DENTALES'){
      form.terminologia = 'K028';
    }
    if(form.diagnostico == 'CARIES DENTAL, NO ESPECIFICADA'){
      form.terminologia = 'K029'
    }
    if(form.diagnostico == 'PERIODONTOSIS'){
      form.terminologia = 'K054';
    }
    if(form.diagnostico == 'GINGIVITIS Y ENFERMEDADES PERIODONTALES'){
      form.terminologia = 'K05';
    }
    if(form.diagnostico == 'PERIODONTITIS AGUDA'){
      form.terminologia = 'K052';
    }
    if(form.diagnostico == 'PERIODONTITIS CRONICA'){
      form.terminologia = 'K053';
    }
    if(form.diagnostico == 'ESTOMATITIS AFTOSA RECURRENTE'){
      form.terminologia = 'K120';
    }
    if(form.diagnostico == 'PULPITIS'){
      form.terminologia == 'K040';
    }
    if(form.diagnostico == 'CELULITIS Y ABSCESO DE BOCA'){
      form.terminologia = 'K122';
    }
    if(form.diagnostico == 'OTRO DOLOR CRONICO'){
      form.terminologia = 'R522';
    }
    if(form.diagnostico == 'TRASTORNOS DE LA ARTICULACION TEMPOROMAXILAR'){
      form.terminologia = 'K076';
    }

    console.log("FORMULARIO");
    console.log(form);
    

    let key = this.db.agregarReceta(form);

    console.log(key.key);
    
    this.route.navigate(['receta/' + key.key])
    //this.ngOnInit();
  }

  historial(posicion){
    this.route.navigate(['/historial/' + this.keys[posicion]])
  }

  detalles(item: any, posicion){
    this.index = posicion;
    this.add = false;
    this.title = item.nombre;

    this.paciente = this.fb.group({
      nombre: item.nombre,
      direccion: item.ocupacion,
      ocupacion: item.ocupacion,
      telefono: item.telefono,
      edad: item.edad,
      sexo: item.sexo,
      estado: item.estado,
      curp: item.curp,

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

  update(form:any){
    console.log("nuevo formulario");
    console.log(form);
    console.log("key:" + this.keys[this.index]);
    
    this.db.updatePaciente(this.keys[this.index], form);
    this.ngOnInit();
  }
}