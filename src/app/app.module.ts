import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDoUsersComponent } from './admin/admin-do-users/admin-do-users.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserDoRentComponent } from './user/user-do-rent/user-do-rent.component';
import { UserListComponent } from './admin/admin-do-users/user-list/user-list.component';
import { UserAddComponent } from './admin/admin-do-users/user-add/user-add.component';
import { UserDeleteComponent } from './admin/admin-do-users/user-delete/user-delete.component';
import { UserEditComponent } from './admin/admin-do-users/user-edit/user-edit.component';
import { AdminDoCarsComponent } from './admin/admin-do-cars/admin-do-cars.component';
import { CarsListComponent } from './admin/admin-do-cars/cars-list/cars-list.component';
import { CarsAddComponent } from './admin/admin-do-cars/cars-add/cars-add.component';
import { CarsDeleteComponent } from './admin/admin-do-cars/cars-delete/cars-delete.component';
import { CarsEditComponent } from './admin/admin-do-cars/cars-edit/cars-edit.component';
import { AdminCheckRentalsComponent } from './admin/admin-check-rentals/admin-check-rentals.component';
import { RentalListComponent } from './admin/admin-check-rentals/rental-list/rental-list.component';
import { RentalDeleteComponent } from './admin/admin-check-rentals/rental-delete/rental-delete.component';
import { RentalDetailsComponent } from './admin/admin-check-rentals/rental-details/rental-details.component';
import { AdminDoReservationsComponent } from './admin/admin-do-reservations/admin-do-reservations.component';
import { ReservationListComponent } from './admin/admin-do-reservations/reservation-list/reservation-list.component';
import { ReservationAddComponent } from './admin/admin-do-reservations/reservation-add/reservation-add.component';
import { ReservationDeleteComponent } from './admin/admin-do-reservations/reservation-delete/reservation-delete.component';
import { ReservationEditComponent } from './admin/admin-do-reservations/reservation-edit/reservation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminDoUsersComponent,
    UserHomeComponent,
    UserDoRentComponent,
    UserListComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserEditComponent,
    AdminDoCarsComponent,
    CarsListComponent,
    CarsAddComponent,
    CarsDeleteComponent,
    CarsEditComponent,
    AdminCheckRentalsComponent,
    RentalListComponent,
    RentalDeleteComponent,
    RentalDetailsComponent,
    AdminDoReservationsComponent,
    ReservationListComponent,
    ReservationAddComponent,
    ReservationDeleteComponent,
    ReservationEditComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
