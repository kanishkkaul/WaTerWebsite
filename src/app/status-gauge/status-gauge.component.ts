import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-gauge',
  templateUrl: './status-gauge.component.html',
  styleUrls: ['./status-gauge.component.css']
})
export class StatusGaugeComponent {   
  chart = {
    type: 'Gauge',
    data: [
      ['Salinity Level', 50],
      ['x level', 72],
      ['y level', 21]
    ],
    options: {
      width: 400,
      height: 120,
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5
    },
    min: 0,
    max: 100
  };
}