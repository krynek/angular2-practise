import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';

import { WorkerList } from './worker-list.component';
import { WorkerDetail } from './worker-detail.component';
import { WorkerService } from './worker.service';
import { workersState, workerState } from './worker.states';

let STATES = [ workersState, workerState ];

@NgModule({
	imports: [
		CommonModule,
		UIRouterModule.forChild({
			states: STATES
		})
	],
	declarations: [
		WorkerList,
		WorkerDetail
	],
	providers: [
		WorkerService
	]
})
export class WorkerModule {}