import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../../core/interfaces/products.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../core/services/products.service";
import {CartService} from "../../../core/services/cart.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit , OnDestroy{

  productId!: string
  product!: IProduct
  quantity = 1;

  sub$ = new Subject();
  message?: string;

  similarProducts: IProduct[] = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.sub$)).subscribe(params => {
      this.productId = params['id'];
      this.getProduct()
    })
  }


  getProduct() {
    this.productService.getOneProd(this.productId)
      .pipe(takeUntil(this.sub$))
      .subscribe((product) => {
        this.product = product;
        this.getProducts()
      })
  }

  addToCart() {
    this.cartService.postToCart({
      productId: this.productId,
      quantity: this.quantity
    })
      .pipe()
      .subscribe( () => {
        this.message = 'Added to cart'
        setTimeout(() => {
          this.message = undefined
        }, 2000)
      })
  }

  getProducts() {
    this.productService.getProducts({
      limit: 4,
      categoryId: this.product.category.id,
      similar: this.product.id
    })
      .pipe(takeUntil(this.sub$))
      .subscribe((products) => {
        this.similarProducts = products
      })
  }


  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
