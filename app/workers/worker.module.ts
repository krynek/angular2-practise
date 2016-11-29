import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';

import { WORKER_STATES } from './worker.states';
import { WorkerList } from './worker-list.component';
import { WorkerDetail } from './worker-detail.component';
import { WorkerForm} from './worker-form.component';
import { WorkerService } from './worker.service';

// import { MyRootUIRouterConfig } from "../router.config";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UIRouterModule.forChild({
			states: WORKER_STATES,
			// configClass: MyRootUIRouterConfig
		})
	],
	declarations: [
		WorkerList,
		WorkerDetail,
		WorkerForm
	],
	providers: [
		WorkerService
	]
})
export class WorkerModule {}