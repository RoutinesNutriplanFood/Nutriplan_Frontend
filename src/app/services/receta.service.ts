import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Receta } from '../models/receta';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getRecetas() {
    return this.http.get<Receta[]>(this.basePath + '/recetas');
  }

  addReceta(receta: Receta){
    return this.http.post<Receta>(this.basePath + '/recetas', receta);
  }

  updateReceta(id:any,receta: Receta){
    return this.http.put<Receta>(`${this.basePath}/${id}`, receta);
  }


  deleteReceta(id: any) {
    return this.http.delete(this.basePath  + `/recetas/${id}`);
  }
}
