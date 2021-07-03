import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { config } from '../../rijksmuseum-api.service/config';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class AppSearch implements OnInit {
    listOptions: { val: string, txt: string}[];
    @Output()
    pickedSort: EventEmitter<string> = new EventEmitter();
    @Output()
    inputChars: EventEmitter<string> = new EventEmitter();
    searchWord: string;
    toggle: boolean

    constructor() {
        this.toggle = false;
    }

   ngOnInit() {
       this.listOptions = config.SORT_OPTIONS; 
    }

    handleChange(event: any) {
        this.pickedSort.emit(event.target.value);
    }

    handleInput(event: string) {
        this.searchWord = event;
    }

    handleRemove() {
        this.searchWord = '';
        this.inputChars.emit(this.searchWord);
        this.toggle = false;
    }

    handleSearch() {
        this.toggle = true;
        this.inputChars.emit(encodeURIComponent(this.searchWord));
    }
}