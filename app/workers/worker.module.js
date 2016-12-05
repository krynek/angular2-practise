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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ui_router_ng2_1 = require('ui-router-ng2');
//States
var worker_states_1 = require('./worker.states');
//Components
var worker_list_component_1 = require('./list/worker-list.component');
var worker_detail_component_1 = require('./detail/worker-detail.component');
var worker_form_component_1 = require('./form/worker-form.component');
//Services
var worker_service_1 = require('./worker.service');
var WorkerModule = (function () {
    function WorkerModule() {
    }
    WorkerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ui_router_ng2_1.UIRouterModule.forChild({
                    states: worker_states_1.WORKER_STATES
                })
            ],
            declarations: [
                worker_list_component_1.WorkerList,
                worker_detail_component_1.WorkerDetail,
                worker_form_component_1.WorkerForm
            ],
            providers: [
                worker_service_1.WorkerService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WorkerModule);
    return WorkerModule;
}());
exports.WorkerModule = WorkerModule;
//# sourceMappingURL=worker.module.js.map