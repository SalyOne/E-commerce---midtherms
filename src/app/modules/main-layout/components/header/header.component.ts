import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {CartService} from "../../../../core/services/cart.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount$: Observable<number> = this.cartServ.cartCount$;

  get userLoggedIn(){
    return this.authService.token
  }
  get user(){
    return this.authService.user
  }
  constructor(
    private authService :AuthService,
    private cartServ :CartService,
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }
}
