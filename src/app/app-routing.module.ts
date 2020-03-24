import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckRegistrationComponent } from './components/truck-registration/truck-registration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { FreightDashboardComponent } from './freight-dashboard/freight-dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ClientComponent } from './components/client/client.component';
import { CarrierInfoComponent } from './components/carrier-info/carrier-info.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  {path: '', redirectTo: '/freight-dashboard', pathMatch: 'full'},
  {path: 'carrier-info', component: CarrierInfoComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'register/carrier', component: TruckRegistrationComponent},
  {path: 'freight-dashboard', component: FreightDashboardComponent},
  {path: 'register/client', component: ClientRegistrationComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'client', component: ClientComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
