import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { adminLteConf } from './admin-lte.conf';
import {LayoutModule} from 'angular-admin-lte';
import {DropdownModule} from 'angular-admin-lte';
import {MatSelectModule} from '@angular/material/select';
import { SystemSelectComponent } from './system-select/system-select.component'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    SystemSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    MatSelectModule,
    LayoutModule.forRoot(adminLteConf)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
