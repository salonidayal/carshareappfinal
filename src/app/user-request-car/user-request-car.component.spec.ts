import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestCarComponent } from './user-request-car.component';

describe('UserRequestCarComponent', () => {
  let component: UserRequestCarComponent;
  let fixture: ComponentFixture<UserRequestCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
