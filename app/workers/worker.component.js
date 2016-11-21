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
var router_1 = require('@angular/router');
var worker_service_1 = require('./worker.service');
var Worker = (function () {
    function Worker(_router, _route, _workerService) {
        this._router = _router;
        this._route = _route;
        this._workerService = _workerService;
    }
    Worker.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getWorker(id);
        });
    };
    Worker.prototype.getWorker = function (id) {
        var _this = this;
        this._workerService.getWorker(id).subscribe(function (worker) { return _this.worker = worker; }, function (error) { return _this.errorMessage = error; });
    };
    Worker = __decorate([
        core_1.Component({
            templateUrl: 'app/workers/worker.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, worker_service_1.WorkerService])
    ], Worker);
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=worker.component.js.map