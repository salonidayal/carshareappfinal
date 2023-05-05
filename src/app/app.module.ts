import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DriverAuthComponent } from './driver-auth/driver-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { DriverAddVehicleComponent } from './driver-add-vehicle/driver-add-vehicle.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { DriverViewProfileComponent } from './driver-view-profile/driver-view-profile.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { DataTablesModule } from 'angular-datatables';
import { DriverViewRequestsComponent } from './driver-view-requests/driver-view-requests.component';
import { UserRequestCarComponent } from './user-request-car/user-request-car.component';
import { NameTransformPipe } from './pipes/name-transform.pipe';
import { CarNumberPipe } from './pipes/car-number.pipe';
import { ContactComponent } from './contact/contact.component';
import { ChangeGreenDirective } from './directives/change-green.directive';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DriverAuthComponent,
    DriverHomeComponent,
    DriverAddVehicleComponent,
    DriverProfileComponent,
    DriverViewProfileComponent,
    UpdateVehicleComponent,
    UserAuthComponent,
    AvailableCarsComponent,
    DriverViewRequestsComponent,
    UserRequestCarComponent,
    NameTransformPipe,
    CarNumberPipe,
    ContactComponent,
    ChangeGreenDirective,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
