import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NgForm} from '@angular/forms';

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

  postMessage(form: NgForm): void {
    form.resetForm();
  }
}
