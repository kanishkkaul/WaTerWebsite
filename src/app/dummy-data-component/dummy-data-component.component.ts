import { Component, OnInit } from '@angular/core';

import { SystemDataService } from '../system-data.service';

import { SystemData } from '../system-data-model';

@Component({
  selector: 'app-dummy-data-component',
  templateUrl: './dummy-data-component.component.html',
  styleUrls: ['./dummy-data-component.component.css']
})
export class DummyDataComponentComponent implements OnInit {

  systemData: SystemData[];


  displayedColumns: string[] = ['time', 'value', 'tag', 'system_ID'];

  constructor(private systemDataService: SystemDataService) { }

  fetchSystemData() {
    this.systemDataService
      .getSystemData()
      .subscribe((data: SystemData[]) => {
        this.systemData = data;
        console.log('Data requested ...');
        console.log(this.systemData);
      });

  }

  ngOnInit() {
    this.fetchSystemData();
  }

}
