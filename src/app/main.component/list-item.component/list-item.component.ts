import { Component, OnInit, Input } from '@angular/core';
import { IObject } from '../../../rijksmuseum-api.service/model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
    @Input()
    // private list: IObject[];
    item: IObject;
    isShow: boolean = false;
    constructor(private router: Router, private route: ActivatedRoute) {}
    ngOnInit() {
    }

    togglePopup() {
        this.isShow = !this.isShow;
    }

    goToDetails() {
        this.router.navigate([ '/details', this.item.objectNumber ], { relativeTo: this.route })
    }
   
}