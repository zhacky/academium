import {Routes} from '@angular/router'
import {LoginComponent} from './core/auth/login/login.component'
import {RegisterComponent} from './core/auth/register/register.component'
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {SidenavComponent} from './shared/components/sidenav/sidenav.component';
import {AppointmentsComponent} from './features/appointments/appointments.component';
import {BillingsComponent} from './features/billings/billings.component';
import {HomeComponent} from './features/home/home.component';
import {ManagementComponent} from './features/management/management.component';
import {ReportsComponent} from './features/reports/reports.component';
import {SettingsComponent} from './features/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'common',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'billings', component: BillingsComponent },
      { path: 'dashboard',component: DashboardComponent },
      { path: 'home',component: HomeComponent },
      { path: 'management',component: ManagementComponent },
      { path: 'reports',component: ReportsComponent },
      { path: 'settings',component: SettingsComponent },
    ],
  },
]
