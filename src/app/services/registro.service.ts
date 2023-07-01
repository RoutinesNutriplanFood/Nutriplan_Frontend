import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getRegistros() {
    return this.http.get<Registro[]>(this.basePath + "/registros");
  }

  addRegistro(registro: Registro){
    return this.http.post<Registro>(this.basePath + "/registros", registro);
  }

  updateRegistro(id:any,registro: Registro){
    return this.http.put<Registro>(`${this.basePath}/${id}`, registro);
  }


  deleteRegistro(id:any){
    return this.http.delete<Registro>(`${this.basePath}/${id}`)
  }
}
