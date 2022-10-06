import { TestBed } from '@angular/core/testing';

import { AllblogsResolver } from './allblogs.resolver';

describe('AllblogsResolver', () => {
  let resolver: AllblogsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllblogsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
