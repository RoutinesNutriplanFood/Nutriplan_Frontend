import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Create } from '../models/create';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getCreates() {
    return this.http.get<Create[]>(this.basePath);
  }

  addCreate(create: Create){
    return this.http.post<Create>(this.basePath + '/creates', create);
  }

  updateCreate(id:any,create: Create){
    return this.http.put<Create>(`${this.basePath}/${id}`, create);
  }


  deleteCreate(id:any){
    return this.http.delete(this.basePath  + `/creates/${id}`)
  }
}
