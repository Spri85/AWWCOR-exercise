import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DepartmentService } from './services/department.service';
import {RouterModule, Routes} from '@angular/router';

import { DepartmentComponent } from './components/department/department.component';
import { AddDepartmentComponent } from './components/manage-departments/add-department/add-department.component';
import {ManageDepartmentsComponent} from './components/manage-departments/manage-departments.component';


const appRoutes: Routes = [
  {path: 'employee/:id', component: EmployeeDetailsComponent },
  {path: 'department/:id', component: DashboardComponent },
  {path: 'manage-departments', component: ManageDepartmentsComponent },
  {path: '', component: DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    ManageDepartmentsComponent,
    DepartmentComponent,
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
