import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightDashboardComponent } from './freight-dashboard.component';

describe('FreightDashboardComponent', () => {
  let component: FreightDashboardComponent;
  let fixture: ComponentFixture<FreightDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
