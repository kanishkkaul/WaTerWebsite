//import into app.module for all Angular Material Components

import { NgModule } from '@angular/core';

import {MatSelectModule} from '@angular/material';

@NgModule({
  imports: [MatSelectModule],
  exports: [MatSelectModule],
})
export class MaterialModule { }