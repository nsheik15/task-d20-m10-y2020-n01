import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.scss']
})
export class AddRemoveComponent implements OnInit {

  inputText = '';
  textArray = [];
  OffFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

  addOfferings() {
    if ( this.inputText !== '') {
      this.OffFlag = true;
      this.textArray.push(this.inputText);
    }
  }

  removeVal(i) {
    this.textArray.splice(i, 1);
  }

}
