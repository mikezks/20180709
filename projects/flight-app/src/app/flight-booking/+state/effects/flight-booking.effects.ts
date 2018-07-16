import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FlightBookingActionTypes, FlightsLoadAction, FlightsLoadedAction } from '../actions/flight-booking.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { FlightService } from '../../flight-search/flight.service';
import { AbstractFlightService } from '../../flight-search/abstract-flight.service';

@Injectable()
export class FlightBookingEffects {

  constructor(
    private flightService: AbstractFlightService,
    private actions$: Actions) {
  }

  @Effect()
  flightsLoad$ =
    this.actions$
      .pipe(
        ofType(FlightBookingActionTypes.FlightsLoadAction),
        switchMap(
          (a: FlightsLoadAction) => this.flightService.find(a.from, a.to)
        ),
        map(flights => new FlightsLoadedAction(flights))
  );
}
