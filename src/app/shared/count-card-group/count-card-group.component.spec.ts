import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCardGroupComponent } from './count-card-group.component';

describe('CountCardGroupComponent', () => {
  let component: CountCardGroupComponent;
  let fixture: ComponentFixture<CountCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountCardGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
