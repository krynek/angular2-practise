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
    function WorkerService(_http, db) {
        this._http = _http;
        this.db = db;
        this._workerUrl = 'https://angular2practise.firebaseio.com/workers.json';
    }
    WorkerService.prototype.getWorkers = function () {
        return this._http.get(this._workerUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkerService.prototype.getWorker = function (id) {
        return this.getWorkers()
            .map(function (workers) { return workers.find(function (w) { return w.id === id; }); });
    };
    // Firebase services
    WorkerService.prototype.getAllWorkers = function () {
        return this.db.list('workers');
    };
    WorkerService.prototype.getSingleWorker = function (id) {
        return this.db.object('workers/' + id);
    };
    WorkerService.prototype.addWorker = function (worker) {
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref('workers').push().key;
        // Add new record to the worker list.
        var updates = {};
        updates['/workers/' + newPostKey] = worker;
        return firebase.database().ref().update(updates);
    };
    WorkerService.prototype.editWorker = function (worker, id) {
        // Update the worker data in the worker list.
        var updates = {};
        updates['/workers/' + id] = worker;
        return firebase.database().ref().update(updates);
    };
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