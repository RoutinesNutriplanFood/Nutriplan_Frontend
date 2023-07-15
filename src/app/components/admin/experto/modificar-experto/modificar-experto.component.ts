import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee'; 
import { EmployeeService } from 'src/app/services/employee.service'; 

@Component({
  selector: 'app-modificar-experto',
  templateUrl: './modificar-experto.component.html',
  styleUrls: ['./modificar-experto.component.css']
})
export class ModificarExpertoComponent implements OnInit {
  experto!: Employee;

  myForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(10)]],
      edad:['',[Validators.required, Validators.maxLength(2)]],
      presentacion:['',[Validators.required, Validators.maxLength(500)]],
      especialidad:['',[Validators.required, Validators.maxLength(100)]],
      phone:['',[Validators.required]],
    })
    this.checkStorage();
  }

  updateEmployees(): void {
     if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach((field) => {
        const control:any = this.myForm.get(field);
        console.log(field, control.errors);
      }); 
      return;
    }

    const updatedEmployee: Employee = {
      id: this.experto.id,
      name: this.myForm.get('name')?.value,
      edad: this.myForm.get('edad')?.value,
      especialidad: this.myForm.get('especialidad')?.value,
      presentacion: this.myForm.get('presentacion')?.value,
      phone: this.myForm.get('phone')?.value
    };

    this.employeeService.updateEmployee(updatedEmployee.id, updatedEmployee)
    .subscribe({
      next: (data)=>{
        this.snackBar.open('Experto actualizado correctamente', 'Cerrar', {
          duration: 3000
        })
        this.router.navigate(['/experto']);
      },
      error:(err)=>{
        console.log(err);
          this.snackBar.open('Error al actualizar el experto', 'Cerrar', {
            duration: 3000
          });
      }
    })
    
  }

  checkStorage(){
    const useredit:any = localStorage.getItem("userforedit");
    if(useredit){
      this.experto = JSON.parse(useredit);
      this.myForm.patchValue(this.experto);
    }
    else{
      console.log("no hay datos");
    }
  }
}
