/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightServiceService } from './flight-service.service';

describe('Service: FlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightServiceService]
    });
  });

  it('should ...', inject([FlightServiceService], (service: FlightServiceService) => {
    expect(service).toBeTruthy();
  }));
});
