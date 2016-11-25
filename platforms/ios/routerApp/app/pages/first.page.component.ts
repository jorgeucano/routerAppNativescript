import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "first",
    templateUrl: './views/first.page.component.html'
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