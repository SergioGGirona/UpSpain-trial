import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharactersApiRepoService } from './characters.api.repo.service';

describe('Given the class CharactersApiRepoService, when we use it', () => {
  let service: CharactersApiRepoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersApiRepoService],
    });
    service = TestBed.inject(CharactersApiRepoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Method GetAll should charge first 20 characters', () => {
    service.getAll().subscribe();
    const req = httpTestingController.expectOne(
      'https://rickandmortyapi.com/api/character',
    );
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('Method GetMoreCharacters should charge next 20 characters', () => {
    service
      .getMoreCharacters('https://rickandmortyapi.com/api/character/?page=2')
      .subscribe();
    const req = httpTestingController.expectOne(
      'https://rickandmortyapi.com/api/character/?page=2',
    );
    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});
