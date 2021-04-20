import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
