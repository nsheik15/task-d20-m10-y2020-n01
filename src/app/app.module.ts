import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TotalCountsComponent } from './total-counts/total-counts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusComponent } from './status/status.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayRecordsComponent } from './display-records/display-records.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalCountsComponent,
    StatusComponent,
    CheckboxComponent,
    DisplayRecordsComponent,
    AddRemoveComponent,
    DateTimeComponent,
    DataViewerComponent
  ],
  entryComponents: [
    StatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
