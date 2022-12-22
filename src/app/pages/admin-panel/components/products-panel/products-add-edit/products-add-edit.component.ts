import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../core/services/products.service";
import {IProduct} from "../../../../../core/interfaces/products.interface";
import {Observable, of, Subject, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ICategory} from "../../../../../core/interfaces/category.interface";
import {CategoriesService} from "../../../../../core/services/categories.service";

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      categoryId:new FormControl('',Validators.required),
  });
  categories$: Observable<ICategory[]> = this.categoryService.getAllCat()
  sub$ = new Subject();

  constructor(
    private productsService:ProductsService,
    private categoryService:CategoriesService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.productsService.getOneProd(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id
        })
      }
    })

  }


  submit() {
    console.log("this.form.value")
    console.log(this.form.value)
    console.log(this.form.invalid)
    this.form.markAllAsTouched()
    if(this.form.invalid) return

    if(this.form.value.id){
      this.productsService.updateProd(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe((res)=>{
          console.log(res)

          this.router.navigate(['admin-panel/products-panel'])
            .then(()=>{
              this.form.reset()
            })
        })
    }
    else{
      console.log("Asdasdadsw")
      this.productsService.addProduct(this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe((res)=>{
        console.log(res)
        this.router.navigate(['admin-panel/products-panel'])
          .then(()=>{
            this.form.reset()
          })
      });

    }

  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
