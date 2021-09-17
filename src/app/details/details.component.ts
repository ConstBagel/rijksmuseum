import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RijksmuseumService} from '../../services/rijksmuseum-api.service';
import { IDetails, IObjectDetails } from '../../services/model';

@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.css']
})

@Injectable()
export class AppDetails implements OnInit {
    @Output()
    type: EventEmitter<string>;
    private details: IObjectDetails | null = null; 

    constructor(
        private rijksmuseumService: RijksmuseumService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
               this.rijksmuseumService
                    .fetchCollectionDetails(params['id'])
                        .subscribe((data: IDetails) => {
                            this.details = data.artObject;
                    });
               });
    }

    goToMainPage(searchWord:string = '') {
        this.router.navigate([''], { relativeTo: this.route});
        localStorage.setItem('searchWord', searchWord);
    }
}