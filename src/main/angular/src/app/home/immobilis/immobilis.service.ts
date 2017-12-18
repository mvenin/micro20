import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ImmobilisService {
  private todoUrl = 'api/scrap';

  constructor(private http: Http) { }

  getContentFromUri( uriParams: string): Promise<string> {
    const url = `${this.todoUrl}?uri=`+ `${uriParams}`;
    let todos = this.http.get(url)
      .toPromise()
      .then(response => {let rs = response.text(); console.log(rs); return rs; } )
      .catch(this.handleError);
    return todos;
  }
    


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}
