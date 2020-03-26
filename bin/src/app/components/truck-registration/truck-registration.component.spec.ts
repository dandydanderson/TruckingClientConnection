import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRegistrationComponent } from './truck-registration.component';

describe('TruckRegistrationComponent', () => {
  let component: TruckRegistrationComponent;
  let fixture: ComponentFixture<TruckRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
