import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponentComponent } from './components/main-component/main-component.component';
import { BreedComponentComponent } from './components/breed-component/breed-component.component';
import { BreedSubTreeComponentComponent } from './components/breed-sub-tree-component/breed-sub-tree-component.component';
import { UnknownRouteComponent } from './components/unknown-route/unknown-route.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent, pathMatch: 'full' },
  { path: 'breed/:name', component: BreedComponentComponent, pathMatch: 'full' },
  { path: 'breed/:name/:sub-breed', component: BreedSubTreeComponentComponent, pathMatch: 'full' },
  { path: '404', component: UnknownRouteComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
