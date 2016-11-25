"use strict";
var first_page_component_1 = require('../pages/first.page.component');
var second_page_component_1 = require('../pages/second.page.component');
var third_page_component_1 = require('../pages/third.page.component');
exports.routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: first_page_component_1.FirstPageComponent },
    { path: "second", component: second_page_component_1.SecondPageComponent },
    { path: "three", component: third_page_component_1.ThirdPageComponent }
];
//# sourceMappingURL=routes.js.map