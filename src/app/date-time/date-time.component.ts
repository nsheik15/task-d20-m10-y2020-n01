import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {

  startDate;
  endDate;
  momentStartDate;
  momentEndDate;

  constructor() { }

  ngOnInit(): void {
  }

  onStartDateChange() {
    this.momentStartDate = moment(this.startDate).format('DD/MM/YYYY hh:mm A');
  }

  onEndDateChange() {
    this.momentEndDate = moment(this.endDate).format('DD/MM/YYYY hh:mm A');
  }

}
