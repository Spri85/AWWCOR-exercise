import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/emploee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  employees: Employee[];
  employeeSub: Subscription;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeSub = this.employeeService.getEmployeesAll()
      .subscribe(
        // Success responses
        employees => this.employees = employees,
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occured: ', err.error.message);
          }
        }
      );
  }

  ngOnDestroy() {
    this.employeeSub.unsubscribe();
  }

}
