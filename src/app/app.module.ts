import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { adminLteConf } from './admin-lte.conf';
import {LayoutModule} from 'angular-admin-lte';
import { BoxModule } from 'angular-admin-lte';  
import {DropdownModule} from 'angular-admin-lte';
import {AlertModule} from 'angular-admin-lte';
import { SystemSelectComponent } from './system-select/system-select.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//import from material.module.ts for all Angular Material Components
import { MaterialModule } from './material.module';
import { StatusGaugeComponent } from './status-gauge/status-gauge.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemGraphComponent } from './system-graph/system-graph.component';
import { HeaderComponent } from './header/header.component';

import {NumberPickerModule} from 'ng-number-picker';
import { HeaderRightComponent } from './header-right/header-right.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemSelectComponent,
    StatusGaugeComponent,
    SettingsComponent,
    HomeComponent,
    UserManagementComponent,
    ReportsComponent,
    SystemGraphComponent,
    HeaderComponent,
    HeaderRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoxModule,
    AlertModule,
    DropdownModule,
    MaterialModule,
    BrowserAnimationsModule,
    NumberPickerModule,
    GoogleChartsModule.forRoot(),
    LayoutModule.forRoot(adminLteConf)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
