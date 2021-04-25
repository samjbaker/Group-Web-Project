import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { NewsFeedService } from './news-feed.service';
import { Feedbox } from './feedbox.model';
import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent implements OnInit {
  faHeart = faHeart;
  faComment = faComment;
  feeds: Feedbox[] | any[] = [];
  colorflag: number;
  heartColor: string;
  constructor(private newsFeedService: NewsFeedService) {
    this.colorflag = 0;
    this.heartColor = "rgb(150, 165, 255)";
  }

  ngOnInit(): void {
    this.newsFeedService
      .getFeeds()
      .subscribe((feeds: Feedbox[]) => {
        this.feeds = feeds;
      });
  }

  onScroll(): void {
    this.newsFeedService
      .getFeeds()
      .subscribe((feeds: Feedbox[]) => {
        this.feeds.push(...feeds);
      });
  }

  updateButtonColor(): void {
    this.colorflag++;
    this.colorflag = this.colorflag % 2;
    if (this.colorflag == 0) {
      this.heartColor = "rgb(150, 165, 255)";
    } else {
      this.heartColor = "red";
    }
  }

  postMessage(form: NgForm): void {
    var message:string = form.controls['post_text'].value;
    if (message != null && message.length > 0) {
      this.feeds.unshift(
        {
          "user_id": 100,
          "post_number": 100,
          "post_text": "" + message,
          "timestamp": "blah",
          "likes": 0,
          "is_fact": false,
          "fact_ref": "blah",
          "no_comments": 0,
          "username": "You"
        }
      );
      this.newsFeedService.addPost({
        "user_id": 0,
        "post_number":0,
        "post_text": "" + message,
        "timestamp": "blah",
        "likes": 0,
        "is_fact": false,
        "fact_ref": "blah",
        "no_comments": 0
      }).subscribe();
    }
    form.resetForm();
  }
}
