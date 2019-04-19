import { Component, OnInit } from '@angular/core';

import system_data from '../../assets/data/sensor_data.json';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{
    status: Status = {
      backgroundColor: "warning",
      icon_class: "icon fa fa-warning",
      text: "System is borderline!"
    };

    param1: ParamObject = {
      value: 20,
      min:  1,
      max: 100
    };

    param2: ParamObject = {
      value: 20,
      min:  1,
      max: 100
    };

    param3: ParamObject = {
      value: 20,
      min:  1,
      max: 100
    };

    /*setParams = (system_data) => {
        for (let data in system_data) {
          console.log(data);
        }
    }*/

}

export interface Status{
  backgroundColor: string,
  icon_class: string,
  text: string
}

export interface ParamObject{
  value: number,
  min: number,
  max: number
}


