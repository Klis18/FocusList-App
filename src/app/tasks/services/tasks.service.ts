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
    this.taskList[index].state = TaskState.End;
  }

  deleteTask(id: number){
    const index = this.taskList.findIndex(x => x.id == id);
    this.taskList.splice(index,1);
  }

  searchTasks(searchWord: string){
    this.taskList = this.taskList.filter(x => x.description == searchWord);
    return this.taskList;
  }
}
