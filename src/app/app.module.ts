import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { RijksmuseumService } from '../services/rijksmuseum-api.service';

import { AppComponent } from './app.component';
import {  AppMain } from './main/main.component';
import { AppSearch } from './main/search/search.component';
import { AppListItem } from './main/list-item/list-item.component';
import { AppPagination } from './main/pagination/pagination.component';
import { AppDetails } from './details/details.component';
import { AppPageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMain,
    AppSearch,
    AppListItem,
    AppPagination,
    AppDetails,
    AppPageNotFound
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RijksmuseumService]
})
export class AppModule {}
