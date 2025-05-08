export interface Task{
    id: number;
    description: string;
    state: TaskState;
    programDay: Date;
    pomodoros: number;
}

export enum TaskState{
    Pending ='Pendiente',
    InProcess = 'En Proceso',
    End = 'Finalizado',
}