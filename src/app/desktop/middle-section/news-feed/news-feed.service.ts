import {Feedbox} from './feedbox.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  getFeeds(): Observable<Feedbox[]> {
    return of([
      {
        "username": "David",
        "sentence": "U shall not pass",
        "noOfLikes": 32,
        "noOfComments": 47,
        "fact": false
      },
      {
        "username": "tony",
        "sentence": "I hate html",
        "noOfLikes": 69,
        "noOfComments": 11,
        "fact": false
      },
      {
        "username": "",
        "sentence": "Do you know that blah blah blah",
        "noOfLikes": 3,
        "noOfComments": 1,
        "fact": true
      },
      {
        "username": "Kanye",
        "sentence": "I am a creative genius",
        "noOfLikes": 14189,
        "noOfComments": 1122,
        "fact": false
      }]);
  }
}
