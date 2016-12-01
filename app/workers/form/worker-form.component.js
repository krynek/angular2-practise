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
var worker_service_1 = require('../worker.service');
var worker_1 = require('../worker');
var WorkerForm = (function () {
    function WorkerForm(_workerService) {
        this._workerService = _workerService;
        this.departments = ['Human Resources', 'Legal', 'Services', 'Sales', 'Marketing'];
        this.model = new worker_1.Worker('', '', '', '', 'default', 'http://softwarehut.com/wp-content/themes/sh/assets/images/team/jan_lapinski.jpg');
        this.submitted = false;
        this.hasDepartmentError = false;
    }
    WorkerForm.prototype.submitForm = function (form) {
        this.submitted = true;
        console.log(form.value);
        this._workerService.addWorker(this.model).then(function (data) { return console.log('Success'); }, function (err) { return console.log('Error'); });
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
        __metadata('design:paramtypes', [worker_service_1.WorkerService])
    ], WorkerForm);
    return WorkerForm;
}());
exports.WorkerForm = WorkerForm;
//# sourceMappingURL=worker-form.component.js.map