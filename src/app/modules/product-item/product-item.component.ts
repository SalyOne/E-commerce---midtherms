import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {IProduct} from "../../core/interfaces/products.interface";
import {CartService} from "../../core/services/cart.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit , OnDestroy{
  get userLoggedIn(){
    return this.authService.token;
  }

  @Input() product: IProduct = {} as IProduct;
  sub$ = new Subject();


  constructor(
    private authService :AuthService,
    private cartServ: CartService
  ) {}

  ngOnInit(): void {
  }

  addToCart($event : MouseEvent) {
    $event.stopPropagation();

    this.cartServ.postToCart({
      productId:this.product.id,
      quantity: 1
    })
      .pipe(takeUntil(this.sub$))
      .subscribe()
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
