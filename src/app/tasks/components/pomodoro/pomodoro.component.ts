import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  imports: [],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent {

  pomodoroTaskQuantity = input<number>();

  changeTime(){
    const tiempoPomodoroSegundos = this.pomodoroTaskQuantity()!* 60;
    const horas = Math.floor(tiempoPomodoroSegundos / 3600); 
    console.log('Horas', horas);
    const minutos = Math.floor((tiempoPomodoroSegundos % 3600)/60); 
    console.log('Minutos', minutos);
    const segundos = tiempoPomodoroSegundos % 60; 
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2,'0')}`;
  }
  

}
