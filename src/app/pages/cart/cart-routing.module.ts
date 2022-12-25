import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart.component";
import {OrdersComponent} from "../orders/orders.component";
import {ProductsComponent} from "../products/products.component";

const routes: Routes = [
  {
    path:'',
    component: CartComponent
  },
  {
    path:'orders',
    component: OrdersComponent
  },
  {
    path:'products',
    component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
