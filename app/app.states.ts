import { Ng2StateDeclaration, loadNgModule } from 'ui-router-ng2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
/**
 * This file defines the states for the 'app' module
 * The states are exported as and array and imported in the AppModule
 */
export let APP_STATES: Ng2StateDeclaration[] = [
	{
		name: 'app',
		url: '/',
		views: {
			$default: { component: HomeComponent }
		}
	}
];