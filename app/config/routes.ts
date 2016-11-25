import { FirstPageComponent } from '../pages/first.page.component';
import { SecondPageComponent } from '../pages/second.page.component';
import { ThirdPageComponent } from '../pages/third.page.component';

export const routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: FirstPageComponent },
    { path: "second", component: SecondPageComponent },
    { path: "third", component: ThirdPageComponent }
];