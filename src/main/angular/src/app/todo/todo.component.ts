import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TodoService, Todo } from './todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    private todos: Todo[];
    private selectedTodo: Todo;

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.getTodos();
    }

    onSelect(todo: Todo): void {
        this.selectedTodo = todo;
    }

    getTodos(): void {
        this.todoService.getTodos()
            .then(todos => this.todos = todos);
    }

    addTodo(todoDescr: string): void {
        todoDescr = todoDescr.trim();
        if (!todoDescr)
            return;

        this.todoService.createTodo(todoDescr)
            .then(todo => {
                this.todos.push(todo);
                this.selectedTodo = null;
            });
    }

    deleteTodo(todo: Todo): void {
        this.todoService
            .deleteTodo(todo.id)
            .then(() => {
                this.todos = this.todos.filter(h => h !== todo);
                if (this.selectedTodo === todo) { this.selectedTodo = null; }
            });
    }

}
