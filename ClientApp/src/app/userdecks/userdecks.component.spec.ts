import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdecksComponent } from './userdecks.component';

describe('UserdecksComponent', () => {
  let component: UserdecksComponent;
  let fixture: ComponentFixture<UserdecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
