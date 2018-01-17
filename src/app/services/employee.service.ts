import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/emploee.model';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeesAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees');
  }

  addEmploee(newEmployee: Employee) {
    return this.http.post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees', newEmployee);
  }

  deleteEmployeeById(id: number) {
    this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees/' + id);
  }
}
