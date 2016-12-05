import { Component, Inject, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UIRouter } from 'ui-router-ng2';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

/**
 * Worker Add/Edit Component
 */
@Component({
  selector: 'worker-form',
  styleUrls: [ 'app/workers/form/worker-form.component.css' ],
  templateUrl: 'app/workers/form/worker-form.component.html'
})
/**
 * Class uses for Add/Edit Worker
 */
export class WorkerForm implements OnInit {
  errorMessage: string;

  departments: string[] = [ 'Human Resources', 'Legal', 'Services', 'Sales', 'Marketing' ];

  model = new Worker('','','','','default','http://softwarehut.com/wp-content/themes/sh/assets/images/team/jan_lapinski.jpg');

  submitted: boolean = false;
  hasDepartmentError: boolean = false;

  currId: any;
  currState: string;
  editFlag: boolean = false;
  
  /**
   * Inject "workerEdit" (resolve data)
   * @param {Observable} editObserver
   */
  constructor(@Inject('workerEdit') public editObserver, private _workerService: WorkerService, _router: UIRouter) {
    this.currState = _router.globals.$current.name;
  }

  /**
   * Submit form 
   * Call "WorkerService" method to add worker
   * @param {NgForm} form
   */
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

  /**
	 * Subscribe "editObserver" to get data from Firebase
   * Using original snapshot to get $key value 
	 */
  ngOnInit() {
    if(this.currState === 'workerEdit') {
      this.editFlag = true;
      this.editObserver.subscribe(
        snapshot => {
          this.model = snapshot.val(),
          this.currId = snapshot.key
        },
        error => this.errorMessage = <any>error
      );
    }
  }

  /**
   * Validate select 
   * @param {string} value 
   */
  validateDepartments(value) {
    if (value === 'default')
      this.hasDepartmentError = true;
    else 
      this.hasDepartmentError = false;
  }
}