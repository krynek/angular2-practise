import { Component, OnInit, Input, Inject } from '@angular/core';

import { IWorker } from './worker';
import { WorkerService } from './worker.service';

@Component({
	templateUrl: 'app/workers/worker-detail.component.html',
	// inputs: ['workerDetail']
})
export class WorkerDetail {
	worker: IWorker;
	errorMessage: string;
	constructor(@Inject("workerDetail") public detailObserver,  private _workerService: WorkerService) {
		console.log(this);
	}

	ngOnInit(): void {
		// this.detailObserver.subscribe(worker => this.worker = worker, error => this.errorMessage = <any>error);
	}
}