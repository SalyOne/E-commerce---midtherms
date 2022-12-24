import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {map, Subject, takeUntil, tap} from "rxjs";
import {ICart} from "../../core/interfaces/cart.interface";
import {OrdersService} from "../../core/services/orders.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  sub$ = new Subject()
  cartItems: ICart[] = []
  cartSum = 0;
  cartItemQuantity: any;
  constructor(
    private cartServ:CartService,
    private orderServ:OrdersService,
    private route:ActivatedRoute,
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

  checkout() {
    this.orderServ.addOrder()
      .pipe(takeUntil(this.sub$))
      .subscribe(()=>{
        this.getAllCarts()
    })
  }
 //
 //  addQuantity(item :ICart) {
 //    this.cartServ.postToCart({
 //      productId: item.item.id,
 //      quantity: 1
 //    })
 //      .pipe(
 //        takeUntil(this.sub$),
 //        tap(()=>{
 //          item.quantity ++;
 //        })
 //      )
 //      .subscribe(res=>{
 //        this.getAllCarts()
 //        console.log(res)
 //      })
 //  }
 // reduceQuantity(item :ICart) {
 //    this.cartServ.postToCart({
 //      productId: item.item.id,
 //      quantity: -1
 //    })
 //      .pipe(takeUntil(this.sub$),
 //        map(()=>{
 //          return item.quantity --;
 //        }))
 //      .subscribe(res=>{
 //        // item.quantity--;
 //        this.getAllCarts()
 //      })
 //  }

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
