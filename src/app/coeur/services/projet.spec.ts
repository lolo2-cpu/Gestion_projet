import { TestBed } from '@angular/core/testing';

import { Projet } from './projet.service';

describe('Projet', () => {
  let service: Projet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
