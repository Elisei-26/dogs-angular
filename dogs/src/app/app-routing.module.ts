import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./components/main-component/main-component.component";
import { BreedComponent } from "./components/breed-component/breed-component.component";
import { BreedSubTreeComponent } from "./components/breed-sub-tree-component/breed-sub-tree-component.component";
import { UnknownRouteComponent } from "./components/unknown-route/unknown-route.component";

const routes: Routes = [
	{ path: "", component: MainComponent, pathMatch: "full" },
	{ path: "breed/:breed", component: BreedComponent, pathMatch: "full" },
	{ path: "breed/:breed/:sub-breed", component: BreedSubTreeComponent, pathMatch: "full" },
	{ path: "404", component: UnknownRouteComponent },
	{ path: "**", redirectTo: "/404" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
