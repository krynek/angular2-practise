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
var worker_service_1 = require('../worker.service');
/**
 * Worker List Component
 */
var WorkerList = (function () {
    /**
     * Inject "workerList" (resolve data)
     * @param {Observable} listObserver
     */
    function WorkerList(listObserver, _workerService) {
        this.listObserver = listObserver;
        this._workerService = _workerService;
    }
    /**
     * Subscribe "listObserver" to get data from Firebase
     */
    WorkerList.prototype.ngOnInit = function () {
        var _this = this;
        this.listObserver.subscribe(function (workers) { return _this.workers = workers; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Call "WorkerService" method to remove worker
     * @param {any} id
     */
    WorkerList.prototype.removeWorker = function (id) {
        return this._workerService.removeWorker(id);
    };
    WorkerList = __decorate([
        core_1.Component({
            templateUrl: 'app/workers/list/worker-list.component.html'
        }),
        __param(0, core_1.Inject("workerList")), 
        __metadata('design:paramtypes', [Object, worker_service_1.WorkerService])
    ], WorkerList);
    return WorkerList;
}());
exports.WorkerList = WorkerList;
//# sourceMappingURL=worker-list.component.js.map