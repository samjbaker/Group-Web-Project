import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleSectionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
