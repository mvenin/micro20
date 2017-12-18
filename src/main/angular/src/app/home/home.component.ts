import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { LoginService, UserIdentity } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public isAuthenticated = false; 
  public authenticated= {}; 
     
    constructor( private router: Router, private loginService: LoginService) {
        router.events.subscribe((e) => {
             if( e instanceof NavigationEnd && '/' === e.urlAfterRedirects){
                console.log(e);
             } else {                 
                console.log(e);
             }
        });
        
    }

    ngOnInit() {
        this.getUserIdentity();
    }

      getUserIdentity(): void {
        this.loginService.getUserIdentity()
            .then(user => {this.isAuthenticated = true; console.log('isAuthenticated'+this.isAuthenticated);
            this.authenticated= JSON.stringify(user)
                ; 
            });
      console.log('isAuthenticated: '+this.isAuthenticated);
  }
    
}
