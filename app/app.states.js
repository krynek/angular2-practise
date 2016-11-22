"use strict";
var worker_list_component_1 = require('./workers/worker-list.component');
var worker_detail_component_1 = require('./workers/worker-detail.component');
exports.APP_STATES = [
    {
        name: 'worker-list',
        url: '/',
        component: worker_list_component_1.WorkerList
    },
    {
        name: 'worker-detail',
        url: '/worker/:id',
        component: worker_detail_component_1.WorkerDetail
    }
];
console.log(exports.APP_STATES);
//# sourceMappingURL=app.states.js.map