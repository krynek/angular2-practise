import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import { MyUIRouterConfig } from './router.config';
// import { APP_STATES } from './app.states';

import { AppComponent } from './app.component';
import { WorkerList } from './workers/worker-list.component';
import { WorkerDetail } from './workers/worker-detail.component';

let workersState = { name: 'workers', url: '/', component: WorkerList };

@NgModule({
  imports:      [ 
	  BrowserModule, 
	  HttpModule,
	  UIRouterModule.forRoot({ 
      states: [ workersState ],
      useHash: true,
      configClass: MyUIRouterConfig
    })
  ],
  declarations: [ 
	  AppComponent, 
	  WorkerList,
	  WorkerDetail
  ],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }
