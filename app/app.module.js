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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var ui_router_ng2_1 = require('ui-router-ng2');
// import { MyUIRouterConfig } from './router.config';
// import { APP_STATES } from './app.states';
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var worker_module_1 = require('./workers/worker.module');
var app_states_1 = require("./app.states");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                worker_module_1.WorkerModule,
                ui_router_ng2_1.UIRouterModule.forRoot({
                    states: [app_states_1.APP_STATES],
                    useHash: true,
                    otherwise: { state: 'app', params: {} }
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map