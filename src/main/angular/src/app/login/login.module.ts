import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes, Resolve } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';


const MODULE_ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent }
];


@NgModule({
    imports: [CommonModule, HttpModule, RouterModule.forRoot(MODULE_ROUTES, { enableTracing: true })],
    declarations: [LoginComponent],
    providers: [LoginService],
    exports: [
    RouterModule
  ]
})
export class LoginModule {

}
