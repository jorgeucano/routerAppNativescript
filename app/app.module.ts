import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes } from './config/routes';

import { AppComponent } from "./app.component";
// flexbox
import { FirstPageComponent } from './pages/first.page.component';
//Absolute
import { SecondPageComponent } from './pages/second.page.component';
//Dock
import { ThirdPageComponent } from './pages/third.page.component';
//Grid
import { FourPageComponent } from './pages/four.page.component';
//Stack
import { FivePageComponent } from './pages/five.page.component';
//Wrap
import { SixPageComponent } from './pages/six.page.component';
@NgModule({
    declarations: [
        AppComponent,
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent,
        FourPageComponent,
        FivePageComponent,
        SixPageComponent,
        ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
        ]
})
export class AppModule { }

