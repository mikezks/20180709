import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './+state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/effects/app.effects';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES),
    NgbModule.forRoot(),
    HttpClientModule,
    FlightBookingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ AppEffects ])
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
