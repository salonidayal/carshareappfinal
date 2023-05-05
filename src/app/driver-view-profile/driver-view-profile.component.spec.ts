import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverViewProfileComponent } from './driver-view-profile.component';

describe('DriverViewProfileComponent', () => {
  let component: DriverViewProfileComponent;
  let fixture: ComponentFixture<DriverViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverViewProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
