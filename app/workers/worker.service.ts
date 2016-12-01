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

	getWorkers(): Observable<IWorker[]> {
		return this._http.get(this._workerUrl)
			.map((response: Response) => <IWorker>response.json())
			.catch(this.handleError);
	}

	getWorker(id: number): Observable<IWorker> {
		return this.getWorkers()
			.map((workers: IWorker[]) => workers.find(w => w.id === id));
	}

	// Firebase services
	getAllWorkers(): Observable<IWorker[]> {
		return this.db.list('workers')
	}

	getSingleWorker(id: any): Observable<IWorker> {
		return this.db.object('workers/' + id)
	}

	addWorker(worker: any) {
		// Get a key for a new Post.
		var newPostKey = firebase.database().ref('workers').push().key;

		// Add new record to the worker list.
		var updates = {};
		updates['/workers/' + newPostKey] = worker;

		return firebase.database().ref().update(updates);
  }

	editWorker(worker: any, id: any) {
		// Update the worker data in the worker list.
		var updates = {};
		updates['/workers/' + id] = worker;

		return firebase.database().ref().update(updates);
  }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}

}