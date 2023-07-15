import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
  
})
export class CuentaComponent implements OnInit{
  nombreUsuario?: string;
  emailUsuario?: string;
  alturaUsuario?: number;
  pesoUsuario?: string;
  showMenu:boolean=false;
  user:any;

  constructor(
    private loginService:LoginService, 
    private router:Router,
    public dialog: MatDialog

  ) {
    // Aquí puedes obtener los datos del usuario y asignarlos a las variables correspondientes
    let user = this.loginService.getCurrentAuthUser
      this.nombreUsuario = user.name;
      console.log(this.nombreUsuario);
      console.log(user);
      this.emailUsuario = user.email;
      this.alturaUsuario = user.altura;
      this.pesoUsuario = user.peso;

  }
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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  
  
}
