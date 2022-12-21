import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../core/services/products.service";

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
  });

  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched()
    if(this.form.invalid) return

    this.productsService.addProduct(this.form.value).subscribe((res)=>{
      console.log(res)
    });
  }
}
