import { TestBed } from '@angular/core/testing';

import { CharactersApiRepoService } from './characters.api.repo.service';

describe('CharactersApiRepoService', () => {
  let service: CharactersApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
