import { Component, Input, Inject, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; 

import { WorkerService } from './worker.service';
import { IWorker } from './worker';


@Component({
	templateUrl: 'app/workers/worker-list.component.html',
	// inputs: ['workerList']
})
export class WorkerList implements OnInit {
	workers: IWorker[];
	errorMessage: string;
	constructor(@Inject("workerList") public listObserver, private af: AngularFire) {
		// console.log(this);
		// const workers$: FirebaseListObservable<IWorker[]> = af.database.list('workers');

		// workers$.subscribe(
		// 	// console.log
		// 	workers => this.workers = workers, 
		// 	error => this.errorMessage = <any>error
		// );
	}

	ngOnInit(): void {
		this.listObserver.subscribe(
			workers => this.workers = workers, 
			error => this.errorMessage = <any>error
		);
	}

}