import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerModule } from './workers/worker.module';
import { APP_STATES } from "./app.states";
import { firebaseConfig } from './environments/firebase.config';

@NgModule({
  imports: [ 
	  BrowserModule, 
	  HttpModule,
	  WorkerModule,
	  UIRouterModule.forRoot({ 
	  	states: [ APP_STATES ],
	  	useHash: true,
	  	otherwise: { state: 'app', params: {} }
	  }),
		AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ 
	  AppComponent,
	  HomeComponent 
	],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }
