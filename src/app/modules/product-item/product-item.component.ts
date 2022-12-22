import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {IProduct} from "../../core/interfaces/products.interface";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  get userLoggedIn(){
    return this.authService.token
  }
  @Input() product: IProduct = {} as IProduct

  constructor(
    private authService :AuthService
  ) {}

  ngOnInit(): void {
  }

}
