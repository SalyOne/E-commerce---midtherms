import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../core/services/products.service";
import {CategoriesService} from "../../core/services/categories.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {ICategory} from "../../core/interfaces/category.interface";
import {IProduct} from "../../core/interfaces/products.interface";
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products$: Observable<IProduct[]> = this.productService.getAllProd()

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {

  }


  ngOnDestroy(): void {
  }
}
