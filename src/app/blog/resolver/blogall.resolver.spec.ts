import { TestBed } from '@angular/core/testing';

import { BlogallResolver } from './blogall.resolver';

describe('BlogallResolver', () => {
  let resolver: BlogallResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogallResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
