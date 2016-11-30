import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WorkerService } from './worker.service';
import { Worker } from './worker';

@Component({
  selector: 'worker-form',
  styleUrls: [ 'app/workers/worker-form.component.css' ],
  templateUrl: 'app/workers/worker-form.component.html'
})
export class WorkerForm {
  response: string;

  departments = [ 'Human Resources', 'Legal', 'Services', 'Sales', 'Marketing' ];

  model = new Worker( 11, 'Jacek', 'Placek', '10/12/1987', 'jacek@placek.pl', 
  	'default', 'http://softwarehut.com/wp-content/themes/sh/assets/images/team/michal_krynski.jpg');

  submitted = false;
  hasDepartmentError = false;

  constructor(private _workerService: WorkerService) {

  }

  onsubmit(form: NgForm) {
  	this.submitted = true;
  }

  validateDepartments(value) {
    if (value === 'default')
      this.hasDepartmentError = true;
    else 
      this.hasDepartmentError = false;
  }

  setWorker(firstName: string, lastName: string, birthdate: string, email: string, department: string, avatar: string) {
    firebase.database().ref('/workers').push({
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      email: email,
      department: department,
      avatar: avatar
    });
  }

  get Diagnostic() {
  	return JSON.stringify(this.model);
  }
}