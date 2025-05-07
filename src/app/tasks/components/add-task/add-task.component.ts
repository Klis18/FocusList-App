import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    CommonModule,

    MatIconModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  newTask: string = '';

  constructor(private taskService: TasksService){}

  addTask(){
    this.taskService.insertarTarea(this.newTask);
    this.newTask = '';
  }
}
