import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div>
			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<a uiSref='home' class="navbar-brand">{{ pageTitle }}</a>
					<ul class="nav navbar-nav">
						<li><a uiSref='workers'>Worker List</a></li>
					</ul>
				</div>
			</nav>
		</div>
		<ui-view></ui-view>
	`
})
export class AppComponent {
	pageTitle: string = 'Trolololo Co.';
}