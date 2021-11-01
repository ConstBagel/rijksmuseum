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
    isLoading: boolean = false;
    isDetailsPresent: boolean = true;

    constructor(
        private rijksmuseumService: RijksmuseumService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params
            .subscribe(({id}) => {
                this.isLoading = true;
                this.rijksmuseumService
                    .fetchCollectionDetails(id)
                        .subscribe((data: IDetails) => {
                            this.details = data.artObject;
                            this.isLoading = false;
                    },
                        (_) => {
                            this.isDetailsPresent = false;
                            this.isLoading = false;
                    });
                });
    }

    getEncodedQuery(searchParam: string): string {
        return encodeURIComponent(searchParam);
    }

    goToMainPage(searchWord:string = '') {
        this.router.navigate([''], { relativeTo: this.route});
    }
}