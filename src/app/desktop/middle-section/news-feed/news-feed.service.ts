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
        "noOfLikes": "32",
        "noOfComments": "47"
      },
      {
        "username": "tony",
        "sentence": "I hate html",
        "noOfLikes": "89",
        "noOfComments": "11"
      },
      {
        "username": "",
        "sentence": "Do you know that blah blah blah",
        "noOfLikes": "",
        "noOfComments": ""
      },
      {
        "username": "Kanye",
        "sentence": "I am a creative genius",
        "noOfLikes": "89",
        "noOfComments": "11"
      }]);
  }
}
