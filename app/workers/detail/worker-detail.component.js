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
/**
 * Worker Detail Component
 */
var WorkerDetail = (function () {
    /**
     * Inject "workerDetail" (resolve data)
     * @param {Observable} detailObserver
     */
    function WorkerDetail(detailObserver) {
        this.detailObserver = detailObserver;
    }
    /**
     * Subscribe 'detailObserver' to get data from Firebase
     */
    WorkerDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.detailObserver.subscribe(function (snapshot) { return _this.worker = snapshot.val(); }, function (error) { return _this.errorMessage = error; });
    };
    WorkerDetail = __decorate([
        core_1.Component({
            templateUrl: 'app/workers/detail/worker-detail.component.html',
        }),
        __param(0, core_1.Inject("workerDetail")), 
        __metadata('design:paramtypes', [Object])
    ], WorkerDetail);
    return WorkerDetail;
}());
exports.WorkerDetail = WorkerDetail;
//# sourceMappingURL=worker-detail.component.js.map