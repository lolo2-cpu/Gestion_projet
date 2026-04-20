import { TestBed } from '@angular/core/testing';

import { Tache } from './tache.service';

describe('Tache', () => {
  let service: Tache;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tache);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
