"use strict";
var ui_router_ng2_1 = require('ui-router-ng2');
var worker_list_component_1 = require('./list/worker-list.component');
var worker_detail_component_1 = require('./detail/worker-detail.component');
var worker_form_component_1 = require('./form/worker-form.component');
var worker_service_1 = require('./worker.service');
exports.WORKER_STATES = [
    {
        name: 'workers',
        url: '/workers',
        component: worker_list_component_1.WorkerList,
        resolve: [
            {
                token: 'workerList',
                deps: [worker_service_1.WorkerService],
                // resolveFn: (workerSvc: WorkerService) => workerSvc.getWorkers()
                resolveFn: function (workerSvc) {
                    return workerSvc.getAllWorkers();
                }
            }
        ]
    },
    {
        name: 'worker',
        url: '/:id',
        component: worker_detail_component_1.WorkerDetail,
        resolve: [
            {
                token: 'workerDetail',
                deps: [ui_router_ng2_1.Transition, worker_service_1.WorkerService],
                resolveFn: function (trans, workerSvc) {
                    // workerSvc.getWorker(+trans.params().id)
                    return workerSvc.getSingleWorker(trans.params().id);
                }
            }
        ]
    },
    {
        name: 'workerAdd',
        url: 'worker/add',
        component: worker_form_component_1.WorkerForm,
    },
    {
        name: 'workerEdit',
        url: '/:id/edit',
        component: worker_form_component_1.WorkerForm,
        resolve: [
            {
                token: 'workerEdit',
                deps: [ui_router_ng2_1.Transition, worker_service_1.WorkerService],
                resolveFn: function (trans, workerSvc) {
                    return workerSvc.getSingleWorker(trans.params().id);
                }
            }
        ]
    }
];
//# sourceMappingURL=worker.states.js.map