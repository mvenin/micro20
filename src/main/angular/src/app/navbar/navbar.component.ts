import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginService, UserIdentity } from '../login/login.service';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  public isCollapsed = true;
  public isAuthenticated = true; 
  public authenticated= {}; 

  constructor(private router: Router, private loginService: LoginService) {
       this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    this.getUserIdentity();
  }
    
  getUserIdentity(): void {
        this.loginService.getUserIdentity()
            .then(user => {this.isAuthenticated = true; console.log('isAuthenticated'+this.isAuthenticated);
            this.authenticated= JSON.stringify(user); 
            ; });
      console.log('isAuthenticated'+this.isAuthenticated);
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }
}
