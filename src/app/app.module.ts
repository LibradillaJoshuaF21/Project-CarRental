import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AdminDoCarsComponent } from './admin/admin-do-cars/admin-do-cars.component';
import { CarsListComponent } from './admin/admin-do-cars/cars-list/cars-list.component';
import { CarsAddComponent } from './admin/admin-do-cars/cars-add/cars-add.component';
import { CarsDeleteComponent } from './admin/admin-do-cars/cars-delete/cars-delete.component';
import { CarsEditComponent } from './admin/admin-do-cars/cars-edit/cars-edit.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminDoUsersComponent,
    AdminDoCarsComponent,
    CarsListComponent,
    CarsAddComponent,
    CarsDeleteComponent,
    CarsEditComponent,
  ],
  imports: [
    UsersModule,
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
