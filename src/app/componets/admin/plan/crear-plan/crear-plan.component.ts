import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private planService:PlanService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(50)]],
      descripcion:['',[Validators.required, Validators.maxLength(500)]],
      duracion:['',[Validators.required, Validators.maxLength(2)]],
      objetivos:['',[Validators.required, Validators.maxLength(150)]],
      restricciones:['',[Validators.required, Validators.maxLength(150)]],
    })
  }

  savePlan(){
    
    const plan: Plan={
      id:0,
      name:this.myForm.get('name')?.value,
      descripcion:this.myForm.get('descripcion')?.value,
      duracion:this.myForm.get('duracion')?.value,
      objetivos:this.myForm.get('objetivos')?.value,
      restricciones:this.myForm.get('restricciones')?.value,
    };

    this.planService.addPlan(plan)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/lista-plan']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
