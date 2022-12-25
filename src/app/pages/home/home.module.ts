import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ProductItemModule} from "../../modules/product-item/product-item.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductItemModule,
    FormsModule,
  ]
})
export class HomeModule { }
