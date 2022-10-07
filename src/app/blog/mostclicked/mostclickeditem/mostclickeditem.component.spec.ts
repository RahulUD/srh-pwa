import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostclickeditemComponent } from './mostclickeditem.component';

describe('MostclickeditemComponent', () => {
  let component: MostclickeditemComponent;
  let fixture: ComponentFixture<MostclickeditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostclickeditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostclickeditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
