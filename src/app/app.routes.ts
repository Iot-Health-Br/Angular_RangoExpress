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

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'register-adm', component: RegisterAdmComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'place-order', component: PlaceOrderComponent, canActivate: [authGuard]},
  {path: 'list-user', component: ListUserComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'list-order', component: ListOrderComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'list-delivery', component: ListDeliveryComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'list-avaliation', component: ListAvaliationComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'home', component: HomeComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'avaliation-delivery', component: AvaliationDeliveryComponent, canActivate: [authGuard]},
];
