import { Component, OnInit } from '@angular/core';
import { RijksmuseumService } from '../rijksmuseum-api.service/rijksmuseum-api.service';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: './app.component.html',
    providers: [RijksmuseumService]
})

export class AppComponent implements OnInit {
   constructor() {}
   ngOnInit() {}
}