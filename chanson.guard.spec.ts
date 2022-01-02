import { TestBed } from '@angular/core/testing';

import { ChansonGuard } from './chanson.guard';

describe('ChansonGuard', () => {
  let guard: ChansonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChansonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
