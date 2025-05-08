import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    CommonModule,

    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  newTask: string = '';
  programDate: Date = new Date(Date.now());
  pomodorosQuantity: number = 1; 

  constructor(private taskService: TasksService){}

  addTask(){
    this.taskService.insertarTarea(this.newTask, this.programDate, this.pomodorosQuantity);
    this.resetForm();
  }

  resetForm(){
    this.newTask = '';
    this.programDate = new Date(Date.now());
    this.pomodorosQuantity = 1;
  }
}
