import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { PomodoroComponent } from '../../components/pomodoro/pomodoro.component';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    AddTaskComponent,
    PomodoroComponent,
    TaskItemComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export default class TaskListComponent implements OnInit{

  tasks: Task[] = []
  pomodorosMinutes: number = 25 ;

  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
    this.tasks = this.tasksService.obtenerListadoTareas();
  }

  receivePomodorosQuantity(pomodoros: number){
    this.pomodorosMinutes = pomodoros * 25;
  }


}
