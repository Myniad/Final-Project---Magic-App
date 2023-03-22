import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckviewComponent } from './deckview.component';

describe('DeckviewComponent', () => {
  let component: DeckviewComponent;
  let fixture: ComponentFixture<DeckviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
