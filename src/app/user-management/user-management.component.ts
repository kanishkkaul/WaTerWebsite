import { Component, OnInit } from '@angular/core';


const USER_DATA : User[] = [
  {name: "Kanishk Kaul", location: "Los Angeles, CA",  
    email: "kaulkanishk96@gmail.com", status:{label:"Active", class:"label-success"}, role: "admin"},
    {name: "Kanishk Kaul", location: "Los Angeles, CA",  
    email: "kaulkanishk96@gmail.com", status:{label:"Active", class:"label-danger"}, role: "admin"},
    {name: "Kanishk Kaul", location: "Los Angeles, CA",  
    email: "kaulkanishk96@gmail.com", status:{label:"Active", class:"label-success"}, role: "admin"},
  {name: "Bilal", location: "Los Angeles, CA",  
    email: "sgawde1234@gmail.com", status:{label:"Pending", class:"label-warning"}, role: "admin"},

];


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'  
],
})


export class UserManagementComponent {

  user_data = USER_DATA;

  displayedColumns: string[] = ['name', 'email', 'location', 'status', 'role'];

}

export interface User {
  name: String;
  location: String;
  email: any;
  status: any;
  role: any;
}
