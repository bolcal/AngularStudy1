import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppApplyForm } from './apply-form/apply-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppApplyForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
