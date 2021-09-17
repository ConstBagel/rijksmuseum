import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IObject } from 'src/services/model';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
})

export class AppListItem implements OnInit {
  @Input()
  item: IObject;
  isShown: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  togglePopup() {
    this.isShown = !this.isShown;
  }

  goToDetailsPage() {
    this.router
        .navigate(['details', this.item.objectNumber ], { relativeTo: this.route });
  }
}
