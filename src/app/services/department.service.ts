
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient) { }


  getDepartmentsAll(): Observable<Department[]> {
    return this.http.get<Department[]>('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/');
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id);
  }

  addDepartment(newDepartment: Department) {
    return this.http.post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/', newDepartment);
  }

  deleteDepartmentById(id: number) {
    return this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id);
  }


  countEmploeesInDepartment(idDepartment: number): Observable<number> {
    return this.http.get<number>('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees/count/' + idDepartment);
  }

}
