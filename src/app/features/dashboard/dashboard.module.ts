import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
  ],
  imports: [
    SidebarComponent,
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
