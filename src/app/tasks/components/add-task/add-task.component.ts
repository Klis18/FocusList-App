import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { MatCalendar, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';

import { TasksService } from '../../services/tasks.service';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    CommonModule,

    // MatCalendar,
    // MatCard,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  newTask: string = '';
  selected: Date = new Date(Date.now());

  exampleHeader:any;

  constructor(private taskService: TasksService){}

  addTask(){
    this.taskService.insertarTarea(this.newTask);
    this.newTask = '';
    console.log('Fecha', this.selected);
  }
}
