import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_URL, KEY } from './config';
import { IRespond, IDetails } from './model';

@Injectable()
export class RijksmuseumService {
  private queryParams: {} = {};

  constructor(private http: HttpClient) {}

  public fetchPictures(queryParam): Observable<IRespond> {
    this.queryParams = { ...this.queryParams, ...queryParam };
    const searchQuery = new URLSearchParams(this.queryParams).toString();
    return this.http.get<IRespond>(`${BASE_URL}?key=${KEY}&${searchQuery}`);
  }

  public fetchCollectionDetails(objectNumber: string): Observable<IDetails> {
    return this.http.get<IDetails>(`${BASE_URL}/${objectNumber}?key=${KEY}`);
  }
}
