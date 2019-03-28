import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../node_modules/angular-admin-lte/lib/layout/layout.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public isCustomLayout: boolean;

  // constructor(
  //   private layoutService: LayoutService
  // ) {}

  // ngOnInit(){
  //   this.layoutService.isCustomLayout.subscribe((value: boolean) => {
  //     this.isCustomLayout = value;
  //   });
  // }
  title = 'frontend';
}
