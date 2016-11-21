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
var WorkerList = (function () {
    function WorkerList(_workerService) {
        this._workerService = _workerService;
        this.title = 'Worker list';
    }
    WorkerList.prototype.ngOnInit = function () {
        var _this = this;
        this._workerService.getWorkers()
            .subscribe(function (workers) { return _this.workers = workers; }, function (error) { return _this.errorMessage = error; });
    };
    WorkerList = __decorate([
        core_1.Component({
            selector: 'worker-list',
            templateUrl: 'app/workers/worker-list.component.html'
        }), 
        __metadata('design:paramtypes', [worker_service_1.WorkerService])
    ], WorkerList);
    return WorkerList;
}());
exports.WorkerList = WorkerList;
//# sourceMappingURL=worker-list.component.js.map