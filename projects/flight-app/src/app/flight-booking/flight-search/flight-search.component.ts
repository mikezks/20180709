import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flights';
import { AbstractFlightService } from './abstract-flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from = 'Wien';
  to = 'Berlin';
  flights: Flight[] = [];
  selectedFlight: Flight;
  message: string;
  displayedColumns: string[] = ['id', 'from', 'to', 'date', 'select'];
  numberFlights: number;

  basket: object = {
    '3': true,
    '5': true
  };


  constructor(private flightService: AbstractFlightService) { }

  ngOnInit() {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        (flights: Flight[]) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('Error loading flights', errResp);
        }
      );
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

  select(f: Flight): void {
    this.selectedFlight = f;
    delete this.message;
  }

}
