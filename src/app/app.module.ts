import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppSearch } from './search/search.component';
import { AppListItem } from './list-item/list-item.component';
import { AppPagination } from './pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, AppSearch, AppListItem, AppPagination],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
})
export class AppModule {}
