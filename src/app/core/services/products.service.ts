import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {IProduct, IProductResponse} from "../interfaces/products.interface";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user.interface";


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {


  addProduct(param: IProduct):Observable<IProduct>{
    return this.post<IProduct>('product', param)
  }
}
