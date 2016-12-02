import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transition } from 'ui-router-ng2';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'worker-form',
  styleUrls: [ 'app/workers/form/worker-form.component.css' ],
  templateUrl: 'app/workers/form/worker-form.component.html'
})
export class WorkerForm implements OnInit {
  errorMessage: string;

  departments = [ 'Human Resources', 'Legal', 'Services', 'Sales', 'Marketing' ];

  model = new Worker('','','','','default','http://softwarehut.com/wp-content/themes/sh/assets/images/team/jan_lapinski.jpg');

  submitted = false;
  hasDepartmentError = false;

  currId: any;
  test: any;
  editFlag: boolean = false;

  constructor(@Inject('workerEdit') public editObserver, private _workerService: WorkerService) {
  }


  submitForm(form: NgForm) {
  	this.submitted = true;
    console.log(form.value);
    if(this.editFlag) {
      this._workerService.editWorker(this.model, this.currId).then(
        _ => console.log('Success'),
        err => console.log('Error')
      )
    } else {
      this._workerService.addWorker(this.model).then(
        _ => console.log('Success'),
        err => console.log('Error')
      )
    }
  }

  ngOnInit() {
    if(typeof this.currId !== 'undefined' || this.currId != null) {
      this.editFlag = true;
      this.editObserver.subscribe(
        snapshot => {
          this.model = snapshot.val(),
          this.currId = snapshot.key
        },
        error => this.errorMessage = <any>error
      );
    }
    console.log(this.model);
  }

  validateDepartments(value) {
    if (value === 'default')
      this.hasDepartmentError = true;
    else 
      this.hasDepartmentError = false;
  }
}