import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldecksComponent } from './alldecks.component';

describe('AlldecksComponent', () => {
  let component: AlldecksComponent;
  let fixture: ComponentFixture<AlldecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
