import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {RegisterUserComponent} from "./page/register-user/register-user.component";
import {RegisterAdmComponent} from "./page/register-adm/register-adm.component";
import {ListUserComponent} from "./page/list-user/list-user.component";
import {HomeComponent} from "./page/home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {path: '', redirectTo: 'register-user', pathMatch: 'full'},
  {path: 'register-user', component: RegisterUserComponent},

  {path: '', redirectTo: 'register-adm', pathMatch: 'full'},
  {path: 'register-adm', component: RegisterAdmComponent},

  {path: '', redirectTo: 'list-user', pathMatch: 'full'},
  {path: 'list-user', component: ListUserComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
];
