import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes } from './config/routes';

import { AppComponent } from "./app.component";
import { FirstPageComponent } from './pages/first.page.component';
import { SecondPageComponent } from './pages/second.page.component';
import { ThirdPageComponent } from './pages/third.page.component';
@NgModule({
    declarations: [
        AppComponent,
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent
        ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
        ]
})
export class AppModule { }

