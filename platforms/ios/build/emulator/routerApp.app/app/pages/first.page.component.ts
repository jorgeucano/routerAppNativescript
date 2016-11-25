import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "first",
    template: `
        <StackLayout>
            <Label text="First component" class="title"></Label>
            <Button text="GO TO SECOND" [nsRouterLink]="['/second']" class="link"></Button>

            <Button text="flip to next with function" (tap)="flipToNextPage()"></Button>
            <Button text="flip to next with atribute" [nsRouterLink]="['/third']" pageTransition="flip"></Button>
        </StackLayout>
    `
})
export class FirstPageComponent { 

    constructor(private routerExtensions: RouterExtensions){}
    
    
    flipToNextPage() {
        this.routerExtensions.navigate(["/second"], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    }

}