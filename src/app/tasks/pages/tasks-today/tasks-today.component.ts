import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';
import { PomodoroComponent } from '../../components/pomodoro/pomodoro.component';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-today',
  imports: [
    CommonModule,
    AddTaskComponent,
    PomodoroComponent,
    TaskItemComponent,
  ],
  templateUrl: './tasks-today.component.html',
  styles: ``
})
export default class TasksTodayComponent implements OnInit{

  taskListToday: Task[] = [];

  constructor(private taskServices: TasksService) {}

  ngOnInit(): void {
    this.taskListToday = this.taskServices.filtrarTareasHoy();
  }

}
