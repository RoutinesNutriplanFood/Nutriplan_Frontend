import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from 'src/app/models/receta'; 
import { RecetaService } from 'src/app/services/receta.service'; 


@Component({
  selector: 'app-modificar-recetas',
  templateUrl: './modificar-recetas.component.html',
  styleUrls: ['./modificar-recetas.component.css']
})
export class ModificarRecetasComponent implements OnInit {
  receta!: Receta;

  myForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private recetaService: RecetaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(40)]],
      ingredientes:['',[Validators.required, Validators.maxLength(150)]],
      instrucciones:['',[Validators.required, Validators.maxLength(500)]],
      propiedades:['',[Validators.required, Validators.maxLength(150)]],
    })
    this.checkStorage();
  }

  updateReceta(): void {
    if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach((field) => {
        const control:any = this.myForm.get(field);
        console.log(field, control.errors);
      }); 
      return;
    }

    const updatedReceta: Receta = {
      id: this.receta.id,
      name: this.myForm.get('name')?.value,
      ingredientes: this.myForm.get('ingredientes')?.value,
      instrucciones: this.myForm.get('instrucciones')?.value,
      propiedades: this.myForm.get('propiedades')?.value
    };

    this.recetaService.updateReceta(updatedReceta.id, updatedReceta)
    .subscribe({
      next: (data)=>{
        this.snackBar.open('Receta actualizada correctamente', 'Cerrar', {
          duration: 3000
        })
        this.router.navigate(['/lista-receta']);
      },
      error:(err)=>{
        console.log(err);
          this.snackBar.open('Error al actualizar la receta', 'Cerrar', {
            duration: 3000
          });
      }
    })
    
  }

  checkStorage(){
    const recetaedit:any = localStorage.getItem("recetaforedit");
    if(recetaedit){
      this.receta = JSON.parse(recetaedit);
      this.myForm.patchValue(this.receta);
    }
    else{
      console.log("no hay datos");
    }
  }
}