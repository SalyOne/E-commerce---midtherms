import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../../../core/interfaces/products.interface";
import {Subject, takeUntil} from "rxjs";
import {ProductsService} from "../../../../core/services/products.service";

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.scss']
})
export class ProductsPanelComponent implements OnInit, OnDestroy {
  products: IProduct[] = []
  sub$ = new Subject();
  constructor(
    private productsService:ProductsService
  ) { }



  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productsService.getAllProd()
      .pipe(takeUntil(this.sub$))
      .subscribe((res)=>{
        this.products = res;
      })
  }
  deleteProductItem(id:any ){
    this.productsService.deleteProduct(id)
      .pipe(takeUntil(this.sub$))
      .subscribe((res)=>{
        this.getAllProducts()
        }
      )
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
