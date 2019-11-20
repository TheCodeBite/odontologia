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
  user: any;
  login = false;
  
  constructor(private rote:Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user')
    if(this.user != null){
      this.login = true;
    }else{
      this.rote.navigate(['/']);
    }
  }

  iniciar_sesion(){
    if(this.email == 'yacziri@hotmail.com' && this.password == "1234567890"){
      localStorage.setItem('user', 'Yazciri Mendoza Sánchez');
      this.login = true;
      this.ngOnInit();
    }
  }
  
  logout(){
    localStorage.clear();
    this.ngOnInit();
    this.login = false;
  }
}
