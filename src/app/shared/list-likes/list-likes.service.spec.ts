import { TestBed } from '@angular/core/testing';

import { ListLikesService } from './list-likes.service';

describe('ListLikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListLikesService = TestBed.get(ListLikesService);
    expect(service).toBeTruthy();
  });
});
