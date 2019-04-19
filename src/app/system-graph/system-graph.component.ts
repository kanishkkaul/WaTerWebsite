import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-graph',
  templateUrl: './system-graph.component.html',
  styleUrls: ['./system-graph.component.css']
})
export class SystemGraphComponent {  
    chart: Chart = {
      type: 'Line',
      myColumnNames: ['Day', 'Salinity', 'Variable X', 'Variable Y', 'Variable A', 'Variable B', 'Variable C'],

      data: [
        [1,  37.8, 80.8, 41.8, 32, 76, 31],
        [2,  30.9, 69.5, 32.4, 29, 98, 78],
        [3,  25.4,   57, 25.7, 22, 16, 91],
        [4,  11.7, 18.8, 10.5, 18.34, 7, 31],
        [5,  11.9, 17.6, 10.4, 22, 9.87, 51],
        [6,   8.8, 13.6,  7.7, 32, 22, 36],
        [7,   7.6, 12.3,  9.6, 32, 45, 42],
      ],

      options: {
        title: 'Box Office Earnings in First Two Weeks of Opening',
        subtitle: 'in millions of dollars (USD)',
        width: 900,
        height: 500
      },
    };
  }
  export interface Chart{
    type: string,
    data: any,
    myColumnNames: any,
    options: any
  }
