/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbstractFlightService } from './abstract-flight.service';

describe('Service: AbstractFlight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractFlightService]
    });
  });

  it('should ...', inject([AbstractFlightService], (service: AbstractFlightService) => {
    expect(service).toBeTruthy();
  }));
});
