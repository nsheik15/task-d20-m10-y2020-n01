import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

const materialComponents = [
  MatDialogModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
