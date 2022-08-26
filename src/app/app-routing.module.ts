import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './nav/about/about.component';
import { ContactUsComponent } from './nav/contact-us/contact-us.component';
import { FleetComponent } from './nav/fleet/fleet.component';
import { HomeComponent } from './nav/home/home.component';
import { RatesComponent } from './nav/rates/rates.component';
import { ReservationComponent } from './nav/reservation/reservation.component';
import { ServicesComponent } from './nav/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home',component: HomeComponent },
  { path: 'about',component: AboutComponent },
  { path: 'fleet', component: FleetComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'rates', component: RatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
