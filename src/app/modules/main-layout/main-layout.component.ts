import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  sub$ = new Subject()
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.getCart()
      .pipe(takeUntil(this.sub$)).subscribe()
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
