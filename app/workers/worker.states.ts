import { Ng2StateDeclaration, Transition } from 'ui-router-ng2';

import { WorkerList } from './list/worker-list.component';
import { WorkerDetail } from './detail/worker-detail.component';
import { WorkerForm } from './form/worker-form.component';
import { WorkerService } from './worker.service';
/**
 * This file defines the states for the 'worker' module
 * The states are exported as and array and imported in the WorkerModule
 */
export let WORKER_STATES: Ng2StateDeclaration[] = [
	{
		name: 'workers',
		url: '/workers',
		component: WorkerList,
		resolve: [
			{
				token: 'workerList',
				deps: [ WorkerService ],
				resolveFn: (workerSvc: WorkerService) => 
					workerSvc.getAllWorkers()
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
					workerSvc.getSingleWorker(trans.params().id)
			}
		]
	},
	{
		name: 'workerAdd',
		url: 'worker/add',
		component: WorkerForm,
	},
	{
		name: 'workerEdit',
		url: '/:id/edit',
		component: WorkerForm,
		resolve: [
			{
				token: 'workerEdit',
				deps: [ Transition, WorkerService ],
				resolveFn: ( trans, workerSvc: WorkerService ) => 
					workerSvc.getSingleWorker(trans.params().id)
			}
		]
	}
]