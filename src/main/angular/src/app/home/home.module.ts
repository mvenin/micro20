import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes, Resolve } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MODULE_COMPONENTS, MODULE_ROUTES } from './home.routes';

import { ImmobilisService } from './immobilis/immobilis.service';

@NgModule({
  imports: [CommonModule, HttpModule, RouterModule.forRoot(MODULE_ROUTES) ],
  declarations: [ MODULE_COMPONENTS ],
  providers: [ImmobilisService],
  exports: [RouterModule ]
})
export class HomeModule {}
