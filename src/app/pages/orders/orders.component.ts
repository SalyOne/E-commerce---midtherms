import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../core/services/orders.service";
import {Observable} from "rxjs";
import {IOrder} from "../../core/interfaces/order.interface";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  Order$:Observable<IOrder[]> = this.orderService.getOrder()

  constructor(
    private orderService: OrdersService
  ) { }




}
