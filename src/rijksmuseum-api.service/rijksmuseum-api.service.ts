import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { config } from './config';
import { IRespond, IRespondObject } from './model';

@Injectable()
export class RijksmuseumService {
    constructor(private http: HttpClient) {}
    
    public getCollection(query: string = ''): Observable<IRespond> {
      return this.http.get<IRespond>(`${config.BASE_URL}?key=${config.KEY}${query}`);
    }

    public getCollectionDetails(objectNumber: string): Observable<IRespondObject> {
      return this.http
        .get<IRespondObject>(`${config.BASE_URL}/${objectNumber}?key=${config.KEY}`);
    }
}