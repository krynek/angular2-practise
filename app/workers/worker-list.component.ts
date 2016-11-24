import { Component, Input, Inject, OnInit } from '@angular/core';

import { WorkerService } from './worker.service';
import { IWorker } from './worker';


@Component({
	templateUrl: 'app/workers/worker-list.component.html',
	// inputs: ['workerList']
})
export class WorkerList implements OnInit {
	workers: IWorker[];
	errorMessage: string;
	constructor(@Inject("workerList") public listObserver) {
		console.log(this);
	}

	ngOnInit(): void {
		this.listObserver.subscribe(workers => this.workers = workers, error => this.errorMessage = <any>error);
	}

}