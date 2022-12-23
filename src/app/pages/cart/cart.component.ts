import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Subject, takeUntil} from "rxjs";
import {ICart} from "../../core/interfaces/cart.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  sub$ = new Subject()
  cartItems: ICart[] = []
  cartSum = 0
  constructor(
    private cartServ:CartService
  ) { }

  ngOnInit(): void {
    this.getAllCarts()
  }

  getAllCarts(){
    return this.cartServ.getCart()
      .pipe(takeUntil(this.sub$))
      .subscribe(res =>{
        this.cartItems = res;
        this.cartSum = this.cartItems.reduce((acc, item)=> acc + item.total, 0)
      })
  }

  deleteCart(id:number) {
      this.cartServ.deleteCartItem(id)
        .pipe(takeUntil(this.sub$))
        .subscribe(res=>{
          this.getAllCarts()
        });
  }


  // checkout() {
  //   console.log('checkout')
  //
  //   this.orderService.createOrder()
  //     .pipe()
  //     .subscribe(res => {
  //       console.log(res)
  //       this.getCarts()
  //     })
  // }
  //
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
