import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../shared/material/material.module';

import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentAddComponent } from './student-add/student-add.component';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent
  ]
    ,
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    StudentListComponent
  ]

})
export class StudentModule { }
