import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routing';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';
import { StoreModule } from '@ngrx/store';
import * as fromFlightBooking from './+state/reducers/flight-booking.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightBookingEffects } from './+state/effects/flight-booking.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    StoreModule.forFeature('flightBooking', fromFlightBooking.reducer),
    EffectsModule.forFeature([FlightBookingEffects])
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightTypeaheadComponent
  ],
  exports: []
})
export class FlightBookingModule { }
