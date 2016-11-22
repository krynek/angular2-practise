import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
// import { MyUIRouterConfig } from './router.config';
// import { APP_STATES } from './app.states';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerModule } from './workers/worker.module';

let homeState = { name: 'home', url: '/', component: HomeComponent };

@NgModule({
  imports: [ 
	  BrowserModule, 
	  HttpModule,
	  WorkerModule,
	  UIRouterModule.forRoot({ states: [ homeState ] })
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
