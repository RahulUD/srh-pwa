import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardbloglistComponent } from './dashboardbloglist.component';

describe('DashboardbloglistComponent', () => {
  let component: DashboardbloglistComponent;
  let fixture: ComponentFixture<DashboardbloglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardbloglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardbloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
