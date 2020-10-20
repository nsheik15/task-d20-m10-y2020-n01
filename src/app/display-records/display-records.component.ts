import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-records',
  templateUrl: './display-records.component.html',
  styleUrls: ['./display-records.component.scss']
})
export class DisplayRecordsComponent implements OnInit {

  myArray = [
    '28 - Sweden',
    '56 - USA',
    '89 - England',
    '28 - Sweden',
    '56 - USA',
    '89 - England',
    '28 - Sweden',
    '56 - USA',
    '89 - England',
    '56 - USA',
    '89 - England'
  ];
  newArray = [];
  checkMe = false;

  constructor() { }

  ngOnInit(): void {
    this.newArray = this.myArray.slice(0, 5);
  }

}
