import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckRegistrationComponent } from './components/truck-registration/truck-registration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { FreightDashboardComponent } from './components/freight-dashboard/freight-dashboard.component';
import { OrdersFormComponent } from './components/orders-form/orders-form.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { CarrierInfoComponent } from './components/carrier-info/carrier-info.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NewRouteComponent } from './components/new-route/new-route.component';

import { LoginComponent } from './components/login/login.component';

import { AdminRedirectComponent } from './components/admin-redirect/admin-redirect.component';
import { RegistrationRedirectComponent } from './components/registration-redirect/registration-redirect.component';




const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'carrier-info', component: CarrierInfoComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-redirect', component: AdminRedirectComponent},
  {path: 'register-redirect', component: RegistrationRedirectComponent},
  {path: 'register/carrier', component: TruckRegistrationComponent},
  {path: 'freight-dashboard', component: FreightDashboardComponent},
  {path: 'register/client', component: ClientRegistrationComponent},

  {path: 'orders', component: OrdersFormComponent},
  {path: 'login', component: LoginComponent},

  {path: 'ordersForm', component: OrdersFormComponent},
  {path: 'client-dashboard', component: ClientDashboardComponent},
  {path: 'new-route',component: NewRouteComponent},

  {path: '**', component: NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
