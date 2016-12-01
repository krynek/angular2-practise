import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'worker-form',
  styleUrls: [ 'app/workers/form/worker-form.component.css' ],
  templateUrl: 'app/workers/form/worker-form.component.html'
})
export class WorkerForm {
  errorMessage: string;

  departments = [ 'Human Resources', 'Legal', 'Services', 'Sales', 'Marketing' ];

  model = new Worker('','','','','default','http://softwarehut.com/wp-content/themes/sh/assets/images/team/jan_lapinski.jpg');

  submitted = false;
  hasDepartmentError = false;

  constructor(private _workerService: WorkerService) {

  }

  submitForm(form: NgForm) {
  	this.submitted = true;
    console.log(form.value);
    this._workerService.addWorker(this.model).then(
      data => console.log('Success'),
      err => console.log('Error')
    )
    
  }

  validateDepartments(value) {
    if (value === 'default')
      this.hasDepartmentError = true;
    else 
      this.hasDepartmentError = false;
  }
}