import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {RegisterUserComponent} from "./page/register-user/register-user.component";
import {RegisterAdmComponent} from "./page/register-adm/register-adm.component";
import {ListUserComponent} from "./page/list-user/list-user.component";
import {HomeComponent} from "./page/home-user/home.component";
import {managerGuard} from "./guards/manager.guards";
import {adminGuard} from "./guards/admin.guards";
import {authGuard} from "./guards/auth.guards";
import {PlaceOrderComponent} from "./page/place-order/place-order.component";
import {ListOrderComponent} from "./page/list-order/list-order.component";
import {ListDeliveryComponent} from "./page/list-delivery/list-delivery.component";
import {ListAvaliationComponent} from "./page/list-avaliation/list-avaliation.component";
import {AvaliationDeliveryComponent} from "./page/avaliation-delivery/avaliation-delivery.component";
import {HomeAdmComponent} from "./page/home-adm/home-adm.component";
import {ListOrderUserComponent} from "./page/list-order-user/list-order-user.component";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},

  {path: 'home-adm', component: HomeAdmComponent, canActivate: [adminGuard]},
  {path: 'home-adm', component: HomeAdmComponent, canActivate: [managerGuard]},

  {path: 'place-order', component: PlaceOrderComponent, canActivate: [authGuard]},
  {path: 'avaliation-delivery', component: AvaliationDeliveryComponent, canActivate: [authGuard]},

  {path: 'register-adm', component: RegisterAdmComponent, canActivate: [adminGuard]},
  {path: 'register-adm', component: RegisterAdmComponent, canActivate: [managerGuard]},

  {path: 'list-user', component: ListUserComponent, canActivate: [adminGuard]},
  {path: 'list-user', component: ListUserComponent, canActivate: [managerGuard]},

  {path: 'list-order', component: ListOrderComponent, canActivate: [adminGuard]},
  {path: 'list-order', component: ListOrderComponent, canActivate: [managerGuard]},

  {path: 'list-order-user', component: ListOrderUserComponent, canActivate: [authGuard]},

  {path: 'list-delivery', component: ListDeliveryComponent, canActivate: [adminGuard]},
  {path: 'list-delivery', component: ListDeliveryComponent, canActivate: [managerGuard]},

  {path: 'list-avaliation', component: ListAvaliationComponent, canActivate: [adminGuard]},
  {path: 'list-avaliation', component: ListAvaliationComponent, canActivate: [managerGuard]},

];
