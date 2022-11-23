import { TestBed } from '@angular/core/testing';

import { CodeWarsApiService } from './code-wars-api.service';

describe('CodeWarsApiService', () => {
  let service: CodeWarsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeWarsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
