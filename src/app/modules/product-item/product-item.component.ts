import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  get userLoggedIn(){
    return this.authService.token
  }

  constructor(
    private authService :AuthService
  ) {}

  ngOnInit(): void {
  }

}
