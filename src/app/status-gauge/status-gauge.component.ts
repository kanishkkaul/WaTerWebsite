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
      ['y ', 21]
    ],
    options: {
      width: 600,
      height: 400,
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 200,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
      min: 0,
      max: 200
    },
  };
}

export interface Chart{
  type: string,
  data: any,
  options: any;
}