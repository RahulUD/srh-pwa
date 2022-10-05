import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { categoryType } from 'src/types/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  categories!: any;
  categories1$: Observable<categoryType[]> | undefined;
  categories2$: Observable<categoryType[]> | undefined;
  categories3$: Observable<categoryType[]> | undefined;

  ngOnInit(): void {
    this.categories1$ = this.categoryService
      .getCat('cat1', '')
      .pipe(map((categories) => [...new Set(categories)]));
    this.activatedRoute.data.subscribe((res) => {
      this.categories = res['categiries'];
    });
    this.categotyForm.get('cat1')?.valueChanges.subscribe((value) => {
      this.categories2$ = this.categoryService
        .getCat('cat2', value ?? '')
        .pipe(
          map((categories) =>
            categories.filter((category) => category.cat2 !== '')
          )
        );
    });
    this.categotyForm.get('cat2')?.valueChanges.subscribe((value) => {
      this.categories3$ = this.categoryService
        .getCat('cat33', value ?? '')
        .pipe(map((categories) => [...new Set(categories)]))
        .pipe(
          map((categories) =>
            categories.filter((category) => category.cat3 !== undefined)
          )
        );
    });
  }
  title = 'Add Category';

  categotyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    cat1: new FormControl(''),
    cat2: new FormControl(''),
    cat3: new FormControl(''),
  });

  saveCategory() {
    this.categoryService
      .postCategory(this.categotyForm.value)
      .subscribe((res) => (this.categories = res));
  }
  deleteCategory(id: string){
    this.categoryService
      .deleteCategory(id)
      .subscribe((res) => (this.categories = res));
  }
}
