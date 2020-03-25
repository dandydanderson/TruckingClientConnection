import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { OrdersFormComponent } from './components/orders-form/orders-form.component';
import { FreightDashboardComponent } from './components/freight-dashboard/freight-dashboard.component';
// import { RoutesComponent } from './components/routes/routes.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TruckRegistrationComponent } from './components/truck-registration/truck-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddressComponent } from './components/address/address.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TruckRegistrationEquipmentComponent } from './components/truck-registration-equipment/truck-registration-equipment.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarrierService } from './services/carrier.service';
import { SubmitOrderService } from './services/submit-order.service';
import { CarrierInfoComponent } from './components/carrier-info/carrier-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpRequestInterceptor } from './classes/HttpRequestInterceptor';
import { CarrierEditComponent } from './components/carrier-edit/carrier-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    OrdersFormComponent,
    FreightDashboardComponent,
    // RoutesComponent,
    TruckRegistrationComponent,
    ClientRegistrationComponent,
    AddressComponent,
    NotFoundComponent,
    TruckRegistrationEquipmentComponent,
    CarrierInfoComponent,
    CarrierEditComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTabsModule,
    

  ],
  providers: [CarrierService,SubmitOrderService,{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }