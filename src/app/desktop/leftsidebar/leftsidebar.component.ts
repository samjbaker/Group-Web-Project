import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftsidebarComponent implements OnInit {
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
