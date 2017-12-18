import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Headers, Http } from '@angular/http';
import {FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { LoginService, UserIdentity } from './login.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    template: `<div><span>{{ authenticated }}</span>
<span>{{ isAuthenticated }}</span></div>`
})
export class LoginComponent implements OnInit {
    public isAuthenticated = false; 
    public authenticated= {}; 
    
    constructor(private location:Location, private router: Router, private loginService: LoginService) {
        if('/logout' === this.router.url){
            this.loginService.logout();
            this.router.navigate(['/']);
            window.location.reload();
        }            
    }

    ngOnInit() {
       this.getUserIdentity();
    }

     getUserIdentity(): void {
            this.loginService.getUserIdentity()
                .then(user => {this.isAuthenticated = true; console.log('isAuthenticated'+this.isAuthenticated);
                this.authenticated= JSON.stringify(user); });
          console.log('isAuthenticated'+this.isAuthenticated);
      }
    
}
