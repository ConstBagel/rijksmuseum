import { Component, Input, EventEmitter, Output, OnInit, OnChanges } from '@angular/core';
import { config } from '../../rijksmuseum-api.service/config';

@Component({
    selector: 'app-page',
    templateUrl: 'page.component.html',
    styleUrls: ['./page.component.css']
})

export class AppPage {
    @Input() 
    currentAmount: number;
    @Input()
    currentAmoutPerPage: number;
    @Input()
    currentPage: number;
    minStep: number;
    @Output()
    pickedPage: EventEmitter<number> = new EventEmitter();
    @Output()
    pickedStep: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.minStep = Math.min(...config.STEPS);
    }

    getItemsPerPage(event) {
        // Checking for correct value
        let inputStep = +event.target.id;
        inputStep =  config.STEPS.includes(inputStep) ?
                        inputStep :
                        Math.min(...config.STEPS);
        this.pickedStep.emit(inputStep);
    }

    getPage(event) {
         // Checking for correct value
        const page = +event.target.innerText;
        if (page) {
            this.pickedPage.emit(page);
        }
    }

    showSteps(): number[] {
      if (this.currentPage) {
           const items = (this.currentAmount < config.LIMIT_ITEMS) ?
                this.currentAmount :
                config.LIMIT_ITEMS;
            return config.STEPS
            .filter(step => 
                Math.ceil(items / step) >= this.currentPage
                );
        }
        return config.STEPS.filter(step => step <  this.currentAmount);
    }

    showPages(): number[] {
        if (this.currentAmount && this.currentAmoutPerPage) {
            const itemsPerPage = (this.currentAmoutPerPage < this.minStep) ?
                this.minStep :
                this.currentAmoutPerPage;
            const maxItems = (this.currentAmount > config.LIMIT_ITEMS) ?
                config.LIMIT_ITEMS :
                this.currentAmount;
            const newLen = Array(Math.ceil(maxItems / itemsPerPage))
            .fill(1).map((e, i) => e + i).length;
            return this.pagination(newLen);
            /*
            return Array(Math.ceil(maxItems / itemsPerPage))
            .fill(1).map((e, i) => e + i); */
        }      
    }

    private pagination(overall: number) {
        const firstItem = 1;
        const actualPage = this.currentPage || config.DEFAULT_PAGE;
        const insertSearch = [actualPage-1 , actualPage, actualPage+1]
            .filter(e => e > firstItem && e < overall);
        const tempArr = [ firstItem, ...insertSearch, overall ];
      return tempArr.reduce((arr, it, i) => {
          arr.push(it);
          const nextNumber = ++it;
          const nextItem = tempArr[++i];
          if (nextItem && nextNumber !== nextItem) arr.push('...'); 
          return arr;}, []);
    }
};