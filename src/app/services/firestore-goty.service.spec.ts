import { TestBed } from '@angular/core/testing';

import { FirestoreGotyService } from './firestore-goty.service';

describe('FirestoreGotyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreGotyService = TestBed.get(FirestoreGotyService);
    expect(service).toBeTruthy();
  });
});
