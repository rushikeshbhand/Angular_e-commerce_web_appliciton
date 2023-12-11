import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomersComponent } from './manage-customers.component';

describe('ManageCustomersComponent', () => {
  let component: ManageCustomersComponent;
  let fixture: ComponentFixture<ManageCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCustomersComponent]
    });
    fixture = TestBed.createComponent(ManageCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
