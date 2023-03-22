import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedeckComponent } from './createdeck.component';

describe('CreatedeckComponent', () => {
  let component: CreatedeckComponent;
  let fixture: ComponentFixture<CreatedeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
