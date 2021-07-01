import { Component, Injectable, Input, OnInit } from '@angular/core';
import { RijksmuseumService } from '../rijksmuseum-api.service/rijksmuseum-api.service';

import { IRespond, IObject }  from '../rijksmuseum-api.service/model';

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
    foundItems: IObject[];
    itemsPerPageOptions: number[];
    borderValueOfPages: number;

    constructor(private api: RijksmuseumService) {}

   ngOnInit() {
        this.title = 'Rijksmuseum';
        this.api.request().subscribe((data: IRespond) => {
            console.log();
            this.foundItems = data.artObjects;
            this.foundAmount = data.count;
        });
    }
 
    handleSearch(event: string) {
        console.log(event);
        this.makeRequest('q', event);
    }

    handleSort(event: string) {
        this.makeRequest('s', event);
    }

    handlePage(event: string) {
       this.makeRequest('p', event);
    }

    handleStepPerPage(event: string) {
        this.makeRequest('ps', event);
    }

   makeRequest(param: string, val: string): any {
       this.api.addQueryParams(param, val);
       this.api.request().subscribe((data: IRespond) => {
        this.foundItems = data.artObjects;
        this.foundAmount = data.count;
        });
    }
}