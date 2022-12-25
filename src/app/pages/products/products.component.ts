import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../core/services/products.service";
import {CategoriesService} from "../../core/services/categories.service";
import {ICategory} from "../../core/interfaces/category.interface";
import {IProduct} from "../../core/interfaces/products.interface";
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {

  constructor(
    private prodService: ProductsService,
    private categService: CategoriesService,
    private route:ActivatedRoute
  ) { }

  categories$: Observable<ICategory[]>  = this.categService.getAllCat()
  products:IProduct[] = []
  sub$ = new Subject();
  categoryId?: number
  search: any;
  areProducts: boolean  = false;


  ngOnInit(): void {
    // this.getAllProducts()

    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category']
      this.search = params['search']
      this.getAllProducts()
    })

  }

  searchHandle(search: string) {
      if (search.length>3){
        this.search = search
        this.getAllProducts()
      }
      else {
        this.search = null
        this.getAllProducts()
      }
  }

  getAllProducts(){
    const params = {
      categoryId: this.categoryId || null,
      search: this.search || null
    }
   this.prodService.getProducts(params)
     .pipe(takeUntil(this.sub$))
     .subscribe((res)=>{
        this.products = res
       if (this.products.length === 0){
         this.areProducts= true
       }else{
         this.areProducts= false

       }
    })
  }


  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
