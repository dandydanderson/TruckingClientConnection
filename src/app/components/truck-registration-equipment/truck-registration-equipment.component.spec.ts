import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRegistrationEquipmentComponent } from './truck-registration-equipment.component';

describe('TruckRegistrationEquipmentComponent', () => {
  let component: TruckRegistrationEquipmentComponent;
  let fixture: ComponentFixture<TruckRegistrationEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckRegistrationEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckRegistrationEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
