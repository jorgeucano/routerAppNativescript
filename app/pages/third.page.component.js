"use strict";
var core_1 = require("@angular/core");
var ThirdPageComponent = (function () {
    function ThirdPageComponent() {
    }
    ThirdPageComponent = __decorate([
        core_1.Component({
            selector: "third",
            template: "\n        <StackLayout>\n            <Label text=\"Second component\" class=\"title\"></Label>\n            <Button text=\"GO TO FIRST\" [nsRouterLink]=\"['/first']\" class=\"link\"></Button>\n        </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ThirdPageComponent);
    return ThirdPageComponent;
}());
exports.ThirdPageComponent = ThirdPageComponent;
//# sourceMappingURL=third.page.component.js.map