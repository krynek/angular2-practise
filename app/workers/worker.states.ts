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
		// component: WorkerList,
		views: {
				$default: { component: WorkerList }
		},
		resolve: [
			{
				token: 'workerList',
				deps: [ WorkerService ],
				resolveFn: (workerSvc: WorkerService) => workerSvc.getWorkers()
			}
		]		
	},
	{
		name: 'worker',
		url: 'worker/:id',
		// component: WorkerDetail,
		views: {
			$default: { component: WorkerDetail }
		},
		resolve: [
			{
				token: 'workerDetail',
				deps: [ Transition, WorkerService ],
				resolveFn: ( trans, workerSvc: WorkerService ) => 
					workerSvc.getWorker(trans.params().id)
				// resolveFn: ( trans ) => trans.params().id
			}
		]
	},
	// {
	// 	name: 'workers.detail',
	// 	url: '/:id',
	// 	views: {
	// 		'$default@app': { component: WorkerDetail }
	// 	},
	// 	resolve: [
	// 		{
	// 			token: 'workerDetail',
	// 			deps: [ 'workerList', Transition ],
	// 			resolveFn: function( workerList, trans ) { 
	// 				console.log(workerList, trans.params().id);
	// 				return workerList;
	// 			}
	// 		}
	// 	]
	// },
	// {
	// 	name: 'workerAdd',
	// 	url: 'worker/add',
	// 	component: WorkerForm,
		// resolve: [
		// 	{
		// 		token: 'workerDetail',
		// 		deps: [ Transition, WorkerService ],
		// 		resolveFn: ( trans, workerSvc: WorkerService ) => 
		// 			workerSvc.getWorker(trans.params().id)
		// 		// resolveFn: ( trans ) => trans.params().id
		// 	}
		// ]
	// }
]



// export const workersState = {
// 	name: 'workers',
// 	url: '/workers',
// 	component: WorkerList,
	// resolve: [
	// 	{
	// 		provide: 'workers', useFactory: (workerSvc: WorkerService) => {
	// 			return workerSvc.getWorkers();
	// 		},
	// 		deps: [ WorkerService ],
	// 		policy: { async: "RXWAIT" }
	// 		// resolveFn: (workerSvc: WorkerService) => workerSvc.getWorkers()
	// 	}
	// ]
// };
// export const workerState = {
// 	name: 'worker',
// 	url: '/worker/:id',
// 	component: WorkerDetail,
	// resolve: [
	// 	{
	// 		token: 'worker',
	// 		deps: [ Transition, WorkerService ],
	// 		resolveFn: (trans, workerSvc) => workerSvc.getWorker(trans.params().id)
	// 	}
	// ]
// };