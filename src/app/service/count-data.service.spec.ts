import { TestBed } from '@angular/core/testing';

import { CountDataService } from './count-data.service';

describe('CountDataService', () => {
  let service: CountDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
