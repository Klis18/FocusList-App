import { Component, OnDestroy, OnInit} from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-pomodoro',
  imports: [],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent implements OnInit, OnDestroy{

  tiempoRestante: string = '';
  pomodoroInterval: any;

  porcentajeAvanzado: number = 0;

  constructor(private taskServices:TasksService){}
  
  ngOnInit(): void {
    this.pomodoroInterval = setInterval(()=>{
      this.tiempoRestante = this.taskServices.showCountDown();
      this.calcularPorcentajeAvance();
    },1000);
  }
  
  ngOnDestroy(): void {
    clearInterval(this.pomodoroInterval);
  }

  calcularPorcentajeAvance(){
    const totalSegundos = this.taskServices.tiempoPomodoroTotalSegundos;
    const segundosRestantes = this.taskServices.tiempoPomodoroSegundosRestantes;
    this.porcentajeAvanzado = ((totalSegundos - segundosRestantes)/totalSegundos)*100;
    console.log('Porcentaje avanzado', this.porcentajeAvanzado);
  }

}
