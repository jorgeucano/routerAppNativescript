import { FirstPageComponent } from '../pages/first.page.component';
import { SecondPageComponent } from '../pages/second.page.component';
import { ThirdPageComponent } from '../pages/third.page.component';
import { FourPageComponent } from '../pages/four.page.component';
import { FivePageComponent } from '../pages/five.page.component';
import { SixPageComponent } from '../pages/six.page.component';
export const routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: FirstPageComponent },
    { path: "second", component: SecondPageComponent },
    { path: "third", component: ThirdPageComponent },
    { path: "four", component: FourPageComponent },
    { path: "five", component: FivePageComponent },
    { path: "six", component: SixPageComponent },
];