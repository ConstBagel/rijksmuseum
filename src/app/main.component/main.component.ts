import { Component, Injectable, OnInit } from '@angular/core';
import { IRespond, IObject }  from '../../rijksmuseum-api.service/model';
import { RijksmuseumService } from '../../rijksmuseum-api.service/rijksmuseum-api.service';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

@Injectable()
export class MainComponent implements OnInit {
    title: string;
    foundAmount: number;
    currentLen: number;
    page: number;
    foundItems: IObject[];
    itemsPerPageOptions: number[];
    borderValueOfPages: number;
    queryObject: {}

    constructor(private rijksmuseumService: RijksmuseumService) {
        this.queryObject = {};
    }

   ngOnInit() {
        this.title = 'Rijksmuseum';
        this.doRequest();
   }

    handleSearch(event: string) {
        this.queryObject['q'] = event;
        this.doRequest(this.getQuery());
    }

    handleSort(event: string) {
        this.queryObject['s'] = event;
        this.doRequest(this.getQuery());
    }

    handlePage(event: string) { 
        this.queryObject['p'] = event;
        this.doRequest(this.getQuery());
    }

    handleStepPerPage(event: string) {
        this.queryObject['ps'] = event;
        this.doRequest(this.getQuery())
    }

    getQuery(): string {
       const queries = Object.keys(this.queryObject)
            .filter(key => this.queryObject[key]);
        return !!queries.length ? 
                    queries.reduce((str, key) => 
                        `${str}&${key}=${this.queryObject[key]}`
                    , '')
                : '';
    }

    doRequest(query: string = '') {
        this.rijksmuseumService.getCollection(this.getQuery())
            .subscribe((data: IRespond) => {
                this.foundItems = data.artObjects;
                this.currentLen = this.foundItems.length;
                this.foundAmount = data.count;
        });
    }
}