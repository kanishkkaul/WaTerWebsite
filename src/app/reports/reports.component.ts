import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
    selected: {startDate: Moment, endDate: Moment};

    
}
