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
  ngOnInit(): void {}
  // categories: ICategory[]  = [];
  //
  // productId!: string
  // product!: IProduct
  // quantity = 1;
  //
  // sub$ = new Subject();
  // message?: string;
  //
  // similarProducts: IProduct[] = []
  // similarCategoriesProducts: IProduct[] = []
  //
  // constructor(
  //   private route: ActivatedRoute,
  //   private categService: CategoriesService,
  //   private productService: ProductsService,
  //   private cartService: CartService
  // ) { }
  //
  // ngOnInit(): void {
  //   console.log()
  //   this.getCategories()
  //   this.route.params.pipe(takeUntil(this.sub$)).subscribe(params => {
  //     this.productId = params['id'];
  //     this.getProduct()
  //   })
  // }
  // getCategories() {
  //   this.categService.getAllCat()
  //     .pipe(
  //       takeUntil(this.sub$),
  //       map((cat: any)=> cat.id)
  //     )
  //     .subscribe((cat) => {
  //       console.log(cat)
  //       // this.categories = cat
  //     });
  //
  // }
  //
  // getProduct() {
  //   this.productService.getOneProd(this.productId)
  //     .pipe(takeUntil(this.sub$))
  //     .subscribe((product) => {
  //       this.product = product;
  //       this.getProducts()
  //     })
  // }
  //
  // addToCart() {
  //   this.cartService.postToCart({
  //     productId: this.productId,
  //     quantity: this.quantity
  //   })
  //     .pipe()
  //     .subscribe( () => {
  //       this.message = 'Added to cart'
  //       setTimeout(() => {
  //         this.message = undefined
  //       }, 2000)
  //     })
  // }
  //
  // getProducts() {
  //   this.productService.getProducts({
  //     limit: 4,
  //     categoryId: this.product.category.id,
  //     similar: this.product.id
  //   })
  //     .pipe(takeUntil(this.sub$))
  //     .subscribe((products) => {
  //       this.similarProducts = products
  //     })
  // }
  //
  //
  ngOnDestroy(): void {
    // this.sub$.next(null)
    // this.sub$.complete()
  }
}
