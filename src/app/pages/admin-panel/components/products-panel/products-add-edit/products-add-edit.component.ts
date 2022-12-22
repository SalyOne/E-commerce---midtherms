import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../core/services/products.service";
import {IProduct} from "../../../../../core/interfaces/products.interface";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
  });

  sub$ = new Subject();

  constructor(
    private productsService:ProductsService,
    private route:Router
  ) { }


  ngOnInit(): void {
  }


  submit() {
    this.form.markAllAsTouched()
    if(this.form.invalid) return

    this.productsService.addProduct(this.form.value)
      .pipe(takeUntil(this.sub$)).subscribe((res)=>{
      console.log(res)
        this.route.navigate(['/admin-panel/products-panel/'])
    });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
