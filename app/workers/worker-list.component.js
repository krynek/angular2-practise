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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var WorkerList = (function () {
    function WorkerList(listObserver, af) {
        // console.log(this);
        // const workers$: FirebaseListObservable<IWorker[]> = af.database.list('workers');
        this.listObserver = listObserver;
        this.af = af;
        // workers$.subscribe(
        // 	// console.log
        // 	workers => this.workers = workers, 
        // 	error => this.errorMessage = <any>error
        // );
    }
    WorkerList.prototype.ngOnInit = function () {
        var _this = this;
        this.listObserver.subscribe(function (workers) { return _this.workers = workers; }, function (error) { return _this.errorMessage = error; });
    };
    WorkerList = __decorate([
        core_1.Component({
            templateUrl: 'app/workers/worker-list.component.html',
        }),
        __param(0, core_1.Inject("workerList")), 
        __metadata('design:paramtypes', [Object, angularfire2_1.AngularFire])
    ], WorkerList);
    return WorkerList;
}());
exports.WorkerList = WorkerList;
//# sourceMappingURL=worker-list.component.js.map