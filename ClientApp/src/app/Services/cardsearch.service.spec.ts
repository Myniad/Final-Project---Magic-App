import { TestBed } from '@angular/core/testing';

import { CardsearchService } from './cardsearch.service';

describe('CardsearchService', () => {
  let service: CardsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
