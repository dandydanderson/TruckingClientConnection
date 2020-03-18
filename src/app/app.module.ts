import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FreightDashboardComponent } from './freight-dashboard/freight-dashboard.component';
import { RoutesComponent } from './routes/routes.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TruckRegistrationComponent } from './components/truck-registration/truck-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    FreightDashboardComponent,
    RoutesComponent,
    TruckRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
