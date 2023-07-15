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
  user:any;

  constructor( 
    private loginService:LoginService, 
    private router:Router
    ) {}

  ngOnInit(): void {
    

      this.loginService.islogged().subscribe(response =>{
        console.log("Hay un logueado?",response)
        this.showMenu=response;
        this.user = this.loginService.getCurrentAuthUser 
      })

    
  }
  cerrarSesion(){
    this.loginService.logout();
    this.router.navigate(["/login"])
    console.log("a")
  }
  

}
