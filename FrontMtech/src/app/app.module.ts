import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { MaterialModule } from './material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropDownListModule,
    GridModule,MaterialModule,MatGridListModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
