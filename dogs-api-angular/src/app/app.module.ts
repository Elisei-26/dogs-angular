import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { BreedComponentComponent } from './components/breed-component/breed-component.component';
import { BreedSubTreeComponentComponent } from './components/breed-sub-tree-component/breed-sub-tree-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UnknownRouteComponent } from './components/unknown-route/unknown-route.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    BreedComponentComponent,
    BreedSubTreeComponentComponent,
    UnknownRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
