import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoRentComponent } from './user-do-rent.component';

describe('UserDoRentComponent', () => {
  let component: UserDoRentComponent;
  let fixture: ComponentFixture<UserDoRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDoRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
