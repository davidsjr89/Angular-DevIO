import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from './components/todo-list/todo.stores';
import { Injectable } from "@angular/core";
import { Task } from './task';
import { tap } from 'rxjs/operators';

@Injectable()

export class TasksService {
    constructor(private httpClient: HttpClient, private store: Store){}
    //Objeto abaixo e o método são praticamente a mesma coisa 
    getTodoList$: Observable<Task[]> = this.httpClient.get<Task[]>('http://localhost:3000/todolist')
    .pipe(tap(next => this.store.set('todolist', next)));
    
    //  getToDoList(): Observable<Task[]>{
    //      return this.httpClient.get<Task[]>('http://localhost:3000/todolist');
    //  }

    toggle(event: any){
        this.httpClient.put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
        .subscribe(() => {
            const value = this.store.value.todolist;

            const todolist = value.map((task: Task) => {
                if(event.task.id === task.id){
                    return {
                        ...task, ...event.task
                    }
                } else {
                    return task;
                }
            })
            this.store.set('todolist', todolist);
        });
    }
}