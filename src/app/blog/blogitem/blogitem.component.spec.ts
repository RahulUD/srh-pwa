import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogitemComponent } from './blogitem.component';

describe('BlogitemComponent', () => {
  let component: BlogitemComponent;
  let fixture: ComponentFixture<BlogitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
