import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { config } from './config';
import { IRespond } from './model';

@Injectable()
export class RijksmuseumService {
  private queryParams: {} = {};

  constructor(private http: HttpClient) {}

  public fetchPictures(queryParam): Observable<IRespond> {
    this.queryParams = { ...this.queryParams, ...queryParam };

    const searchQuery = new URLSearchParams(this.queryParams).toString();
    return this.http.get<IRespond>(`${config.BASE_URL}?key=${config.KEY}&${searchQuery}`);
  }
}
