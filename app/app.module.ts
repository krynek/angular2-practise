import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "ui-router-ng2";

import { AppComponent } from './app.component';
import { WorkerList } from './workers/worker-list.component';
import { Worker } from './workers/worker.component';

let workersState = { name: 'workers', url: '/workers', component: WorkerList };
let workerState = { name: 'worker', url: '/worker/:id', component: Worker };

@NgModule({
  imports:      [ 
	  BrowserModule, 
	  HttpModule,
	  UIRouterModule.forRoot({ states: [ workersState, workerState ], useHash: false })
  ],
  declarations: [ 
	  AppComponent, 
	  WorkerList,
	  Worker
  ],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }
