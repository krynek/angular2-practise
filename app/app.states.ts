import { Ng2StateDeclaration, loadNgModule } from 'ui-router-ng2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export let APP_STATES: Ng2StateDeclaration[] = [
	{
		name: 'app',
		url: '/',
		component: HomeComponent
	}
];