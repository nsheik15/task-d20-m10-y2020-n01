import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  sweden = false;
  usa = false;
  england = false;
  sw = true;
  us = true;
  en = true;

  constructor() { }

  ngOnInit(): void {
  }

  removeCheckbox() {
    if (this.sweden) {
      this.sw = false;
    }
    if (this.usa) {
      this.us = false;
    }
    if (this.england) {
      this.en = false;
    }
  }

}
