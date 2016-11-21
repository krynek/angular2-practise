import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IWorker } from './worker';
import { WorkerService } from './worker.service';

@Component({
	templateUrl: 'app/workers/worker.component.html'
})
export class Worker implements OnInit {
	pageTitle: string;
	worker: IWorker;
	errorMessage: string;
	private sub: Subscription;
	
	constructor(private _router: Router,
				private _route: ActivatedRoute,
				private _workerService: WorkerService) {
	}

	ngOnInit(): void {
		this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getWorker(id);
        });
	}

	getWorker(id: number) {
        this._workerService.getWorker(id).subscribe(
            worker => this.worker = worker,
            error => this.errorMessage = <any>error);
    }
}