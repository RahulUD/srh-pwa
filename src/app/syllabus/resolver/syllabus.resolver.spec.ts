import { TestBed } from '@angular/core/testing';

import { SyllabusResolver } from './syllabus.resolver';

describe('SyllabusResolver', () => {
  let resolver: SyllabusResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SyllabusResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
