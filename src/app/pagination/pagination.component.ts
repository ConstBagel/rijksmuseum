import { Component, Input, EventEmitter, Output } from '@angular/core';

import { config } from 'src/services/config';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class AppPagination {
  @Input()
  totalItemsCount: number;
  @Input()
  itemsPerPage: number;
  @Input()
  currentPage: number;
  minStep: number;
  @Output()
  onPageNumberChange: EventEmitter<number> = new EventEmitter();
  @Output()
  onItemsPerPageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.minStep = Math.min(...config.STEPS);
  }

  handleItemsPerPageChange(option) {
    this.onItemsPerPageChange.emit(option);
  }

  handlePageNumberChange(event) {
    const pageNumber = +event.target.innerText;
    if (!pageNumber) return;
    this.onPageNumberChange.emit(pageNumber);
  }

  getItemsPerPageOptions(): number[] {
    if (this.currentPage) {
      const items = this.totalItemsCount < config.LIMIT_ITEMS ? this.totalItemsCount : config.LIMIT_ITEMS;
      return config.STEPS.filter((step) => Math.ceil(items / step) >= this.currentPage);
    }

    return config.STEPS.filter((step) => step < this.totalItemsCount);
  }

  private getTotalPagesCount(): number {
    if (!this.totalItemsCount && !this.itemsPerPage) return;

    const itemsPerPage = Math.max(this.itemsPerPage, this.minStep);
    // const itemsPerPage = this.itemsPerPage < this.minStep ? this.minStep : this.itemsPerPage;
    // const maxItems = this.totalItemsCount > config.LIMIT_ITEMS ? config.LIMIT_ITEMS : this.totalItemsCount;
    const maxItems = Math.min(this.totalItemsCount, config.LIMIT_ITEMS);
    return Math.ceil(maxItems / itemsPerPage);
  }

  getPaginationView() {
    const totalCount = this.getTotalPagesCount();
    console.log(this.currentPage);
    const firstItem = 1;
    const currentPage = this.currentPage || config.DEFAULT_PAGE;
    const insertSearch = [currentPage - 1, currentPage, currentPage + 1].filter(
      (page) => page > firstItem && page < totalCount
    );
    const tempArr = [firstItem, ...insertSearch, totalCount];
    console.log('tempArr', tempArr);
    return tempArr.reduce((arr, it, i) => {
      arr.push(it);
      const nextNumber = ++it;
      const nextItem = tempArr[++i];
      if (nextItem && nextNumber !== nextItem) arr.push('...');
      return arr;
    }, []);
  }
}
