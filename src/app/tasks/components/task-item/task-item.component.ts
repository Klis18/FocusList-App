import { Component, input, output } from '@angular/core';
import { Task, TaskState } from '../../interfaces/task.interface';
import { CommonModule, NgClass } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { TasksService } from '../../services/tasks.service';
import { registerLocaleData } from '@angular/common';
import localEc from '@angular/common/locales/es-EC'

registerLocaleData(localEc);

@Component({
  selector: 'app-task-item',
  imports: [
    CommonModule,
    MatIconModule,
    NgClass
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  task = input.required<Task>();

  pomodorosTask = output<number>();

  iconName: string = 'play_arrow';

  constructor(private taskServices: TasksService){}

  updateStatusTask(id: number, state: TaskState){
    state == TaskState.Pending?
      this.taskServices.updateStatusTask(id, TaskState.End):
      this.taskServices.updateStatusTask(id, TaskState.Pending);
  }

  deleteTask(id:number){
    this.taskServices.deleteTask(id);
  }

  changeIconState(id:number,state: string, pomodorosQuantity: number){
    console.log('Datos', id, state);
    this.taskServices.updateStatusTask(id, TaskState.InProcess);
    this.iconName = 'stop',
    this.sendTime(pomodorosQuantity);
  }

  sendTime(pomodoros: number){
    this.pomodorosTask.emit(pomodoros);
  }
}
