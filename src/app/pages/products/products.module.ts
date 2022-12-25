import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductItemModule} from "../../modules/product-item/product-item.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductItemModule,
    FormsModule,
  ]
})
export class ProductsModule { }
