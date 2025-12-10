import { Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { loginGuard } from './guards/login.guard';

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
            
        ],
        canActivate: [loginGuard]
    },
    { 
        path: 'employee', 
        component: EmployeeComponent,
        canActivate: [loginGuard]
    },
    { 
        path: 'login', 
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) 
    },
    
    { path: '', component: HomeComponent },
    { 
        path: '**', 
        loadComponent: () => import('./notfound/notfound.component').then(c => c.NotfoundComponent)
    },

   // {path: '**', redirectTo: '/home', pathMatch: 'full'} 
];

