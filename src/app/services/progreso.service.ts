import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProgresoService {
  basePath: string = environment.basePath;
  private logged$ = new BehaviorSubject<boolean>(false);

  
  constructor(private http: HttpClient) {}


  resetProgreso(newPeso: string, newAltura: string, id:number) {
    const resetData = {
      newPeso: newPeso,
      newAltura: newAltura
    };
  
    return this.http.put(`${this.basePath}/creates/reset-progreso/${id}`, resetData);
  }
}
