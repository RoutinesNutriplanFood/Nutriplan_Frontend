import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-experto',
  templateUrl: './listar-experto.component.html',
  styleUrls: ['./listar-experto.component.css']
})
export class ListarExpertoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'especialidad', 'presentacion', 'phone','actions'];
  dataSource = new MatTableDataSource<Employee>();
  myForm!:FormGroup;

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(
    private employeeService: EmployeeService,
    private snackBar:MatSnackBar,
    private fb:FormBuilder,
    private router:Router
    ) {
      this.buildForm();
      
    }

  ngOnInit(): void {
    this.controlSearch?.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(search=>{
      console.log(search)
    })
    this.getEmployees();
  }

  buildForm(){
    this.myForm=this.fb.group({
      search:['']
    })
  }

  get controlSearch(){
    return this.myForm.get('search');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Employee) => e.id !== id);
      this.snackBar.open("Experto eliminado", '', { duration: 3000 });
    }, (error) => {
      console.log(error); // Manejar cualquier error que ocurra durante la eliminación
    });
  }
  
  editEmployee(e: Employee){
    localStorage.setItem("userforedit",JSON.stringify(e));
    this.router.navigate(["/modificar-experto"], {
      //queryParams:{id:e.id}
    });
  }

  
}

