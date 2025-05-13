import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { PomodoroComponent } from '../../components/pomodoro/pomodoro.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';

@Component({
  selector: 'app-tasks-pending',
  imports: [
        AddTaskComponent,
        PomodoroComponent,
        TaskItemComponent,
  ],
  templateUrl: './tasks-pending.component.html',
  styles: ``
})
export default class TasksPendingComponent implements OnInit{

  public taskListPending!: Task[];

  constructor(private taskServices: TasksService){}

  ngOnInit(): void {
    this.taskListPending = this.taskServices.filtrarTareasPendientes();
  }

}
