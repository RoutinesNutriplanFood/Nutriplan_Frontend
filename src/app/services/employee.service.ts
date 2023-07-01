import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.basePath + "/expertos");
  }

  addEmployee(employee: Employee){
    return this.http.post<Employee>(this.basePath + "/expertos", employee);
  }

  updateEmployee(id:any,employee: Employee){
    return this.http.put<Employee>(`${this.basePath}/${id}`, employee);
  }


  deleteEmployee(id: any) {
    return this.http.delete(this.basePath  + `/expertos/${id}`);
  }
  
}
