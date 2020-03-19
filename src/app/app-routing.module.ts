import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckRegistrationComponent } from './components/truck-registration/truck-registration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  
  {path: 'register/carrier', component: TruckRegistrationComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
