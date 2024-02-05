import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';
import { CardComponent } from '../card/card.component';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let service: CharactersApiRepoService;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardsComponent,
        CardComponent,
        HttpClientTestingModule,
        InfiniteScrollModule,
      ],
      providers: [CharactersApiRepoService],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CharactersApiRepoService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when page is loaded, getAll should be called', () => {
    spyOn(service, 'getAll').and.callThrough();
    component.ngOnInit();

    expect(service.getAll).toHaveBeenCalled();
  });
});
