import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class Todo {
  id: string;
  name: string;
  dueDate: Date;

  constructor(name: string, dueDate: Date) {
    this.name = name;
    this.dueDate = dueDate;
  }
}


@Injectable()
export class TodoService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private todoUrl = 'api/todos';

  constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    const url = `${this.todoUrl}`;
    let todos = this.http.get(url)
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
    return todos;
  }
    
  getAuth(): Promise<any> {
    let url = 'me';
    let todos = this.http.get(url)
      .toPromise()
      .then(response => response.json() )
      .catch(this.handleError);
    return todos;
  }

  createTodo(name: string): Promise<Todo> {
    return this.http
      .post(this.todoUrl, JSON.stringify(new Todo(name, new Date())), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<void> {
    const url = `${this.todoUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
      if( error.status === 403 ){
          alert(error._body);
      }   
      return Promise.reject(error.message || error);
  }
  
}
