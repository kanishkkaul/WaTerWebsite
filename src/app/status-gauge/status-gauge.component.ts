import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-gauge',
  templateUrl: './status-gauge.component.html',
  styleUrls: ['./status-gauge.component.css']
})

export class StatusGaugeComponent {   
  chart: Chart = {
    type: 'Gauge',
    data: [
      ['Salinity', 50],
      ['x', 72],
      ['y ', 21],
      ['A', 13],
      ['B', 56],
      ['C', 35]
    ],
    options: {
      width: 400,
      height: 300,
      redFrom: 190,
      redTo: 200,
      yellowFrom: 175,
      yellowTo: 190,
      minorTicks: 5,
      min: 0,
      max: 200,
      forcelFrame: true
    },
  };
}

export interface Chart{
  type: string,
  data: any,
  options: any;
}