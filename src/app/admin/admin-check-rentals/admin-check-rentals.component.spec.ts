import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckRentalsComponent } from './admin-check-rentals.component';

describe('AdminCheckRentalsComponent', () => {
  let component: AdminCheckRentalsComponent;
  let fixture: ComponentFixture<AdminCheckRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckRentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
