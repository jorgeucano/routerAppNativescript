import { Component } from "@angular/core";

@Component({
    selector: "third",
    template: `
        <StackLayout>
            <Label text="Second component" class="title"></Label>
            <Button text="GO TO FIRST" [nsRouterLink]="['/first']" class="link"></Button>
        </StackLayout>
    `
})
export class ThirdPageComponent { }