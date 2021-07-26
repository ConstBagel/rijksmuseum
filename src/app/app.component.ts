import { Component, Injectable, OnInit } from '@angular/core';
import { RijksmuseumService } from 'src/services/rijksmuseum-api.service';

import { IRespond, IObject } from 'src/services/model';
import { identifierModuleUrl, ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: './app.component.html',
  providers: [RijksmuseumService],
})
@Injectable()
export class AppComponent implements OnInit {
  totalItemsCount: number | null = null;
  itemsPerPage: number | null = null;
  currentPage: number | null = null;
  items: IObject[] | null = null;
  itemsPerPageOptions: number[]; // not used
  borderValueOfPages: number; // not used

  constructor(private rijksmuseumService: RijksmuseumService) {}

  ngOnInit() {
    this.fetchPictures();
  }

  /*
    ngOnChanges() {
        this.api.request().subscribe((data: IRespond) => {
            this.items = data.artObjects;
            this.itemsPerPage = this.items.length;
            this.totalItemsCount = data.count;
        });
    }
*/

  handleSearch(searchFiler: string) {
    this.currentPage = null;
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
    this.rijksmuseumService.fetchPictures(queryParam).subscribe(({ artObjects, count }: IRespond) => {
      this.items = artObjects;
      this.itemsPerPage = this.items.length;
      this.totalItemsCount = count;
    });
  }
}
