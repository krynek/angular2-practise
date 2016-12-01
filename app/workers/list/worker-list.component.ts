import { Component, Input, Inject, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; 

import { WorkerService } from '../worker.service';
import { IWorker } from '../worker';


@Component({
	templateUrl: 'app/workers/list/worker-list.component.html',
	// inputs: ['workerList']
})
export class WorkerList implements OnInit {
	workers: IWorker[];
	errorMessage: string;
	constructor(@Inject("workerList") public listObserver, private af: AngularFire) {
		console.log(this);
	}

	ngOnInit(): void {
		this.listObserver.subscribe(
			workers => this.workers = workers, 
			error => this.errorMessage = <any>error
		);
	}

	removeWorker(id: any) {
		return firebase.database().ref('workers/' + id).remove()
	}

}