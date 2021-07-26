import { Component, OnInit, Input } from '@angular/core';

import { IObject } from 'src/services/model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class AppListItem implements OnInit {
  @Input()
  item: IObject;
  isShown: boolean = false;

  constructor() {}

  ngOnInit() {}

  togglePopup() {
    this.isShown = !this.isShown;
  }
}
