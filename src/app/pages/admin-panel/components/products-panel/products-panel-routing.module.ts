import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsPanelComponent} from "./products-panel.component";
import {ProductsAddEditComponent} from "./products-add-edit/products-add-edit.component";

const routes: Routes = [
  {
    path:'',
    component: ProductsPanelComponent
  },
  {
    path:'add',
    component: ProductsAddEditComponent
  },
  {
    path:'edit/:id',
    component: ProductsAddEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsPanelRoutingModule { }
