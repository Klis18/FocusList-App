import { Injectable, signal } from '@angular/core';
import { Task, TaskState } from '../interfaces/task.interface';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskList:Task[] = [
    {
      id: 1,
      description: 'Crear invitación digital de quinceañera',
      state: TaskState.Pending,
      programDay: new Date(Date.now()),
      pomodoros: 1
    },
    {
      id: 2,
      description: 'Crear publicidad en redes sociales',
      state: TaskState.Pending,
      programDay: new Date(Date.now()),
      pomodoros: 2

    },
    {
      id: 3,
      description: 'Subir post a instagram',
      state: TaskState.Pending,
      programDay: new Date(Date.now()),
      pomodoros:1
    }
  ]
  tiempoRestante: string = '00:00:00';
  intervalo!: any;

  constructor() { }

  obtenerListadoTareas():Task[]{
    return this.taskList;
  }

  insertarTarea(task: string, programDate: Date, pomodoros: number){
    const id = this.taskList.length + 1;
    const status = TaskState.Pending;
    const newTask = {
                      id: id, 
                      description: task, 
                      state:status, 
                      programDay:programDate, 
                      pomodoros:pomodoros
                    } as Task
    this.taskList.push(newTask);
  }

  updateStatusTask(id: number, state:TaskState){
    const index = this.taskList.findIndex(x => x.id == id);
    this.taskList[index].state = state;
  }

  deleteTask(id: number){
    const index = this.taskList.findIndex(x => x.id == id);
    this.taskList.splice(index,1);
  }

  startPomodoro(pomodorosQuantity: number){
    const pomodorosMinutes = pomodorosQuantity * 25;

     let tiempoPomodoroSegundos = pomodorosMinutes!* 60;
        this.intervalo = setInterval(()=>{
          tiempoPomodoroSegundos -= 1;
          this.changeTime(tiempoPomodoroSegundos);
        },1000);
  }

  changeTime(tiempoPomodoroSegundos: number){
    const horas = Math.floor(tiempoPomodoroSegundos / 3600); 
    const minutos = Math.floor((tiempoPomodoroSegundos % 3600)/60); 
    const segundos = tiempoPomodoroSegundos % 60; 
    this.tiempoRestante = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2,'0')}`;
    console.log('Tiempo Restante', this.tiempoRestante);
    return this.tiempoRestante;
  }

  stopPomodoro(){
    clearInterval(this.intervalo);
    this.tiempoRestante = '00:00:00';
  }

  showCountDown(){
    return this.tiempoRestante;
  }

}
