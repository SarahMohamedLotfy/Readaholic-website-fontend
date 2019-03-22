import { TestBed } from '@angular/core/testing';

import { HttpFollower } from './HttpFollower';

describe('HttpFollower', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFollower = TestBed.get(HttpFollower);
    expect(service).toBeTruthy();
  });
});
