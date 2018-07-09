import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './FlightSearch/FlightSearch.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FlightSearchComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
