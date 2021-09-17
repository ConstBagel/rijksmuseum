import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppMain } from "./main/main.component";
import { AppDetails } from "./details/details.component";
import { AppPageNotFound } from "./page-not-found/page-not-found.component";


const appRoutes: Routes = [
    { path: '', component: AppMain },
    { path: 'details/:id', component: AppDetails },
    { path: 'not-found', component: AppPageNotFound },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}