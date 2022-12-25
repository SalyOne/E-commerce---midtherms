import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {IProduct} from "../interfaces/products.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {


  getProducts(params: {
    categoryId?: number | null,
    limit?: number,
    search?: string,
    similar?: string
  }): Observable<IProduct[]> {
    return this.get<IProduct[]>('product', params)
  }

  getAllProd():Observable<IProduct[]>{
    return this.get<IProduct[]>('product')
  }

  addProduct(param: IProduct):Observable<IProduct>{
    return this.post<IProduct>('product', param)
  }
  getOneProd(id: string):Observable<IProduct> {
    return this.get<IProduct>(`product/${id}`);
  }

  updateProd(id:string, body:IProduct):Observable<IProduct>{
    return this.put<IProduct>(`product/${id}`,body)
  }

  deleteProduct(id: string): Observable<IProduct> {
    return this.delete<IProduct>(`product/${id}`);
  }

}
