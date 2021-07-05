import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppSearch } from './search.component/search.component';
import { AppListItem } from './list-item.component/list-item.component';
import { AppPage } from './page.component/page.component';

@NgModule({
  declarations: [AppComponent, AppSearch, AppListItem, AppPage],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})

export class AppModule {}