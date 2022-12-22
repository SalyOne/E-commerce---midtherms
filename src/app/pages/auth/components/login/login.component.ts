import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    }
  );
  sub$ = new Subject()


  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(

  ): void {
  }

  submit() {
    this.form.markAllAsTouched()
    if(this.form.invalid) return

    // console.log(this.form.value)
    this.authService.signIn(this.form.value)
      .pipe(takeUntil(this.sub$)).subscribe((res)=>{
      // console.log(res)
      this.router.navigate(['/'])
    })
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
