import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAddVehicleComponent } from './driver-add-vehicle.component';

describe('DriverAddVehicleComponent', () => {
  let component: DriverAddVehicleComponent;
  let fixture: ComponentFixture<DriverAddVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverAddVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverAddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
