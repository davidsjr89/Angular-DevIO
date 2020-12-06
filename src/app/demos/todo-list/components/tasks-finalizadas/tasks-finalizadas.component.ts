import { map } from 'rxjs/operators';
import { Store } from './../todo-list/todo.stores';
import { TasksService } from './../../todo.services';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tasks-finalizadas',
    templateUrl: './tasks-finalizadas.component.html'
})

export class TasksFinalizadasComponent implements OnInit{
    finalizados$: Observable<any[]>;
    constructor(private tasksService: TasksService, private store: Store){}
    ngOnInit(): void {
        this.finalizados$ = this.store.getTodoList().pipe(
            map(todolist => todolist.filter(task => task.finalizado))
        );
    }
    onToggle(event) {
        this.tasksService.toggle(event);
    }
}