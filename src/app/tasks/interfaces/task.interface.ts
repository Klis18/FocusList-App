export interface Task{
    id: number;
    description: string;
    state: TaskState;
}

export enum TaskState{
    Pending ='Pendiente',
    End = 'Finalizado',
}