import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Receta } from 'src/app/models/receta';
import { LoginService } from 'src/app/services/login.service';
import { PlanService } from 'src/app/services/plan.service'; 

@Component({
  selector: 'app-planes-recomendados',
  templateUrl: './planes-recomendados.component.html',
  styleUrls: ['./planes-recomendados.component.css']
})
export class PlanesRecomendadosComponent implements OnInit {
  planes: Plan[] = [];

  constructor(
    private loginService:LoginService,
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.getPlanes();

  }

  getPlanes() {
    this.planService.getPlanes().subscribe((data: Plan[]) => {
      this.planes=data;
      console.log(data);
    });
  }

}
