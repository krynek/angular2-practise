import { Injectable } from '@angular/core';
import { UIRouter } from 'ui-router-ng2';

@Injectable()
export class MyUIRouterConfig {
  constructor( private router: UIRouter) {    
    // If no URL matches, go to the `hello` state by default
    router.urlRouterProvider.otherwise(() => router.stateService.go('workers'));
  }
}