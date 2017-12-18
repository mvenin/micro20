import { NgModule } from '@angular/core';
import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { ImmobilisComponent } from './immobilis';
import { ContactComponent } from './contact';

export const MODULE_ROUTES: Route[] = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'home', pathMatch: 'full' , component: HomeComponent },
  { path: 'immobilis', component: ImmobilisComponent },
  { path: 'contact', component: ContactComponent }  
]

export const MODULE_COMPONENTS = [
  HomeComponent,
  ImmobilisComponent,
  ContactComponent
]
