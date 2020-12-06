import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { Store } from './../todo-list/todo.stores';
import { TasksService } from './../../todo.services';

@Component({
    selector: 'tasks-iniciadas',
    templateUrl: './tasks-iniciadas.component.html'
})

export class TasksIniciadasComponent implements OnInit{
    iniciados$: Observable<any[]>;
    constructor(private tasksService: TasksService, private store: Store){}
    ngOnInit(): void {
        this.iniciados$ = this.store.getTodoList().pipe(
            map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
        );
    }
    onToggle(event) {
        this.tasksService.toggle(event);
    }
    
}