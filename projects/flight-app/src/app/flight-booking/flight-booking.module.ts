import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routing';
import { FlightBookingComponent } from './flight-booking.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightBookingComponent,
    FlightSearchComponent,
    FlightCardComponent
  ],
  exports: [
    FlightBookingComponent
  ]
})
export class FlightBookingModule { }
