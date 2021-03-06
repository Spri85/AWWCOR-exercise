import {Component, OnDestroy, OnInit} from '@angular/core';
import {Department} from '../../models/department.model';
import {Subscription} from 'rxjs/Subscription';
import {DepartmentService} from '../../services/department.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.departmentSub.unsubscribe();
  }
}
