import { TestBed } from '@angular/core/testing';

import { DbOperationsService } from './db-operations.service';

describe('DbOperationsService', () => {
  let service: DbOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
