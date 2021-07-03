import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { config } from './config';
import { IRespond } from './model';

@Injectable()
export class RijksmuseumService {
    private addedQueryParams: {}[];
    constructor(private http: HttpClient) {
      this.addedQueryParams = [];
    }

    public addQueryParams(key: string, val: string) {
      const index = this.addedQueryParams
      .findIndex(obj => key in obj);
      console.log('index' , index)
      if (index > -1) {
        this.addedQueryParams[index][key] = val;
        return;
      }
      this.addedQueryParams.push({ [key] : val });
      console.log(this.addedQueryParams);
    }

    public removeQueryParams(key: string) {
      this.addedQueryParams = this.addedQueryParams
        .filter(obj => !(key in obj));
    }

    public request(): Observable<IRespond> {
      const addQuery = this.addedQueryParams
        .reduce((query, obj) => {
          const [ key, val ] = Object.entries(obj).pop(); 
          query += `&${key}=${val}`;
          return query;
      } , `?key=${config.KEY}`);
     return  this.http.get<IRespond>(`${config.BASE_URL}${addQuery}`);
    }
}