"use strict";
var home_component_1 = require('./home/home.component');
/**
 * This file defines the states for the 'app' module
 * The states are exported as and array and imported in the AppModule
 */
exports.APP_STATES = [
    {
        name: 'app',
        url: '/',
        views: {
            $default: { component: home_component_1.HomeComponent }
        }
    }
];
//# sourceMappingURL=app.states.js.map