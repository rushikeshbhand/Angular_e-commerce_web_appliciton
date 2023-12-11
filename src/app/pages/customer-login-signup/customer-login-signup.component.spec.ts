import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginSignupComponent } from './customer-login-signup.component';

describe('CustomerLoginSignupComponent', () => {
  let component: CustomerLoginSignupComponent;
  let fixture: ComponentFixture<CustomerLoginSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerLoginSignupComponent]
    });
    fixture = TestBed.createComponent(CustomerLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
