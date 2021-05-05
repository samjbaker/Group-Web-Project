import { Injectable } from '@angular/core';
import { Feedbox } from './feedbox.model';
import { Observable } from 'rxjs';
import { NewsFeedService } from './news-feed.service';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedResolverService implements Resolve<Feedbox[]>{

  constructor(private newsFeedService: NewsFeedService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<Feedbox[]> | Promise<Feedbox[]> | Feedbox[] {
    return this.newsFeedService.getFeeds();
  }

}
