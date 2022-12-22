import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {IProduct} from "../interfaces/products.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {


  addProduct(param: IProduct):Observable<IProduct>{
    return this.post<IProduct>('product', param)
  }

  getAll():Observable<IProduct[]>{
    return this.get<IProduct[]>('product')
  }
}
