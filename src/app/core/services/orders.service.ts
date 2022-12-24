import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {ICart} from "../interfaces/cart.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService{


  addOrder(): Observable<any>{
    return this.post('order')
  }
  getOrder(): Observable<any>{
    return this.get('order')
  }
}
