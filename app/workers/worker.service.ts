import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IWorker } from './worker';

@Injectable()
export class WorkerService {
	private _workerUrl = 'api/workers/workers.json';
	
	constructor(private _http: Http) {
	}

	getWorkers(): Observable<IWorker[]> {
		return this._http.get(this._workerUrl)
			.map((response: Response) => <IWorker>response.json())
			.catch(this.handleError);
	}

	getWorker(id: number): Observable<IWorker> {
		return this.getWorkers()
			.map((products: IWorker[]) => products.find(w => w.id === id));
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}

}