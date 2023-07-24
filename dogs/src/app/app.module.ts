import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main-component/main-component.component";
import { BreedComponent } from "./components/breed-component/breed-component.component";
import { BreedSubTreeComponent } from "./components/breed-sub-tree-component/breed-sub-tree-component.component";
import { HttpClientModule } from "@angular/common/http";
import { UnknownRouteComponent } from "./components/unknown-route/unknown-route.component";

@NgModule({
	declarations: [AppComponent, MainComponent, BreedComponent, BreedSubTreeComponent, UnknownRouteComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, ButtonModule, CardModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
