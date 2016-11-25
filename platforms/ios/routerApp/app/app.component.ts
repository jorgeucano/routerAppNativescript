import { Component } from "@angular/core";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { FirstPageComponent} from './pages/first.page.component';
import { SecondPageComponent} from './pages/second.page.component';
import { ThirdPageComponent} from './pages/third.page.component';

@Component({
    selector: "my-app",
    template: `<page-router-outlet></page-router-outlet>`,
    
})
export class AppComponent {
    
}
