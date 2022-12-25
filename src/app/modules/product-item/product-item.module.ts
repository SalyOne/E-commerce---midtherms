import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import {RouterModule, Routes} from "@angular/router";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from "../../pages/products/products.component";

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ProductItemComponent,
  ]
})
export class ProductItemModule { }
