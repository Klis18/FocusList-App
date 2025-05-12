import { Component, input, OnDestroy, OnInit, signal, Signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-pomodoro',
  imports: [],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent implements OnInit, OnDestroy{

  // pomodoroTaskQuantity = input<number>();
  tiempoRestante: string = '';
  pomodoroInterval: any;

  constructor(private taskServices:TasksService){}
  
  ngOnInit(): void {
    this.pomodoroInterval = setInterval(()=>{
      this.tiempoRestante = this.taskServices.showCountDown();
    },1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.pomodoroInterval);
  }

}
