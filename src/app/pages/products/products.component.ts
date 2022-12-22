import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../core/services/products.service";
import {CategoriesService} from "../../core/services/categories.service";
import {ICategory} from "../../core/interfaces/category.interface";
import {IProduct} from "../../core/interfaces/products.interface";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {

  constructor(
    private prodService: ProductsService,
    private categService: CategoriesService
  ) { }

  categories:ICategory[] = []
  products:IProduct[] = []
  sub$ = new Subject();


  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories()
  }

  getAllProducts(){
   this.prodService.getAllProd()
     .pipe(takeUntil(this.sub$))
     .subscribe((res)=>{
        this.products = res
    })
  }
  getAllCategories(){
    this.categService.getAllCat()
      .pipe(takeUntil(this.sub$))
      .subscribe((res)=>{
        this.categories = res
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
