import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusItemComponent } from './syllabus-item.component';

describe('SyllabusItemComponent', () => {
  let component: SyllabusItemComponent;
  let fixture: ComponentFixture<SyllabusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
