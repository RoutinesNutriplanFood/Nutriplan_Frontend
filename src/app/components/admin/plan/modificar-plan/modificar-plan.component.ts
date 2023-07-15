import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Plan } from 'src/app/models/plan'; 
import { PlanService } from 'src/app/services/plan.service';  

@Component({
  selector: 'app-modificar-plan',
  templateUrl: './modificar-plan.component.html',
  styleUrls: ['./modificar-plan.component.css']
})
export class ModificarPlanComponent implements OnInit {
  plan!: Plan;

  myForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private planService: PlanService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(40)]],
      descripcion:['',[Validators.required, Validators.maxLength(500)]],
      duracion:['',[Validators.required, Validators.maxLength(2)]],
      objeticos:['',[Validators.required, Validators.maxLength(150)]],
      restricciones:['',[Validators.required, Validators.maxLength(150)]],
    })
    this.checkStorage();
  }

  updatePlan(): void {
    if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach((field) => {
        const control:any = this.myForm.get(field);
        console.log(field, control.errors);
      }); 
      return;
    }

    const updatedPlan: Plan = {
      id: this.plan.id,
      name: this.myForm.get('name')?.value,
      descripcion: this.myForm.get('descripcion')?.value,
      duracion: this.myForm.get('duracion')?.value,
      objeticos: this.myForm.get('objeticos')?.value,
      restricciones: this.myForm.get('restricciones')?.value
    };

    this.planService.updatePlan(updatedPlan.id, updatedPlan)
    .subscribe({
      next: (data)=>{
        this.snackBar.open('Plan actualizado correctamente', 'Cerrar', {
          duration: 3000
        })
        this.router.navigate(['/lista-plan']);
      },
      error:(err)=>{
        console.log(err);
          this.snackBar.open('Error al actualizar el plan', 'Cerrar', {
            duration: 3000
          });
      }
    })
    
  }

  checkStorage(){
    const planedit:any = localStorage.getItem("planforedit");
    if(planedit){
      this.plan = JSON.parse(planedit);
      this.myForm.patchValue(this.plan);
    }
    else{
      console.log("no hay datos");
    }
  }
}