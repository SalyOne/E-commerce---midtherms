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

  getAllProd():Observable<IProduct[]>{
    return this.getAll<IProduct[]>('product')
  }


  deleteProduct(id: string): Observable<IProduct> {
    return this.delete<IProduct>(`product/${id}`);
  }
}
