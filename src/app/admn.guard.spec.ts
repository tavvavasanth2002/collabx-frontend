import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { admnGuard } from './admn.guard';

describe('admnGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => admnGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
