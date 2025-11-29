import { Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path: 'managers', component: ManagerComponent},
    {path: 'employee', component: EmployeeComponent}
];

