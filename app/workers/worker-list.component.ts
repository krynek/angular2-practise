import { Component, OnInit } from '@angular/core';

import { WorkerService } from './worker.service';
import { IWorker } from './worker';


@Component({
	selector: 'worker-list',
	templateUrl: 'app/workers/worker-list.component.html'
})
export class WorkerList implements OnInit {
	title: string = 'Worker list';
	errorMessage: string;
	workers: IWorker[];

	constructor(private _workerService: WorkerService) {

	}

	ngOnInit(): void {
		this._workerService.getWorkers()
			.subscribe(workers => this.workers = workers, error => this.errorMessage = <any>error);
	}

}