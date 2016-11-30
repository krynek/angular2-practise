import { Ng2StateDeclaration, Transition } from 'ui-router-ng2';
import {Http} from "@angular/http";

import { WorkerList } from './worker-list.component';
import { WorkerDetail } from './worker-detail.component';
import { WorkerForm } from './worker-form.component';
import { WorkerService } from './worker.service';

export let WORKER_STATES: Ng2StateDeclaration[] = [
	{
		name: 'workers',
		url: '/workers',
		component: WorkerList,
		resolve: [
			{
				token: 'workerList',
				deps: [ WorkerService ],
				// resolveFn: (workerSvc: WorkerService) => workerSvc.getWorkers()
				resolveFn: (workerSvc: WorkerService) => workerSvc.getAllWorkers()
			}
		]		
	},
	{
		name: 'worker',
		url: '/:id',
		component: WorkerDetail,
		resolve: [
			{
				token: 'workerDetail',
				deps: [ Transition, WorkerService ],
				resolveFn: ( trans, workerSvc: WorkerService ) => 
					// workerSvc.getWorker(+trans.params().id)
					workerSvc.getSingleWorker(+trans.params().id)
			}
		]
	},
	{
		name: 'workerAdd',
		url: 'worker/add',
		component: WorkerForm,
	}
]