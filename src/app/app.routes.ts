import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path: 'all-tasks',
                loadComponent: () => import('./tasks/pages/task-list/task-list.component')
            },
            {
                path:'tasks-today',
                loadComponent: () => import('./tasks/pages/tasks-today/tasks-today.component')
            },
            {
                path:'tasks-pending',
                loadComponent: () => import('./tasks/pages/tasks-pending/tasks-pending.component') 
            },
            {
                path:'**',
                redirectTo: 'all-tasks'
            }
        ]
    },
    {
        path:'**',
        redirectTo:''
    }
];
