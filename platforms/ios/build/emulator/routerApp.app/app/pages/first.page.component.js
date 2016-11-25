"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var FirstPageComponent = (function () {
    function FirstPageComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    FirstPageComponent.prototype.flipToNextPage = function () {
        this.routerExtensions.navigate(["/second"], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    FirstPageComponent = __decorate([
        core_1.Component({
            selector: "first",
            templateUrl: './pages/first.page.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], FirstPageComponent);
    return FirstPageComponent;
}());
exports.FirstPageComponent = FirstPageComponent;
//# sourceMappingURL=first.page.component.js.map