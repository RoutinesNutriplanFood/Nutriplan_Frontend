import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { RecetaService } from 'src/app/services/receta.service'; 
import { Receta } from 'src/app/models/receta'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'ingredientes', 'instrucciones', 'propiedades','actions'];
  dataSource = new MatTableDataSource<Receta>();
  myForm!:FormGroup;

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(
    private recetaService: RecetaService,
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
    this.getRecetas();
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

  getRecetas() {
    this.recetaService.getRecetas().subscribe((data: Receta[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteReceta(id: any) {
    this.recetaService.deleteReceta(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Receta) => e.id !== id);
      this.snackBar.open("Receta eliminada", '', { duration: 3000 });
    }, (error) => {
      console.log(error); // Manejar cualquier error que ocurra durante la eliminación
    });
  }
  editReceta(e: Receta){
    localStorage.setItem("recetaforedit",JSON.stringify(e));
    this.router.navigate(["/modificar-receta"], {
      //queryParams:{id:e.id}
    });
  }

  
}

