import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flights';
import { AbstractFlightService } from './abstract-flight.service';
import { EventService } from '../../event.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromFlightBooking from '../+state/reducers/flight-booking.reducer';
import { FlightUpdateAction, FlightsLoadAction } from '../+state/actions/flight-booking.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from = 'Wien';
  to = 'Berlin';
  // flights: Flight[] = [];
  selectedFlight: Flight;
  message: string;
  displayedColumns: string[] = ['id', 'from', 'to', 'date', 'select'];
  numberFlights: number;
  flights$: Observable<Flight[]>;

  basket: { [key: string]: boolean } = {};

  constructor(
    private flightService: AbstractFlightService,
    private eventService: EventService,
    private store: Store<fromFlightBooking.FeatureState>) {}

  ngOnInit() {
    this.flights$ = this.store.pipe(select(s => s.flightBooking.flights));
  }

  search(): void {
/*     this.flightService
      .find(this.from, this.to)
      .subscribe(
        (flights: Flight[]) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('Error loading flights', errResp);
        }
      ); */

/*     this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => {
          this.store.dispatch(new FlightsLoadedAction(flights));
        },
        error => {
          console.error('error', error);
        }
      ); */

    this.store.dispatch(new FlightsLoadAction(this.from, this.to));
  }

  save(): void {
    this.flightService
      .save(this.selectedFlight)
      .subscribe(
        flight => {
          this.selectedFlight = flight;
          this.message = 'Erfolgreich gespeichert!';
        },
        errResponse => {
          console.error('Fehler beim Speichern', errResponse);
          this.message = 'Fehler beim Speichern: ' + errResponse;
        }
      );
  }

  edit(f: Flight): void {
    this.selectedFlight = f;
    delete this.message;
  }

  selectedChange(f: Flight, selected: boolean): void {
    this.basket[f.id] = selected;
    const flightCount = Object.keys(this.basket)
          .map((key, index) => this.basket[key])
          .filter(value => value)
          .length;

    this.eventService.setSelectedFlightCount(flightCount);
  }

  delay(): void {
    this.flights$
    .pipe(
      take(1)
    )
    .subscribe(flights => {
          const flight = flights[0];

          const oldDate = new Date(flight.date);
          const newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
          const newFlight = { ...flight, date: newDate.toISOString() };

          this.store.dispatch(new FlightUpdateAction(newFlight));
        }
      );
  }
}
