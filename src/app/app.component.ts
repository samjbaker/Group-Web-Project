import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
sentenceList: any = [];
public randomSentence = ['Default sentence'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.dataService.getAll().subscribe(
        data => {
          this.sentenceList = data;
          this.randomSentence = this.sentenceList.randomSentence;
        },
        error => {
          console.log(error);
        });
  }

}
