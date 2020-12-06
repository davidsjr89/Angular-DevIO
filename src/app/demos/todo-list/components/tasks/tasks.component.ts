import { map } from 'rxjs/operators';
import { Store } from './../todo-list/todo.stores';
import { TasksService } from './../../todo.services';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy{
    todoList$: Observable<any[]>;
    subscription: Subscription;
    constructor(private taskService: TasksService, private store: Store){}
    ngOnInit(): void {
        this.todoList$ = this.store.getTodoList().pipe(
            map(todolist => todolist.filter(task => !task.finalizado && !task.iniciado)));
            
            this.subscription = this.taskService.getTodoList$.subscribe();
        }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    onToggle(event){
        this.taskService.toggle(event);
    }
    
}