import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRedirectComponent } from './registration-redirect.component';

describe('RegistrationRedirectComponent', () => {
  let component: RegistrationRedirectComponent;
  let fixture: ComponentFixture<RegistrationRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
