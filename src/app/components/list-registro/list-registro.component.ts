import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { RegistroService } from 'src/app/services/registro.service';
import { Registro } from '../../models/registro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list-registro',
  templateUrl: './list-registro.component.html',
  styleUrls: ['./list-registro.component.css'],
})
export class ListRegistroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cantidad', 'date'];
  dataSource = new MatTableDataSource<Registro>();
  myForm!:FormGroup;

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(
    private registroService: RegistroService,
    private snackBar:MatSnackBar,
    private fb:FormBuilder,
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
    this.getRegistros();
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
    console.log(event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRegistros() {
    this.registroService.getRegistros().subscribe((data: Registro[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteRegistro(id:number){
    this.registroService.deleteRegistro(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Registro)=>{
        this.snackBar.open("Registro eliminado",'',{
          duration:3000,
        })
        return e.id!=id?e:false
      })
    })
  }
}
