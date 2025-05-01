import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgClass } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

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

}
