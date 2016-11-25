import { Component } from "@angular/core";

@Component({
    selector: "second",
    template: `
        <StackLayout>
            <Label text="Third component" class="title"></Label>
            <Button text="GO TO Thrid" [nsRouterLink]="['/third']" class="link"></Button>
        </StackLayout>
    `
})
export class SecondPageComponent { }