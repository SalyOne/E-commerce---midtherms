import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {Observable, tap} from "rxjs";
import {IAuth, ILogin, ILoginResponse} from "../interfaces/auth.interface";
import {IUser} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseService{

  get token():string| null{
    return localStorage.getItem('token');
  }
  get user(): IUser| null{
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
  }

  signIn(param: ILogin):Observable<ILoginResponse>{
    return this.post<ILoginResponse>('auth/login', param)
      .pipe(
        tap((res)=>{
          this.setToken(res.accessToken)
          this.setUser(res.user)
        })
      )
  }
  signUp(param: IAuth):Observable<IUser>{
    return this.post<IUser>('auth/signup', param)
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  setUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.clear()
  }
}
