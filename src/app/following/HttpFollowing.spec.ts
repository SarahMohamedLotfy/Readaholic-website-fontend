import { TestBed } from '@angular/core/testing';

import { HttpFollowing } from './HttpFollowing';

describe('HttpFollowing', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFollowing = TestBed.get(HttpFollowing);
    expect(service).toBeTruthy();
  });
});

