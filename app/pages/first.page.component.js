"use strict";
var core_1 = require("@angular/core");
var FirstPageComponent = (function () {
    function FirstPageComponent() {
    }
    FirstPageComponent = __decorate([
        core_1.Component({
            selector: "first",
            template: "\n        <StackLayout>\n            <Label text=\"First component\" class=\"title\"></Label>\n            <Button text=\"GO TO SECOND\" [nsRouterLink]=\"['/second']\" class=\"link\"></Button>\n        </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], FirstPageComponent);
    return FirstPageComponent;
}());
exports.FirstPageComponent = FirstPageComponent;
//# sourceMappingURL=first.page.component.js.map