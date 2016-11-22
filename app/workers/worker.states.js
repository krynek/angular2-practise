"use strict";
var ui_router_ng2_1 = require('ui-router-ng2');
var worker_list_component_1 = require('./worker-list.component');
var worker_detail_component_1 = require('./worker-detail.component');
var worker_service_1 = require('./worker.service');
exports.workersState = {
    name: 'workers',
    url: '/workers',
    component: worker_list_component_1.WorkerList,
    resolve: [
        {
            token: 'workers',
            deps: [worker_service_1.WorkerService],
            resolveFn: function (workerSvc) { return workerSvc.getWorkers(); }
        }
    ]
};
exports.workerState = {
    name: 'worker',
    url: '/worker/:id',
    component: worker_detail_component_1.WorkerDetail,
    resolve: [
        {
            token: 'worker',
            deps: [ui_router_ng2_1.Transition, worker_service_1.WorkerService],
            resolveFn: function (trans, workerSvc) { return workerSvc.getWorker(trans.params().id); }
        }
    ]
};
//# sourceMappingURL=worker.states.js.map