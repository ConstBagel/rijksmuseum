import { Component, Input, EventEmitter, Output, OnInit, OnChanges } from '@angular/core';
import { config } from '../../rijksmuseum-api.service/config';

@Component({
    selector: 'app-page',
    templateUrl: 'page.component.html',
    styleUrls: ['./page.component.css']
})

export class AppPage implements OnInit, OnChanges {
    @Input() 
    currentAmount: number;
    @Input()
    currentAmoutPerPage: number;
    steps: number[];
    pages: number[];
    @Output()
    pickedPage: EventEmitter<number> = new EventEmitter();
    @Output()
    pickedStep: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit() {
        this.setPageView();
    }

    ngOnChanges() {
        this.setPageView();
    }
    
    getAmountPerPage(event) {
        this.pickedStep.emit(+event.target.id);
    }

    getPage(event) {
        const pickedPage = +event.target.value;
        this.steps = config.STEPS.filter(step => (config.LIMIT_ITEMS / step) > pickedPage);
        this.pickedPage.emit(pickedPage);
    }
    
    private setPageView() {
        this.steps = config.STEPS.filter(step => this.currentAmount > step);
        this.pages = this.getPages();
    }

    private getPages(): number[] {
        const len = (this.currentAmount > config.LIMIT_ITEMS) ?
        config.LIMIT_ITEMS / this.currentAmoutPerPage
        :
        this.currentAmount / this.currentAmoutPerPage;
        return Array(len).fill(1).map((e, i) => e + i);
    }
};