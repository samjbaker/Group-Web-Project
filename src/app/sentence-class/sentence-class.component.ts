import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sentence-class',
  templateUrl: './sentence-class.component.html',
  styleUrls: ['./sentence-class.component.css']
})

export class SentenceClassComponent implements OnInit {
sentenceList: any = [];
public randomSentence = ['This is a test'];

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
