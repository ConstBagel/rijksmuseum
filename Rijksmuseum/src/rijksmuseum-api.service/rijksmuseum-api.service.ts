import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { config } from './config';
import { IRespond } from './model';

@Injectable()
export class RijksmuseumService {
    private addedQueryParams: {};
    constructor(private http: HttpClient) {
      this.addedQueryParams = {};
    }

    public addQueryParams(key: string, val: string) {
      this.addedQueryParams[key] = val;
    }

    public request(): Observable<IRespond> {
      const addQuery = Object.keys(this.addedQueryParams)
        .reduce((query, key) => {
          query += `&${key}=${this.addedQueryParams[key]}`;
          return query;
      } , `?key=${config.KEY}`);
     return  this.http.get<IRespond>(`${config.BASE_URL}${addQuery}`);
    }
}