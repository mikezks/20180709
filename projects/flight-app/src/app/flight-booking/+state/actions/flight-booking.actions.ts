import { Action } from '@ngrx/store';
import { Flight } from '../../../entities/flights';

export enum FlightBookingActionTypes {
  FlightsLoadedAction = '[FlightBooking] Flights loaded'
}

export class FlightsLoadedAction implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedAction;
  constructor(readonly flights: Flight[]) {}
}

export type FlightBookingActions =
                FlightsLoadedAction;
