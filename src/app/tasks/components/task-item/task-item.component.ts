import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgClass } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-item',
  imports: [
    MatIconModule,
    NgClass
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  task = input.required<Task>();

  constructor(private taskServices: TasksService){}

  updateStatusTask(id: number){
    this.taskServices.updateStatusTask(id);
  }

  deleteTask(id:number){
    this.taskServices.deleteTask(id);
  }

}
