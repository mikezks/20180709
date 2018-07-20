import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routing';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { SharedModule } from './shared/shared.module';
import * as fromState from './+state';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forRoot([ fromState.AppEffects ]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule.forRoot(APP_ROUTES),
    NgbModule.forRoot(),
    HttpClientModule,
    FlightBookingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: fromState.CustomSerializer }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
