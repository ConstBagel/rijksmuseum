import { Component, OnInit, Input } from '@angular/core';
import { IObject } from '../../rijksmuseum-api.service/model'; 

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class AppList implements OnInit {
    @Input()
    private list: IObject[];
    constructor() {}
    ngOnInit() {
    }

   
}