import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes, Resolve } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';


const MODULE_ROUTES: Route[] = [
    { path: 'todo', component: TodoComponent }
];


@NgModule({
    imports: [CommonModule, HttpModule, RouterModule.forRoot(MODULE_ROUTES)],
    declarations: [TodoComponent],
    providers: [TodoService],
    exports: [RouterModule ]
})
export class TodoModule {

}
