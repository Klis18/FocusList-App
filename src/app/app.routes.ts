import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path: '',
                loadComponent: () => import('./tasks/pages/task-list/task-list.component')
            },
            {
                path:'**',
                redirectTo: ''
            }
        ]
    },
    {
        path:'**',
        redirectTo:''
    }
];
