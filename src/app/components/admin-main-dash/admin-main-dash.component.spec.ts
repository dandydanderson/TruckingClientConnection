import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainDashComponent } from './admin-main-dash.component';

describe('AdminMainDashComponent', () => {
  let component: AdminMainDashComponent;
  let fixture: ComponentFixture<AdminMainDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
