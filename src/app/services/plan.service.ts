import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getPlanes() {
    return this.http.get<Plan[]>(this.basePath + "/planes");
  }

  addPlan(plan: Plan){
    return this.http.post<Plan>(this.basePath + '/planes', plan);
  }

  updatePlan(id:any,plan: Plan){
    return this.http.put<Plan>(`${this.basePath}/edit-planes/${id}`, plan);
  }


  deletePlan(id:any){
    return this.http.delete<Plan>(this.basePath  + `/planes/${id}`)
  }
}
