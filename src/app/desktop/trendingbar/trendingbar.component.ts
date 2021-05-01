import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trendingbar',
  templateUrl: './trendingbar.component.html',
  styleUrls: ['./trendingbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendingbarComponent implements OnInit {

  trends: string[] = [ "I love soup", "Cats", "Jake Paul", "Simps", "Meghan Markle"];
  constructor() { }

  ngOnInit(): void {
  }

}
