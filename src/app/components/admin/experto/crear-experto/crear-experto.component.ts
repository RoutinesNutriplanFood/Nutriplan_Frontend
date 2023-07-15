import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-crear-experto',
  templateUrl: './crear-experto.component.html',
  styleUrls: ['./crear-experto.component.css']
})
export class CrearExpertoComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(10)]],
      edad:['',[Validators.required, Validators.maxLength(2)]],
      presentacion:['',[Validators.required, Validators.maxLength(150)]],
      especialidad:['',[Validators.required, Validators.maxLength(100)]],
      phone:['',[Validators.required]],
    })
  }

  saveEmployee(){
    
    const employee: Employee={
      id:0,
      name:this.myForm.get('name')?.value,
      phone:this.myForm.get('phone')?.value,
      edad:this.myForm.get('edad')?.value,
      presentacion:this.myForm.get('presentacion')?.value,
      especialidad:this.myForm.get('especialidad')?.value,
    };

    this.employeeService.addEmployee(employee)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/experto']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
