import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main.component/main.component";
import { DetailsComponent } from "./details.component/details.component";
import { PageNotFoundComponent } from "./page-not-found.component/page-not-found.component";


const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' } 
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}