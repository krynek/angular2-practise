import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { WorkerService } from './worker.service';
import { Observable } from 'rxjs';

@Injectable()
export class WorkersResolve implements Resolve<any> {
  
  constructor(private workerService: WorkerService) {}
  
  resolve(): Observable<any> {
    return this.workerService.getWorkers();
  }
}




// @Injectable()
// export class ContactResolve implements Resolve<any> {
  
//   constructor(private contactsService: ContactsService) {}
  
//   resolve(route: ActivatedRouteSnapshot) {
//     return this.contactsService.getContact(route.params['id']);
//   }
// }