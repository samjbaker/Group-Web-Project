import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { NewsFeedService } from './news-feed.service';
import { Feedbox } from './feedbox.model';

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
}
