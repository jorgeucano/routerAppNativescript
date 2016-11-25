"use strict";
var first_page_component_1 = require('../pages/first.page.component');
var second_page_component_1 = require('../pages/second.page.component');
var third_page_component_1 = require('../pages/third.page.component');
var four_page_component_1 = require('../pages/four.page.component');
var five_page_component_1 = require('../pages/five.page.component');
var six_page_component_1 = require('../pages/six.page.component');
exports.routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: first_page_component_1.FirstPageComponent },
    { path: "second", component: second_page_component_1.SecondPageComponent },
    { path: "third", component: third_page_component_1.ThirdPageComponent },
    { path: "four", component: four_page_component_1.FourPageComponent },
    { path: "five", component: five_page_component_1.FivePageComponent },
    { path: "six", component: six_page_component_1.SixPageComponent },
];
//# sourceMappingURL=routes.js.map