import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICategory} from "../../../../core/interfaces/category.interface";
import {CategoriesService} from "../../../../core/services/categories.service";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit , OnDestroy{
  categories: ICategory[] = [];
  sub$ = new Subject();


  constructor(
    private categoryService : CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getAllCat()
      .pipe(takeUntil(this.sub$))
      .subscribe((res)=>{
        this.categories = res
      })
  }

  deleteCategory(id:number){
    this.categoryService.deleteCat(id)
      .pipe(takeUntil(this.sub$))
      .subscribe((res)=>{
        this.getCategories()
      })
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
