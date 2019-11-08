import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private firebase: AngularFireDatabase) { }

  agregar(user: any){
    return this.firebase.list('paciente').push(user);
  }

  getAll(){
    

    this.firebase.list('paciente').snapshotChanges().subscribe(res => {
      res.forEach(doc => {

      })
    })
  }

}
