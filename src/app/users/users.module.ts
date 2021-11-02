import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRentsComponent } from './user-rents/user-rents.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAvailableListComponent } from './user-available-list/user-available-list.component';
import { UserRentalsComponent } from './user-rentals/user-rentals.component';
import { UserRentalsDetailComponent } from './user-rentals-detail/user-rentals-detail.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserRentsComponent,
    UserHistoryComponent,
    UserAvailableListComponent,
    UserRentalsComponent,
    UserRentalsDetailComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserHomeComponent, UserRentsComponent, UserHistoryComponent],
})
export class UsersModule { }
