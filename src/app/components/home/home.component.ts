import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { LoginService } from 'src/app/services/login.service';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recetas: Receta[] = [];

  constructor(
    private loginService:LoginService,
    private recetaService: RecetaService
  ) { }

  ngOnInit(): void {
    this.getRecetas();

  }

  getRecetas() {
    this.recetaService.getRecetas().subscribe((data: Receta[]) => {
      this.recetas=data;
      console.log(data);
    });
  }

  saveReceta(e:Receta){
    let recetasGuardadas:any = localStorage.getItem("recetasGuardadas");
    recetasGuardadas = JSON.parse(recetasGuardadas);
    if(recetasGuardadas && recetasGuardadas.length>0){
      recetasGuardadas.push(e);
      localStorage.setItem("recetasGuardadas",JSON.stringify(recetasGuardadas));
      return;
    }
    localStorage.setItem("recetasGuardadas",JSON.stringify([e]));
  }

}
