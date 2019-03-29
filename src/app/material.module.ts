//import into app.module for all Angular Material Components

import { NgModule } from '@angular/core';

import {MatSelectModule} from '@angular/material';

import {MatButtonModule} from '@angular/material/button';

import {LocationStrategy, PathLocationStrategy} from  '@angular/common'

@NgModule({
  imports: [MatSelectModule, MatButtonModule],
  exports: [MatSelectModule, MatButtonModule],
})
export class MaterialModule { }