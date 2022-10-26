import { TestBed } from '@angular/core/testing';

import { BlogsResolver } from './blogs.resolver';

describe('BlogsResolver', () => {
  let resolver: BlogsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
