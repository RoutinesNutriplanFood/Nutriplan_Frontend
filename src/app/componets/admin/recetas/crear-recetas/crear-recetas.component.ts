import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Receta } from 'src/app/models/receta';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-crear-recetas',
  templateUrl: './crear-recetas.component.html',
  styleUrls: ['./crear-recetas.component.css']
})
export class CrearRecetasComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private recetaService:RecetaService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(50)]],
      ingredientes:['',[Validators.required, Validators.maxLength(150)]],
      instrucciones:['',[Validators.required, Validators.maxLength(500)]],
      propiedades:['',[Validators.required, Validators.maxLength(150)]]
    })
  }

  saveReceta(){
    
    const receta: Receta={
      id:0,
      name:this.myForm.get('name')?.value,
      ingredientes:this.myForm.get('ingredientes')?.value,
      instrucciones:this.myForm.get('instrucciones')?.value,
      propiedades:this.myForm.get('propiedades')?.value
    };

    this.recetaService.addReceta(receta)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/listar-receta']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
