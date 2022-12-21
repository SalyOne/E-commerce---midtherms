import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import {AdminPanelComponent} from "./admin-panel.component";
import {ActivatedRoute, RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    RouterModule
  ]
})
export class AdminPanelModule { }
