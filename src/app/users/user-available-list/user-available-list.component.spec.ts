import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvailableListComponent } from './user-available-list.component';

describe('UserAvailableListComponent', () => {
  let component: UserAvailableListComponent;
  let fixture: ComponentFixture<UserAvailableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvailableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvailableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
