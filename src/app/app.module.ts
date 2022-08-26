import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ServicesComponent } from './nav/services/services.component';
import { FleetComponent } from './nav/fleet/fleet.component';
import { ContactUsComponent } from './nav/contact-us/contact-us.component';
import { RatesComponent } from './nav/rates/rates.component';
import { ReservationComponent } from './nav/reservation/reservation.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FleetComponent,
    ContactUsComponent,
    RatesComponent,
    ReservationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
