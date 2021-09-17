import { Component, Injectable, OnInit } from '@angular/core';
import { RijksmuseumService } from 'src/services/rijksmuseum-api.service';

import { IRespond, IObject } from 'src/services/model';

@Component({
  selector: 'app-main',
  styleUrls: ['main.component.css'],
  templateUrl: './main.component.html',
  providers: [RijksmuseumService],
})

@Injectable()
export class AppMain implements OnInit {
  totalItemsCount: number | null = null;
  itemsPerPage: number | null = null;
  currentPage: number | null = null;
  items: IObject[] | null = null;
  inputSearch: string | null = null;
  itemsPerPageOptions: number[]; // not used
  borderValueOfPages: number; // not used

  constructor(private rijksmuseumService: RijksmuseumService) {}

  ngOnInit() {
    const searchWord = localStorage.getItem('searchWord');
    if (searchWord) {
      this.handleSearch(searchWord);
      this.inputSearch = searchWord;
      localStorage.setItem('searchWord', '');
    }
    else {
      this.fetchPictures();
    }
  }

  handleSearch(searchFiler: string) {
    this.fetchPictures({
      p: '',
      ps: '',
      q: searchFiler,
    });
  }

  handleSort(sortFilter: string) {
    this.fetchPictures({ s: sortFilter });
  }

  handlePageNumberChange(pageNumber: number) {
    this.fetchPictures({ p: pageNumber });
    this.currentPage = pageNumber;
  }

  handleItemsPerPageChange(itemsPerPage: string) {
    this.fetchPictures({ ps: itemsPerPage });
  }

  identify(index, item) {
    return item.id;
  }

  fetchPictures(queryParam = {}) {
    this.items = this.items && null;
    this.rijksmuseumService.fetchPictures(queryParam).subscribe(({ artObjects, count }: IRespond) => {
      this.items = artObjects;
      this.itemsPerPage = this.items.length;
      this.totalItemsCount = count;
    });
  }
}