import { TestBed } from '@angular/core/testing';

import { SystemDataService } from './system-data.service';

describe('SystemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemDataService = TestBed.get(SystemDataService);
    expect(service).toBeTruthy();
  });
});
