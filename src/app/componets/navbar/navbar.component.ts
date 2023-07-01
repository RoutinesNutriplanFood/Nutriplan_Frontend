import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  showMenu:boolean=false;

  constructor( 
    private loginService:LoginService, 
    private router:Router
    ) {}

  ngOnInit(): void {
    this.loginService.getCurrentAuthUser 
    .subscribe(user=>{
      console.log("Hay un logueado?",user)
      this.showMenu=user;
    })
  }
  cerrarSesion(){
    this.loginService.setCurrentAuthUser(false)
    this.router.navigate(["/login"])
    console.log("a")
  }
  

}
