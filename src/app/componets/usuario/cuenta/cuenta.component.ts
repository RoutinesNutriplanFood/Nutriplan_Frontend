import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  nombreUsuario: string;
  emailUsuario: string;
  edadUsuario: number;
  generoUsuario: string;

  constructor(
    private loginService:LoginService, 
    private router:Router

  ) {
    // Aquí puedes obtener los datos del usuario y asignarlos a las variables correspondientes
    this.nombreUsuario = "John Doe";
    this.emailUsuario = "johndoe@example.com";
    this.edadUsuario = 25;
    this.generoUsuario = "Masculino";
    
  }

  cerrarSesion(){
    this.loginService.setCurrentAuthUser(false)
    this.router.navigate(["/login"])
    console.log("a")
  }

  
  
}
