import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPanelRoutingModule } from './products-panel-routing.module';
import { ProductsPanelComponent } from './products-panel.component';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ProductsPanelComponent,
    ProductsAddEditComponent
  ],
  imports: [
    CommonModule,
    ProductsPanelRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProductsPanelModule { }
