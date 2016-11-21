import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkerList } from './workers/worker-list.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, WorkerList ],
  bootstrap: 		[ AppComponent ]
})
export class AppModule { }
