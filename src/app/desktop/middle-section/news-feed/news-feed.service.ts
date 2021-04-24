import {Feedbox} from './feedbox.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor(private http: HttpClient) {}
  getFeeds(): Observable<Feedbox[]> {
    return this.http.get(
      `http://localhost:3000/api`
    ) as Observable<Feedbox[]>;
  }

  addPost(feed: Feedbox): Observable<Feedbox> {
    return this.http.post<Feedbox>(`http://localhost:3000/api`, feed);
  }
}
