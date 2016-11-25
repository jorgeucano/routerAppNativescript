"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var routes_1 = require('./config/routes');
var app_component_1 = require("./app.component");
var first_page_component_1 = require('./pages/first.page.component');
var second_page_component_1 = require('./pages/second.page.component');
var third_page_component_1 = require('./pages/third.page.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                first_page_component_1.FirstPageComponent,
                second_page_component_1.SecondPageComponent,
                third_page_component_1.ThirdPageComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(routes_1.routes)
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map