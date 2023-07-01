import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    //Cuando el usuario se loguea tenemos que actualizar el estado de la aplicacion.
    //mover al login
    this.loginService.setCurrentAuthUser(true)
    console.log("hola")
  }

}
