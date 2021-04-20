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

  throttle:number = 0;
  distance:number = 2;
  feeds: Feedbox[] | any[] = [];

  constructor(private newsFeedService: NewsFeedService) { }

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
}
