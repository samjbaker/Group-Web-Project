import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public post_text = ['default'];
dataList: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.dataService.getAll().subscribe(
        Sentence => {
          this.dataList = Sentence;
          this.post_text = this.dataList.post_text;
        },
        error => {
          console.log(error);
        });
  }

}
