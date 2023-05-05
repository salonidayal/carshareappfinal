import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DriverAuthComponent } from './driver-auth/driver-auth.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { AuthGuard } from './auth.guard';
import { DriverAddVehicleComponent } from './driver-add-vehicle/driver-add-vehicle.component';
import { DriverViewProfileComponent } from './driver-view-profile/driver-view-profile.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { DriverViewRequestsComponent } from './driver-view-requests/driver-view-requests.component';
import { UserRequestCarComponent } from './user-request-car/user-request-car.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'cars',
    component: DriverAuthComponent,
    pathMatch: 'full'
  },
  {
    path:'carhome',
    component: DriverHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addvehicle',
    component: DriverAddVehicleComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'viewdriver',
    component: DriverViewProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'updateVehicle/:id',
    component: UpdateVehicleComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user',
    component: UserAuthComponent
    
  },
  {
    path:'availableCars',
    component: AvailableCarsComponent
  },
  {
    path:'requests',
    component: DriverViewRequestsComponent
  },
  {
    path:'sendrequest',
    component: UserRequestCarComponent
  },
  {
    path:'mail-list',
    component: ContactComponent
  },
  {
    path:'**',
    component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
