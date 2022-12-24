import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {IUser} from "../interfaces/user.interface";
import {IProduct} from "../interfaces/products.interface";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {ICart} from "../interfaces/cart.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService
{
  cartCount = new BehaviorSubject(0);

  cartCount$ = this.cartCount.asObservable();

  getCart() {
    return this.get('cart')
      .pipe(
        tap((carts: any) => {
          this.cartCount.next(carts.reduce((acc: number, item: ICart) => acc + item.quantity, 0))
        })
      );
  }
  get user(): IUser|null {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) :null;
  }



  postToCart(item: { productId:string, quantity: number }): Observable<ICart>{
     return  this.post<ICart>('cart', item)
              .pipe(
                tap(()=>{
                  this.cartCount.next(this.cartCount.value + item.quantity)
                })
              )
  }

  deleteCartItem(id:number):Observable<ICart>{
    return this.delete<ICart>(`cart/${id}`)
  }

}
