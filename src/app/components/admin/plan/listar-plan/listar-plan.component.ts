import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/models/plan'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'descripcion', 'duracion', 'objetivos','restricciones','actions'];
  dataSource = new MatTableDataSource<Plan>();
  myForm!:FormGroup;

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(
    private planService: PlanService,
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
    this.getPlanes();
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

  getPlanes() {
    this.planService.getPlanes().subscribe((data: Plan[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deletePlan(id: any) {
    this.planService.deletePlan(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Plan) => e.id !== id);
      this.snackBar.open("Plan eliminado", '', { duration: 3000 });
    }, (error) => {
      console.log(error); // Manejar cualquier error que ocurra durante la eliminación
    });
  }
  editPlan(e: Plan){
    localStorage.setItem("planforedit",JSON.stringify(e));
    this.router.navigate(["/modificar-plan"], {
      //queryParams:{id:e.id}
    });
  }

  
}

