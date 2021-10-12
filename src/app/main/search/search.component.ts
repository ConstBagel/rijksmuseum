import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SORT_OPTIONS } from 'src/services/config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class AppSearch implements OnInit {
  sortOptions: { value: string; label: string }[];
  @Input()
  searchWord: string | null = null;
  @Output()
  onSort: EventEmitter<string> = new EventEmitter();
  @Output()
  onSearch: EventEmitter<string> = new EventEmitter();
 

  constructor(private router: Router) {
    this.sortOptions = SORT_OPTIONS;
  }

  ngOnInit() {}

  onSortChange(event: any) {
    this.onSort.emit(event.target.value);
  }

  onRemoveButtonClick() {
    this.searchWord = '';
    this.onSearch.emit(this.searchWord);
    this.router.navigate(['']);
  }

  handleSearch() {
    this.onSearch.emit(this.searchWord);
    this.router.navigate([''], {queryParams: {'q': encodeURIComponent(this.searchWord)}});
  }
}
