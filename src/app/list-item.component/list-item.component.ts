import { Component, OnInit, Input } from '@angular/core';
import { IObject } from '../../rijksmuseum-api.service/model'; 

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})

export class AppListItem implements OnInit {
    @Input()
    // private list: IObject[];
    item: IObject;
    isShow: boolean = false;
    constructor() {}
    ngOnInit() {
    }

    togglePopup() {
        this.isShow = !this.isShow;
    }
   
}