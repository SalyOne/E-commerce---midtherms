import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('', Validators.required),
  })
  errorMessage?: string

  sub$ = new Subject();
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched()
    if(this.form.invalid) return
    this.authService.signUp(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe((res)=>{
        // console.log(res)
    })
  }


  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
