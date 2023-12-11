import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotWorkingComponent } from './page-not-working.component';

describe('PageNotWorkingComponent', () => {
  let component: PageNotWorkingComponent;
  let fixture: ComponentFixture<PageNotWorkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotWorkingComponent]
    });
    fixture = TestBed.createComponent(PageNotWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
