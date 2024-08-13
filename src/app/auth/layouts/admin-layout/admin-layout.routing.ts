import { Routes } from '@angular/router';

import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { IconsComponent } from '../../../components/icons/icons.component';
import { MapsComponent } from '../../../components/maps/maps.component';
import { UserProfileComponent } from '../../../components/user-profile/user-profile.component';
import { TablesComponent } from '../../../components/tables/tables.component';
import { FundsComponent } from 'src/app/components/funds/funds.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import {AuthGuard} from '../../auth.guard';
import {UsersComponent} from "../../../components/users/users.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',   canActivate: [AuthGuard],   component: DashboardComponent },
    { path: 'user-profile',  canActivate: [AuthGuard], component: UserProfileComponent },
    { path: 'tables',       canActivate: [AuthGuard],  component: TablesComponent },
    { path: 'icons',        canActivate: [AuthGuard],  component: IconsComponent },
    { path: 'maps',       canActivate: [AuthGuard],    component: MapsComponent },
    { path: 'funds',     canActivate: [AuthGuard],     component: FundsComponent },
    { path: 'projects',   canActivate: [AuthGuard],    component: ProjectsComponent},
  { path: 'users',   canActivate: [AuthGuard],    component: UsersComponent},

];
