import { Component, Input, EventEmitter, Output } from '@angular/core';

import { STEPS, LIMIT_ITEMS, DEFAULT_PAGE } from 'src/services/config';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})

export class AppPagination {
  @Input()
  totalItemsCount?: number;
  @Input()
  itemsPerPage?: number;
  @Input()
  currentPage?: number;
  minStep: number;
  @Output()
  onPageNumberChange: EventEmitter<number> = new EventEmitter();
  @Output()
  onItemsPerPageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.minStep = Math.min(...STEPS);
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
      const items = this.totalItemsCount < LIMIT_ITEMS ? this.totalItemsCount : LIMIT_ITEMS;
      return STEPS.filter((step) => Math.ceil(items / step) >= this.currentPage);
    }
    return STEPS.filter((step) => step < this.totalItemsCount);
  }

  private getTotalPagesCount(): number {
    if (!this.totalItemsCount && !this.itemsPerPage) return;

    const itemsPerPage = Math.max(this.itemsPerPage, this.minStep);
    const maxItems = Math.min(this.totalItemsCount, LIMIT_ITEMS);
    return Math.ceil(maxItems / itemsPerPage);
  }

  getPaginationView() {
    const totalCount = this.getTotalPagesCount();
    const firstItem = 1;
    const currentPage = this.currentPage || DEFAULT_PAGE;
    const insertSearch = [currentPage - 1, currentPage, currentPage + 1].filter(
      (page) => page > firstItem && page < totalCount
    );
    const tempArr = [firstItem, ...insertSearch, totalCount];
    return tempArr.reduce((arr, it, i) => {
      arr.push(it);
      const nextNumber = ++it;
      const nextItem = tempArr[++i];
      if (nextItem && nextNumber !== nextItem) arr.push('...');
      return arr;
    }, []);
  }
}
