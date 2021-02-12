import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path: 'Customers', component: CustomersComponent},
   {path: 'Orders', component: OrdersComponent},
   {path: 'About', component: AboutComponent},
   {path: 'Login', component: LoginComponent},
   {path: '', pathMatch:'full', redirectTo: '/Customers'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
