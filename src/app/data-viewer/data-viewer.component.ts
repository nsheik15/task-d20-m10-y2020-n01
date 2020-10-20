import { GetDataService } from './../get-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.scss']
})
export class DataViewerComponent implements OnInit {

  AutoCompleteForm: FormGroup;
  public ReceivedDataArray = [];
  private isValueFound = false;

  get AutoCompleteField() {
    return this.AutoCompleteForm.get('AutoCompleteField');
  }

  constructor(private fb: FormBuilder, private service: GetDataService) { }

  ngOnInit(): void {
    this.AutoCompleteForm = this.fb.group({
      AutoCompleteField: ['']
    });

    this.service.getData().subscribe(val => this.ReceivedDataArray = val);
    // console.log('Received Data: ' + this.ReceivedDataArray[0]);
  }

  fetchData(val) {
    for (let ReceivedData of this.ReceivedDataArray) {
      if (val === ReceivedData.name) {
        alert(`User Details: ${JSON.stringify(ReceivedData)}`);
        this.isValueFound = true;
      }
    }
    if (!this.isValueFound) {
      alert(`Please Enter a Valid Name!!`);
    }
  }

}
