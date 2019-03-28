import { Component, OnInit } from '@angular/core';

export interface ID {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-system-select',
  templateUrl: './system-select.component.html',
  styleUrls: ['./system-select.component.css']
})
export class SystemSelectComponent {
  ids: ID[] = [
    {value: 'system-0', viewValue:'System 0'},
    {value: 'system-1', viewValue:'System 1'},
    {value: 'system-2', viewValue:'System 2'}
  ];
}
