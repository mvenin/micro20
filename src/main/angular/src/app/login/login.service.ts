import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class UserIdentity {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


@Injectable()
export class LoginService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private loginUrl = 'login';

  constructor(private http: Http) { }
    
  logout(): void {
     this.http.get('/api/logout')
       .toPromise()
      .then(response => response.json() )
      .catch(this.handleError);
  }
      
  getUserIdentity(): Promise<any> {
    let url = '/user';
    let user = this.http.get(url)
      .toPromise()
      .then(response => response.json() )
      .catch(this.handleError);
    return user;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  
}
