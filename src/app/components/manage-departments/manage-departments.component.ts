import {Component, OnDestroy, OnInit} from '@angular/core';
import {Department} from '../../models/department.model';
import {Subscription} from 'rxjs/Subscription';
import {DepartmentService} from '../../services/department.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-manage-departments',
  templateUrl: './manage-departments.component.html',
  styleUrls: ['./manage-departments.component.css']
})
export class ManageDepartmentsComponent implements OnInit, OnDestroy {

  departments: Department[];
  departmentSub: Subscription;


  constructor(public departmentService: DepartmentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.populateDepartments();
  }

  private populateDepartments() {
    this.departmentSub = this.departmentService.getDepartmentsAll()
      .subscribe(departments => this.departments = departments);
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartmentById(id).subscribe(department => this.populateDepartments());
  }

  createDepartment(newDepartment: Department) {
    this.departmentService.addDepartment(newDepartment).subscribe(department => this.populateDepartments());
  }


  ngOnDestroy() {
    this.departmentSub.unsubscribe();
  }
}

