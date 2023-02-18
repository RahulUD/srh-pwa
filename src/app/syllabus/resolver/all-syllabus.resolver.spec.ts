import { TestBed } from '@angular/core/testing';

import { AllSyllabusResolver } from './all-syllabus.resolver';

describe('AllSyllabusResolver', () => {
  let resolver: AllSyllabusResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllSyllabusResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
