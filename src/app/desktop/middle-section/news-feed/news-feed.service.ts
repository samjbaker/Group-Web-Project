import {Feedbox} from './feedbox.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
