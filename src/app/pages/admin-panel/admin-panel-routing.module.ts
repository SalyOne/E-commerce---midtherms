import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPanelComponent} from "./admin-panel.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin-panel/products-panel',
    pathMatch:'full'
  },
  {
    path:"",
    component:AdminPanelComponent,
    children:[
      {
        path: "products-panel",
        loadChildren: () => import('./components/products-panel/products-panel.module').then(m => m.ProductsPanelModule)
      },

      {
        path: "categories-panel",
        loadChildren: () => import('./components/categories/categories.module').then(m => m.CategoriesModule)
      },
      ]
  }

];
// const routes: Routes = [
//   {
//     path:'',
//     component: AdminPanelComponent,
//   },
//   {
//     path:"admin-panel",
//     component: AdminPanelComponent,
//     children:[
//       {
//         path:'products-panel',
//         component: ProductsComponent
//       },
//       {
//         path:'categories-panel',
//         component: CategoriesComponent
//       },
//     ]
//   },
// ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
