import { TestBed } from '@angular/core/testing';

import { FlopRetrieverService } from './flop-retriever.service';

describe('FlopRetrieverService', () => {
  let service: FlopRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
