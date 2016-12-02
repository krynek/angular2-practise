import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IWorker } from './worker';

@Injectable()
export class WorkerService {
	private _workerUrl = 'https://angular2practise.firebaseio.com/workers.json';
	
	constructor(private _http: Http, private db: AngularFireDatabase) {
	}

	// getWorkers(): Observable<IWorker[]> {
	// 	return this._http.get(this._workerUrl)
	// 		.map((response: Response) => <IWorker>response.json())
	// 		.catch(this.handleError);
	// }

	// getWorker(id: number): Observable<IWorker> {
	// 	return this.getWorkers()
	// 		.map((workers: IWorker[]) => workers.find(w => w.id === id));
	// }

	// Firebase services
	getAllWorkers(): Observable<IWorker[]> {
		return this.db.list('workers')
	}

	getSingleWorker(id: any): Observable<any> {
		return this.db.object('workers/' + id, { preserveSnapshot: true })
	}

	addWorker(worker: any) {
		return this.db.list('workers').push(worker);
  }

	editWorker(worker: any, id: any) {
		

		// var updates = {};
		// updates[id] = worker;

		// return firebase.database().ref('workers').update(updates)
		return this.db.list('workers').update(id, worker)
  }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}

}