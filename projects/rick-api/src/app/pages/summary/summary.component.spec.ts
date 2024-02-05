import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsComponent } from '../../components/cards/cards.component';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SummaryComponent,
        RouterTestingModule,
        CardsComponent,
        HttpClientTestingModule,
      ],
      providers: [CharactersApiRepoService],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
