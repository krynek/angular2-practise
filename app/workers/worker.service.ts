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
	private list = this._db.list('workers');

/**
 * @constructor
 * @param {Http} - Http Service
 * @param {AngularFireDatabase} - AngularFire2 Database
 */
	constructor(private _http: Http, private _db: AngularFireDatabase) {
	}

/**
 * Get worker list
 * @return {Observable}
 */
	getAllWorkers(): Observable<IWorker[]> {
		return this.list
	}

/**
 * Get single worker
 * @param {any} id - The $key value
 * @return {Observable}
 */
	getSingleWorker(id: any): Observable<any> {
		return this._db.object('workers/' + id, { preserveSnapshot: true })
	}

/**
 * Add new worker
 * @param {any} worker - The worker object
 * @return {Promise}
 */
	addWorker(worker: IWorker) {
		return this.list.push(worker);
  }

/**
 * Edit existing worker
 * @param {any} worker - The worker object
 * @param {any} id - The $key value
 * @return {Promise}
 */
	editWorker(worker: IWorker, id: any) {
		return this.list.update(id, worker)
  }

/**
 * Remove worker form list
 * @param {any} id - The $key value
 * @return {Promise}
 */
	removeWorker(id: any) {
		return this.list.remove(id)
	}

/**
 * Handle error
 * @param {error}
 * @return {Observable}
 */
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}