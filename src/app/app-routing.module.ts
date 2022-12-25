import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./modules/main-layout/main-layout.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [

  {
    path:"",
    component: MainLayoutComponent,
    children:[
      {
        path:"",
        loadChildren:()=> import('./pages/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:"auth",
        loadChildren:()=> import('./pages/auth/auth.module').then(m=>m.AuthModule)
      },
      {
        path:"products",
        loadChildren:()=> import('./pages/products/products.module').then(m=>m.ProductsModule)
      },
      {
        path:"cart",
        loadChildren:()=> import('./pages/cart/cart.module').then(m=>m.CartModule),
        canActivate: [AuthGuard]
      },
      {
        path:"orders",
        loadChildren:()=> import('./pages/orders/orders.module').then(m=>m.OrdersModule),
        canActivate: [AuthGuard]
      },
      {
        path:"admin-panel",
        loadChildren:()=> import('./pages/admin-panel/admin-panel.module').then(m=>m.AdminPanelModule),
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
