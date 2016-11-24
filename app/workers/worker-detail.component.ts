import { Component, OnInit, Input, Inject } from '@angular/core';

import { IWorker } from './worker';
import { WorkerService } from './worker.service';

@Component({
	templateUrl: 'app/workers/worker-detail.component.html',
	// inputs: ['workerDetail']
})
export class WorkerDetail {
	worker: IWorker;
	workers: IWorker[];
	errorMessage: string;
	constructor(@Inject("workerDetail") public detailObserver) {
		console.log(this);
	}
	// constructor(private workerService: WorkerService, @Inject("workerDetail") private workerId) {
	// 	console.log(this.workerId);
	// }

	ngOnInit(): void {
		this.detailObserver.subscribe(worker => this.worker = worker, error => this.errorMessage = <any>error);
	}

	// ngOnInit(): void {
	// 	this.workerService.getWorker(this.workerId)
	// 		.subscribe(worker => this.worker = worker, error => this.errorMessage = <any>error);
	// }
}