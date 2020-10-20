import { StatusComponent } from './../status/status.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-counts',
  templateUrl: './total-counts.component.html',
  styleUrls: ['./total-counts.component.scss']
})
export class TotalCountsComponent implements OnInit {

  open = 1;
  pendings = 1;
  resolved = 1;
  dialogOneResult = 'Resolved';
  dialogTwoResult = 'Pending';
  dialogThreeResult = 'Open';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openStatusOne() {
    let dialogRef = this.dialog.open(StatusComponent);
    let currentVal = this.dialogOneResult;

    dialogRef.afterClosed().subscribe( result => {
      this.dialogOneResult = result;
      console.log(this.dialogOneResult);

      if (this.dialogOneResult === 'Open') {
        this.open++;
      } else if (this.dialogOneResult === 'Pending') {
        this.pendings++;
      } else if (this.dialogOneResult === 'Resolved') {
        this.resolved++;
      }

      if (currentVal === 'Open') {
        this.open--;
      } else if (currentVal === 'Pending') {
        this.pendings--;
      } else if (currentVal === 'Resolved') {
        this.resolved--;
      }
    });
  }

  openStatusTwo() {
    let dialogRef = this.dialog.open(StatusComponent);
    let currentVal = this.dialogTwoResult;

    dialogRef.afterClosed().subscribe( result => {
      this.dialogTwoResult = result;
      console.log(this.dialogTwoResult);

      if (this.dialogTwoResult === 'Open') {
        this.open++;
      } else if (this.dialogTwoResult === 'Pending') {
        this.pendings++;
      } else if (this.dialogTwoResult === 'Resolved') {
        this.resolved++;
      }

      if (currentVal === 'Open') {
        this.open--;
      } else if (currentVal === 'Pending') {
        this.pendings--;
      } else if (currentVal === 'Resolved') {
        this.resolved--;
      }
    });
  }

  openStatusThree() {
    let dialogRef = this.dialog.open(StatusComponent);
    let currentVal = this.dialogThreeResult;

    dialogRef.afterClosed().subscribe( result => {
      this.dialogThreeResult = result;
      console.log(this.dialogThreeResult);

      if (this.dialogThreeResult === 'Open') {
        this.open++;
      } else if (this.dialogThreeResult === 'Pending') {
        this.pendings++;
      } else if (this.dialogThreeResult === 'Resolved') {
        this.resolved++;
      }

      if (currentVal === 'Open') {
        this.open--;
      } else if (currentVal === 'Pending') {
        this.pendings--;
      } else if (currentVal === 'Resolved') {
        this.resolved--;
      }
    });
  }

}
