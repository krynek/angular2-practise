import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';

//States
import { WORKER_STATES } from './worker.states';
//Components
import { WorkerList } from './list/worker-list.component';
import { WorkerDetail } from './detail/worker-detail.component';
import { WorkerForm} from './form/worker-form.component';
//Service
import { WorkerService } from './worker.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UIRouterModule.forChild({
			states: WORKER_STATES
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