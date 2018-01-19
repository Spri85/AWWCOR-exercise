import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  @Output() newDepartment = new EventEmitter<Department>();
  addDepartmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  createForm() {
    this.addDepartmentForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Department, valid: boolean}) {
    if (valid) {
      this.newDepartment.emit(value);
      this.addDepartmentForm.reset();
    }
  }

  get name() {
    return this.addDepartmentForm.get('name');
  }

  get description() {
    return this.addDepartmentForm.get('description');
  }
}
