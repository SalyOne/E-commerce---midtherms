import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../core/interfaces/products.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../core/services/products.service";
import {CartService} from "../../../core/services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId!: string
  product!: IProduct
  quantity = 1;

  message?: string;

  similarProducts: IProduct[] = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProduct()
    })
  }


  getProduct() {
    this.productService.getOneProd(this.productId)
      .pipe()
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
      .pipe()
      .subscribe((products) => {
        this.similarProducts = products
      })
  }
}
