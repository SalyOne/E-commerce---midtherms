import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./modules/main-layout/main-layout.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: '/',
    pathMatch:"full"
  },
  {
    path:"",
    component: MainLayoutComponent,
    children:[
      {
        path:"products",
        loadChildren:()=> import('./pages/products/products.module').then(m=>m.ProductsModule)
      },
      {
        path:"cart",
        loadChildren:()=> import('./pages/cart/cart.module').then(m=>m.CartModule)
      },
      {
        path:"orders",
        loadChildren:()=> import('./pages/orders/orders.module').then(m=>m.OrdersModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
