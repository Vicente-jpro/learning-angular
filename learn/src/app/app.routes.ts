import { Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'managers',
        children: [
            {
                path: '',
                loadComponent: () => import('./manager/manager.component').then(c => c.ManagerComponent)
            },
            {
                path: 'new',
                loadComponent: () => import('./manager/new/new.component').then(c => c.NewComponent)
            },
            {
                path: ':id',
                loadComponent: () => import('./manager/edit/edit.component').then(c => c.EditComponent)
            },
            
    ]
    },
    { path: 'employee', component: EmployeeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent}
   // {path: '**', redirectTo: '/home', pathMatch: 'full'} 
];

