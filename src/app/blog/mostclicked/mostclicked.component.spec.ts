import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostclickedComponent } from './mostclicked.component';

describe('MostclickedComponent', () => {
  let component: MostclickedComponent;
  let fixture: ComponentFixture<MostclickedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostclickedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostclickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
