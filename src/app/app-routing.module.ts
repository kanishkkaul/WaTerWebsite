import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportsComponent } from './reports/reports.component';



const routes: Routes = [{
  path: 'settings',
  data:{
    title: 'Settings'
  },
  component: SettingsComponent
},
{
  path: '',
  data:{
    title: 'Home'
  },
  component: HomeComponent
},
{
  path: 'usermgmt',
  data:{
    title: 'User Management'
  },
  component: UserManagementComponent
},
{
  path: 'reports',
  data:{
    title: 'Reports'
  },
  component: ReportsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
