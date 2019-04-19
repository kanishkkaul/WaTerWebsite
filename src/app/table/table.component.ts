import { Component, Input } from '@angular/core';



const DATATABLE : System[] = [
  {name: "Pressure", min: 10, max: 200, avg:35.23},
  {name: "Salinity", min: 10, max: 300, avg:35.23},
  {name: "X", min: 10, max: 500, avg:35.23},
  {name: "A", min: 10, max: 100, avg:89.32},
  {name: "B", min: 10, max: 600, avg:71.98},
  {name: "C", min: 10, max: 250, avg:12.76},
  {name: "D", min: 10, max: 1000, avg:433.21},
  {name: "E", min: 10, max: 90, avg:21.12}
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  dataSource = DATATABLE;

  displayedColumns: string[] = ['name', 'min', 'max', 'avg'];
}

export interface System {
  name: string,
  min: number,
  max: number,
  avg: number
}
