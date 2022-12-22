import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../../../../core/services/categories.service";
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categories-add-edit',
  templateUrl: './categories-add-edit.component.html',
  styleUrls: ['./categories-add-edit.component.scss']
})
export class CategoriesAddEditComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required)
  });
  sub$ = new Subject();

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.categoriesService.getOneCat(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue(res)
      }
    })
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return

    if (this.form.value.id){
      this.categoriesService.updateCat(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe((res)=>{
          this.router.navigate(['admin-panel/categories-panel'])
            .then(()=>{
              this.form.reset()
            })
        })
    }
    else{
      this.categoriesService.createCat(this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe((res)=>{
          this.router.navigate(['admin-panel/categories-panel'])
            .then(()=>{
              this.form.reset()
            })
        })
    }
  }


  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }
}
