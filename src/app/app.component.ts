import { Component, Injectable, OnInit } from '@angular/core';
import { RijksmuseumService } from '../rijksmuseum-api.service/rijksmuseum-api.service';

import { IRespond, IObject }  from '../rijksmuseum-api.service/model';
import { identifierModuleUrl, ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: './app.component.html',
    providers: [RijksmuseumService]
})

@Injectable()
export class AppComponent implements OnInit {
    title: string;
    foundAmount: number;
    currentLen: number;
    page: number;
    foundItems: IObject[];
    itemsPerPageOptions: number[];
    borderValueOfPages: number;

    constructor(private api: RijksmuseumService) {}

   ngOnInit() {
        this.title = 'Rijksmuseum';
        this.makeRequest();
    }

/*
    ngOnChanges() {
        this.api.request().subscribe((data: IRespond) => {
            this.foundItems = data.artObjects;
            this.currentLen = this.foundItems.length;
            this.foundAmount = data.count;
        });
    }
*/
    handleSearch(event: string) {
        !!event.length ?
            this.api.addQueryParams('q', event) :
            this.api.removeQueryParams('q');   
        this.api.removeQueryParams('p');
        this.api.removeQueryParams('ps');
        this.page = null;
        this.makeRequest();
    }

    handleSort(event: string) {
        !!event.length ? 
            this.api.addQueryParams('s', event) :
            this.api.removeQueryParams('s');
        this.makeRequest();
    }

    handlePage(event: string) {
       this.api.addQueryParams('p', event);
       this.page = +event;
       this.makeRequest();
    }

    handleStepPerPage(event: string) {
        this.api.addQueryParams('ps', event);
        this.makeRequest();
    }

   makeRequest() {
       this.api.request().subscribe((data: IRespond) => {
            this.foundItems = data.artObjects;
            this.currentLen = this.foundItems.length;
            this.foundAmount = data.count;
        });
    }
}