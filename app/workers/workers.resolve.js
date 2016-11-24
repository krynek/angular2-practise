"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var worker_service_1 = require('./worker.service');
var WorkersResolve = (function () {
    function WorkersResolve(workerService) {
        this.workerService = workerService;
    }
    WorkersResolve.prototype.resolve = function () {
        return this.workerService.getWorkers();
    };
    WorkersResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [worker_service_1.WorkerService])
    ], WorkersResolve);
    return WorkersResolve;
}());
exports.WorkersResolve = WorkersResolve;
// @Injectable()
// export class ContactResolve implements Resolve<any> {
//   constructor(private contactsService: ContactsService) {}
//   resolve(route: ActivatedRouteSnapshot) {
//     return this.contactsService.getContact(route.params['id']);
//   }
// } 
//# sourceMappingURL=workers.resolve.js.map