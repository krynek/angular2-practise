import { Transition } from 'ui-router-ng2';

import { WorkerList } from './worker-list.component';
import { WorkerDetail } from './worker-detail.component';
import { WorkerService } from './worker.service';

export const workersState = {
	name: 'workers',
	url: '/workers',
	component: WorkerList,
	resolve: [
		{
			token: 'workers',
			deps: [ WorkerService ],
			resolveFn: (workerSvc) => workerSvc.getWorkers()
		}
	]
};
export const workerState = {
	name: 'worker',
	url: '/worker/:id',
	component: WorkerDetail,
	resolve: [
		{
			token: 'worker',
			deps: [ Transition, WorkerService ],
			resolveFn: (trans, workerSvc) => workerSvc.getWorker(trans.params().id)
		}
	]
};