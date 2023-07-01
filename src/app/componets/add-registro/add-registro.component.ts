import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.component.html',
  styleUrls: ['./add-registro.component.css']
})
export class AddRegistroComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private registroService:RegistroService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(50)]],
      cantidad:['',[Validators.required, Validators.maxLength(2)]],
    })
  }

  saveRegistro(){
    
    const registro: Registro={
      id:0,
      name:this.myForm.get('name')?.value,
      cantidad:this.myForm.get('cantidad')?.value,
    };
    this.router.navigate(["/registro"])
    this.registroService.addRegistro(registro)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/registros']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
