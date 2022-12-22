import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {ICategory} from "../interfaces/category.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService{


  getAllCat() :Observable<ICategory[]>{
    return this.getAll<ICategory[]>('category')
  }

  getOneCat(id: number): Observable<ICategory>{
    return this.getOne<ICategory>(`category/${id}`);
  }
  createCat(value: ICategory){
     return this.post<ICategory>('category', value)
  }

  updateCat(id: number, category: ICategory): Observable<ICategory> {
    return this.put<ICategory>(`category/${id}`, category);
  }

  deleteCat(id: number): Observable<ICategory> {
    return this.delete<ICategory>(`category/${id}`);
  }

}
