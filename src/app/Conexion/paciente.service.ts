import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { analytics } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private firebase: AngularFireDatabase) { }
  

  agregar(user: any){
    return this.firebase.list('paciente').push(user);
  }

  agregarReceta(receta: any){
    return this.firebase.list('recetas').push(receta)
  }




  

  getKey(){
    let keys = [];

    this.firebase.list('paciente').snapshotChanges().subscribe(res => {
      res.forEach(doc => {
        keys.push(doc.key);
      })
    });

    return keys;
  }

  receta: any;

  getAllRecetas(key){
    let recetas = [];
    

    this.firebase.list('recetas').snapshotChanges().subscribe(res => {
      res.forEach(doc => {
        this.receta = doc.payload.val();
        if(key == this.receta.idPaciente){
          recetas.push(doc.payload.val())
        }
      })
    });

    return recetas;

  }

  getAll(){
    let pacientes = []
    this.firebase.list('paciente').snapshotChanges().subscribe(res => {
      res.forEach(doc => {
        pacientes.push(doc.payload.val())
      });
    });
    return pacientes;
  }

}
