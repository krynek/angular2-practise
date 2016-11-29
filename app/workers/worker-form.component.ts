import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Worker } from './worker';

@Component({
  selector: 'worker-form',
  styleUrls: [ 'app/workers/worker-form.component.css' ],
  templateUrl: 'app/workers/worker-form.component.html'
})
export class WorkerForm {
  departments = [ 'Human Resources', 'Legal', 'Services', 'Sales', 'Marketing' ];

  model = new Worker( 11, 'Jacek', 'Placek', '10/12/1987', 'jacek@placek.pl', 
  	'default', 'http://softwarehut.com/wp-content/themes/sh/assets/images/team/michal_krynski.jpg');

  submitted = false;
  hasDepartmentError = false;

  onsubmit(form: NgForm) {
  	this.submitted = true;
    console.log(this.model);
  }

  validateDepartments(value) {
    if (value === 'default')
      this.hasDepartmentError = true;
    else 
      this.hasDepartmentError = false;
  }

  get Diagnostic() {
  	return JSON.stringify(this.model);
  }
}