"use strict";
var ui_router_ng2_1 = require('ui-router-ng2');
var worker_list_component_1 = require('./worker-list.component');
var worker_detail_component_1 = require('./worker-detail.component');
var worker_service_1 = require('./worker.service');
exports.WORKER_STATES = [
    {
        name: 'workers',
        url: '/workers',
        // component: WorkerList,
        views: {
            $default: { component: worker_list_component_1.WorkerList }
        },
        resolve: [
            {
                token: 'workerList',
                deps: [worker_service_1.WorkerService],
                resolveFn: function (workerSvc) { return workerSvc.getWorkers(); }
            }
        ]
    },
    {
        name: 'worker',
        url: 'worker/:id',
        // component: WorkerDetail,
        views: {
            $default: { component: worker_detail_component_1.WorkerDetail }
        },
        resolve: [
            {
                token: 'workerDetail',
                deps: [ui_router_ng2_1.Transition, worker_service_1.WorkerService],
                resolveFn: function (trans, workerSvc) {
                    return workerSvc.getWorker(trans.params().id);
                }
            }
        ]
    },
];
// export const workersState = {
// 	name: 'workers',
// 	url: '/workers',
// 	component: WorkerList,
// resolve: [
// 	{
// 		provide: 'workers', useFactory: (workerSvc: WorkerService) => {
// 			return workerSvc.getWorkers();
// 		},
// 		deps: [ WorkerService ],
// 		policy: { async: "RXWAIT" }
// 		// resolveFn: (workerSvc: WorkerService) => workerSvc.getWorkers()
// 	}
// ]
// };
// export const workerState = {
// 	name: 'worker',
// 	url: '/worker/:id',
// 	component: WorkerDetail,
// resolve: [
// 	{
// 		token: 'worker',
// 		deps: [ Transition, WorkerService ],
// 		resolveFn: (trans, workerSvc) => workerSvc.getWorker(trans.params().id)
// 	}
// ]
// }; 
//# sourceMappingURL=worker.states.js.map