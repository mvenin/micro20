import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';


import { TodoModule } from './todo';
import { HomeModule } from './home';
import { HeroModule } from './hero';
import { NavbarModule } from './navbar';
import { LoginModule } from './login';
import { AppComponent } from './app.component';

@NgModule({
	  imports: [ BrowserModule, HomeModule, NavbarModule, TodoModule, HeroModule, LoginModule, RouterModule.forRoot([]) ],
	  declarations: [ AppComponent ],
	  
	  providers: [
	        [{provide: APP_BASE_HREF, useValue: '/'}],
	        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
	    ],
	    
	  bootstrap: [AppComponent]
})
export class AppModule {}
