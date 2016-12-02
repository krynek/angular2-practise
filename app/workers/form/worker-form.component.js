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
var worker_1 = require('../worker');
var WorkerForm = (function () {
    function WorkerForm(editObserver, _workerService) {
        this.editObserver = editObserver;
        this._workerService = _workerService;
        this.departments = ['Human Resources', 'Legal', 'Services', 'Sales', 'Marketing'];
        this.model = new worker_1.Worker('', '', '', '', 'default', 'http://softwarehut.com/wp-content/themes/sh/assets/images/team/jan_lapinski.jpg');
        this.submitted = false;
        this.hasDepartmentError = false;
        this.editFlag = false;
    }
    WorkerForm.prototype.submitForm = function (form) {
        this.submitted = true;
        console.log(form.value);
        if (this.editFlag) {
            this._workerService.editWorker(this.model, this.currId).then(function (_) { return console.log('Success'); }, function (err) { return console.log('Error'); });
        }
        else {
            this._workerService.addWorker(this.model).then(function (_) { return console.log('Success'); }, function (err) { return console.log('Error'); });
        }
    };
    WorkerForm.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof this.currId !== 'undefined' || this.currId != null) {
            this.editFlag = true;
            this.editObserver.subscribe(function (snapshot) {
                _this.model = snapshot.val(),
                    _this.currId = snapshot.key;
            }, function (error) { return _this.errorMessage = error; });
        }
        console.log(this.model);
    };
    WorkerForm.prototype.validateDepartments = function (value) {
        if (value === 'default')
            this.hasDepartmentError = true;
        else
            this.hasDepartmentError = false;
    };
    WorkerForm = __decorate([
        core_1.Component({
            selector: 'worker-form',
            styleUrls: ['app/workers/form/worker-form.component.css'],
            templateUrl: 'app/workers/form/worker-form.component.html'
        }),
        __param(0, core_1.Inject('workerEdit')), 
        __metadata('design:paramtypes', [Object, worker_service_1.WorkerService])
    ], WorkerForm);
    return WorkerForm;
}());
exports.WorkerForm = WorkerForm;
//# sourceMappingURL=worker-form.component.js.map