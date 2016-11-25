import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { RouterExtensions } from 'nativescript-angular/router';

import {
    FlexboxLayout,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    AlignItems,
    AlignContent,
    AlignSelf
} from "ui/layouts/flexbox-layout";

@Component({
    selector: "first",
    templateUrl: './pages/first.page.component.html'
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