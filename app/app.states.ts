import { Ng2StateDeclaration } from 'ui-router-ng2';

import { AppComponent } from './app.component';
import { WorkerList } from './workers/worker-list.component';
import { WorkerDetail } from './workers/worker-detail.component';

export let APP_STATES: Ng2StateDeclaration[] = [
	{
		name: 'worker-list',
		url: '/',
		component: WorkerList
	},
	{
		name: 'worker-detail',
		url: '/worker/:id',
		component: WorkerDetail
	}
];

console.log(APP_STATES);