import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email = '';
  password = '';
  constructor(private rote:Router) { }

  ngOnInit() {
  }

  iniciar_sesion(){
    if(this.email == 'yacziri@hotmail.com' && this.password == "1234567890"){
      localStorage.setItem('doctora', 'Yazciri Mendoza Sánchez');
      this.rote.navigate(['home']);
    }
  }
}
