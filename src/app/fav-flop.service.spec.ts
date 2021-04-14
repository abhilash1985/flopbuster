import { TestBed } from '@angular/core/testing';

import { FavFlopService } from './fav-flop.service';

describe('FavFlopService', () => {
  let service: FavFlopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavFlopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
