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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var angularfire2_1 = require('angularfire2');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var WorkerService = (function () {
    /**
     * @constructor
     * @param {Http} - Http Service
     * @param {AngularFireDatabase} - AngularFire2 Database
     */
    function WorkerService(_http, _db) {
        this._http = _http;
        this._db = _db;
        this.list = this._db.list('workers');
    }
    /**
     * Get worker list
     * @return {Observable}
     */
    WorkerService.prototype.getAllWorkers = function () {
        return this.list;
    };
    /**
     * Get single worker
     * @param {any} id - The $key value
     * @return {Observable}
     */
    WorkerService.prototype.getSingleWorker = function (id) {
        return this._db.object('workers/' + id, { preserveSnapshot: true });
    };
    /**
     * Add new worker
     * @param {any} worker - The worker object
     * @return {Promise}
     */
    WorkerService.prototype.addWorker = function (worker) {
        return this.list.push(worker);
    };
    /**
     * Edit existing worker
     * @param {any} worker - The worker object
     * @param {any} id - The $key value
     * @return {Promise}
     */
    WorkerService.prototype.editWorker = function (worker, id) {
        return this.list.update(id, worker);
    };
    /**
     * Remove worker form list
     * @param {any} id - The $key value
     * @return {Promise}
     */
    WorkerService.prototype.removeWorker = function (id) {
        return this.list.remove(id);
    };
    /**
     * Handle error
     * @param {error}
     * @return {Observable}
     */
    WorkerService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server Error');
    };
    WorkerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angularfire2_1.AngularFireDatabase])
    ], WorkerService);
    return WorkerService;
}());
exports.WorkerService = WorkerService;
//# sourceMappingURL=worker.service.js.map