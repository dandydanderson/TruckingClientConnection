import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierAddComponent } from './carrier-add.component';

describe('CarrierAddComponent', () => {
  let component: CarrierAddComponent;
  let fixture: ComponentFixture<CarrierAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
