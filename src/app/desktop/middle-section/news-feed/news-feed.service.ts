import {Feedbox} from './feedbox.model';
import {Post} from './post.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor(private http: HttpClient) {}
  getFeeds(): Observable<Feedbox[]> {
    return this.http.get(`http://localhost:3000/api`) as Observable<Feedbox[]>;
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`http://localhost:3000/api`, post);
  }  
}
