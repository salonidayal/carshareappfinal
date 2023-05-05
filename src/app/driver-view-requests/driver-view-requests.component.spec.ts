import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverViewRequestsComponent } from './driver-view-requests.component';

describe('DriverViewRequestsComponent', () => {
  let component: DriverViewRequestsComponent;
  let fixture: ComponentFixture<DriverViewRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverViewRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverViewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
