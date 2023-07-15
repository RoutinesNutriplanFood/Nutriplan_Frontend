import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Employee } from 'src/app/models/employee'; 

import { EmployeeService } from 'src/app/services/employee.service'; 

@Component({
  selector: 'app-experto-recomendado',
  templateUrl: './experto-recomendado.component.html',
  styleUrls: ['./experto-recomendado.component.css']
})
export class ExpertoRecomendadoComponent implements OnInit {
  expertos: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();

  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.expertos=data;
      console.log(data);
    });
  }

}