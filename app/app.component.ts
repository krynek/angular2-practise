import { Component } from '@angular/core';

import { WorkerService } from './workers/worker.service';

@Component({
	selector: 'my-app',
	template: `
		<div>
			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<a class="navbar-brand">{{ pageTitle }}</a>
					<ul class="nav navbar-nav">
						<li><a uiSref='workers'>Worker List</a></li>
					</ul>
				</div>
			</nav>
		</div>
		<ui-view></ui-view>
	`,
	providers: [ WorkerService ]
})
export class AppComponent {
	pageTitle: string = 'Trolololo Co.';
}