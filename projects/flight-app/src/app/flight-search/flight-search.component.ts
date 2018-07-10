import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flights';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    this.http
      .get<Flight[]>(url, { headers, params })
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

    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .post<Flight>(url, this.selectedFlight, { headers })
      .subscribe(
        flight => {
          this.selectedFlight = flight;
          this.message = "Erfolgreich gespeichert!";
        },
        errResponse => {
          console.error('Fehler beim Speichern', errResponse);
          this.message = "Fehler beim Speichern: ";
        }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
    delete this.message;
  }

}
