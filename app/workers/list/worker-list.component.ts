import { Component, Inject, OnInit } from '@angular/core';

import { WorkerService } from '../worker.service';
import { IWorker } from '../worker';

/**
 * Worker List Component
 */
@Component({
	templateUrl: 'app/workers/list/worker-list.component.html'
})
/**
 * Class representing a Worker List
 */
export class WorkerList implements OnInit {
	workers: IWorker[];
	errorMessage: string;
	/**
	 * Inject "workerList" (resolve data)
	 * @param {Observable} listObserver
	 */
	constructor(@Inject("workerList") public listObserver, private _workerService: WorkerService) {
	}

	/**
	 * Subscribe "listObserver" to get data from Firebase
	 */
	ngOnInit(): void {
		this.listObserver.subscribe(
			workers => this.workers = workers, 
			error => this.errorMessage = <any>error
		);
	}

	/**
	 * Call "WorkerService" method to remove worker
	 * @param {any} id
	 */
	removeWorker(id: any) {
		return this._workerService.removeWorker(id);
	}

}