import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: []
})

export class AppPageNotFound {
    constructor(private router: Router, private route: ActivatedRoute) {}
    goToMainPage() {
        this.router.navigate([''], { relativeTo: this.route });
    }
}