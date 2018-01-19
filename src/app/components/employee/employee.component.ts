import { HttpErrorResponse } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/emploee.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  employees: Employee[] = [];
  employeesFiltered: Employee[] = [];
  employeeSub: Subscription;
  departmentId: number;

  constructor(public employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.populateEmployees();
  }

  private populateEmployees() {
    this.employeeSub = this.employeeService
      .getEmployeesAll()
      .switchMap(employees => {
        this.employees = employees;
        return this.route.paramMap;
      })
      .subscribe(params => {
        this.departmentId = +params.get('id');
        this.applyFilter();
      });
  }

    private applyFilter() {
      this.employeesFiltered = (this.departmentId) ?
        this.employees.filter(empl => empl.departmentId === this.departmentId) :
        this.employees;
    }


  ngOnDestroy() {
    this.employeeSub.unsubscribe();
  }

}
