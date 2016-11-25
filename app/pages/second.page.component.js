"use strict";
var core_1 = require("@angular/core");
var SecondPageComponent = (function () {
    function SecondPageComponent() {
    }
    SecondPageComponent = __decorate([
        core_1.Component({
            selector: "second",
            template: "\n        <StackLayout>\n            <Label text=\"Third component\" class=\"title\"></Label>\n            <Button text=\"GO TO Thrid\" [nsRouterLink]=\"['/third']\" class=\"link\"></Button>\n        </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SecondPageComponent);
    return SecondPageComponent;
}());
exports.SecondPageComponent = SecondPageComponent;
//# sourceMappingURL=second.page.component.js.map