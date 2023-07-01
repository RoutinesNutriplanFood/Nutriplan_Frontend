import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-modificar-experto',
  templateUrl: './modificar-experto.component.html',
  styleUrls: ['./modificar-experto.component.css']
})
export class ModificarExpertoComponent implements OnInit {
  editForm: FormGroup;
  selectedEmployee: Employee | null = null;
  isEditing: boolean = false;
  dataSource = new MatTableDataSource<Employee>();

  constructor(
    private employeeService: EmployeeService,
    private snackBar:MatSnackBar,
    private fb: FormBuilder
    
    ) {
    
    // Inicializar el formulario de edición
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      especialidad: ['', Validators.required],
      presentacion: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  editExperto(employee: Employee) {
    this.selectedEmployee = employee;
    this.isEditing = true;
  }
  updateEmployee() {
    if (this.editForm.valid && this.selectedEmployee) {
      // Llamar al método de actualización del servicio
      this.employeeService.updateEmployee(this.selectedEmployee!.id, this.selectedEmployee!).subscribe(
        (updatedEmployee: Employee) => {
          // Actualizar el experto en la tabla de datos
          const index = this.dataSource.data.findIndex(e => e.id === updatedEmployee.id);
          this.dataSource.data[index] = updatedEmployee;
          this.dataSource._updateChangeSubscription();
  
          // Restablecer el estado de edición
          this.isEditing = false;
          this.selectedEmployee = null;
  
          // Mostrar mensaje de éxito
          this.snackBar.open("Experto actualizado", '', { duration: 3000 });
        },
        (error) => {
          console.log(error); // Manejar cualquier error que ocurra durante la actualización
        }
      );
    }
  }
  
  cancelEdit() {
    // Restablecer el estado de edición
    this.isEditing = false;
    this.selectedEmployee = null;
  }

}
