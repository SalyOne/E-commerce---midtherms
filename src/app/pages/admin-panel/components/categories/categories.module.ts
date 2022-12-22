import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesAddEditComponent } from './categories-add-edit/categories-add-edit.component';
import {CategoriesComponent} from "./categories.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesAddEditComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ]

})
export class CategoriesModule { }
