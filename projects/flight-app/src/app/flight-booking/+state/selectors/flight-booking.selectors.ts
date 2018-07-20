import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '../reducers/flight-booking.reducer';

// Selector to get Feature State
export let getFlightBookingState = createFeatureSelector<State>('flightBooking');

export const getFlights = createSelector(
  getFlightBookingState,
  (state: State) => state.flights
);
