import { Component, OnInit, ChangeDetectionStrategy,HostListener } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { NewsFeedService } from './news-feed.service';
import { Feedbox } from './feedbox.model';
import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsFeedService: NewsFeedService) {
    this.colorflag = 0;
    this.heartColor = "rgb(150, 165, 255)";
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
        this.feeds = data.feeds;
        console.log(this.feeds[0].user_info);
    });
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= (event.target.scrollHeight * 0.75)) {
      this.newsFeedService
      .getFeeds()
      .subscribe((feeds: Feedbox[]) => {
        this.feeds.push(...feeds);
      });
    }
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
      var noLikes:number = Math.floor(Math.random() * 5000);
      var noComments:number = Math.floor(Math.random() * 100);
      this.feeds.unshift(
        {
          "user_id": 100,
          "post_number": 100,
          "post_text": "" + message,
          "timestamp": "blah",
          "likes": 0+noLikes,
          "is_fact": false,
          "fact_ref": "blah",
          "no_comments": 0+noComments,
          "user_info": [{"user_id": 100,
              "user_name": "You",
              "pic_filename": "assets/profile_images/bot_images/0.png"}],
          "username": "You"
        }
      );
      this.newsFeedService.addPost({
        "user_id": 0,
        "post_number":0,
        "post_text": "" + message,
        "timestamp": "blah",
        "likes": 0+noLikes,
        "is_fact": false,
        "fact_ref": "blah",
        "no_comments": 0+noComments
      }).subscribe();
    }
    form.resetForm();
  }

   goToRef(url: string){
      window.open(url, "_blank");
   }
}
