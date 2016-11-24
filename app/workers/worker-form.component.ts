import { Component } from '@angular/core';

import { Worker } from './worker';

@Component({
  selector: 'worker-form',
  templateUrl: 'app/workers/worker-form.component.html'
})
export class WorkerForm {
  departments = [ 'Human Resources', 'Legal', 'Services', 'Sales', 'Marketing' ];
}