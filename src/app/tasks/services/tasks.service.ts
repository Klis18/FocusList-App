import { Injectable } from '@angular/core';
import { Task, TaskState } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskList:Task[] = [
    {
      id: 1,
      description: 'Crear invitación digital de quinceañera',
      state: TaskState.Pending
    },
    {
      id: 2,
      description: 'Crear publicidad en redes sociales',
      state: TaskState.Pending
    },
    {
      id: 3,
      description: 'Subir post a instagram',
      state: TaskState.Pending
    }
  ]
  constructor() { }

  obtenerListadoTareas():Task[]{
    return this.taskList;
  }

  insertarTarea(newTask: Task){
    this.taskList.push(newTask);
  }

  updateStatusTask(id: number){
    const index = this.taskList.findIndex(x => x.id == id);
    const estado = this.taskList[index].state;
    if(estado == TaskState.Pending){
      this.taskList[index].state = TaskState.End;
    }else
    if(estado == TaskState.End){
      this.taskList[index].state = TaskState.Pending;
    }
  }

  deleteTask(id: number){
    const index = this.taskList.findIndex(x => x.id == id);
    this.taskList.splice(index,1);
  }

}
