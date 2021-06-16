import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
