import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { UserLoginComponent } from './login/user-login/user-login.component';

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: '**', component: HomeComponent }
// ];


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: PagesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: UserLoginComponent }
];
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
