import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../../components/add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    AddTaskComponent,
    TaskItemComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export default class TaskListComponent implements OnInit{

  tasks: Task[] = []

  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
    this.tasks = this.tasksService.obtenerListadoTareas();
  }



}
