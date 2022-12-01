import { TestBed } from '@angular/core/testing';

import { DashboardCountDataResolver } from './dashboard-count-data.resolver';

describe('DashboardCountDataResolver', () => {
  let resolver: DashboardCountDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardCountDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
