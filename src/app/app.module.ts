import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component/main.component';
import { SearchComponent } from './main.component/search.component/search.component';
import { ListItemComponent } from './main.component/list-item.component/list-item.component';
import { PageComponent } from './main.component/page.component/page.component';
import { DetailsComponent } from './details.component/details.component';
import { PageNotFoundComponent } from './page-not-found.component/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ListItemComponent,
    PageComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})

export class AppModule {}