import { Component,OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.component.html',
  styleUrls: ['./mis-recetas.component.css']
})
export class MisRecetasComponent implements OnInit{
  
  recetas:Receta[]=[];

  ngOnInit(): void {

    this.checkStorage();
  }
  checkStorage(){
    const recetasGuardadas:any = localStorage.getItem("recetasGuardadas");
    if(recetasGuardadas){
      this.recetas = JSON.parse(recetasGuardadas);
    }
    else{
      console.log("no hay datos");
    }
  }
}
