import { Component, OnInit, Input, Inject } from '@angular/core';

import { IWorker } from '../worker';
import { WorkerService } from '../worker.service';

/**
 * Worker Detail Component
 */
@Component({
	templateUrl: 'app/workers/detail/worker-detail.component.html',
})
export class WorkerDetail {
	worker: IWorker;
	errorMessage: string;
	/**
	 * Inject "workerDetail" (resolve data)
	 * @param {Observable} detailObserver
	 */
	constructor(@Inject("workerDetail") public detailObserver) {
	}

	/**
	 * Subscribe 'detailObserver' to get data from Firebase
	 */
	ngOnInit(): void {
		this.detailObserver.subscribe(
			snapshot => this.worker = snapshot.val(),
			error => this.errorMessage = <any>error
		);
	}
}