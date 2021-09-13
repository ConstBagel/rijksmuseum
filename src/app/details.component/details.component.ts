import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RijksmuseumService} from '../../rijksmuseum-api.service/rijksmuseum-api.service';
import { IRespondObject, IObjectDetails } from '../../rijksmuseum-api.service/model';
@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html',
    styleUrls: []
})

export class DetailsComponent implements OnInit {
    @Output()
    type: EventEmitter<string>;
    private details: IObjectDetails;

    constructor(
        private rijksmuseumService: RijksmuseumService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
               this.rijksmuseumService
                    .getCollectionDetails(params['id'])
                        .subscribe((data: IRespondObject) => {
                            this.details = data.artObject;
                            console.log(this.details.webImage.url);
                    });
               });
    }

    goToMainPage() {
        this.router.navigate([''], { relativeTo: this.route});
    }

    setType(_type: string) {
        this.type.emit(_type);
        this.router.navigate([''], { relativeTo: this.route});
    }
}