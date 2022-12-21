import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get userLoggedIn(){
    return this.authService.token
  }
  get user(){
    return this.authService.user
  }
  constructor(
    private authService :AuthService
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }
}
