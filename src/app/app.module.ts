import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { adminLteConf } from './admin-lte.conf';
import {LayoutModule} from 'angular-admin-lte';
import {DropdownModule} from 'angular-admin-lte';
import { SystemSelectComponent } from './system-select/system-select.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//import from material.module.ts for all Angular Material Components
import { MaterialModule } from './material.module';
import { StatusGaugeComponent } from './status-gauge/status-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemSelectComponent,
    StatusGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule.forRoot(adminLteConf)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
