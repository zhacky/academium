import {Component, computed, Input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'sidenav-app',
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatListModule, RouterModule, MatIconModule, MatToolbar],
  standalone: true
})
export class SidenavComponent {
  showFiller = false;

  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '60px' : '250px')

  // sideNavCollapsed = signal(false);
  // @Input() set collapse(val: boolean) {
  //   this.sideNavCollapsed.set(val);
  // }
  sideNavCollapsed = signal(false);
  logoPicSize = computed(() => this.collapsed() ? '40px' : '150px');

  menuItems = signal<MenuItem[]>([
    {
      icon: 'assets/Icons/icon_home.svg',
      label: 'Home',
      route: 'home',
    },
    {
      icon: 'assets/Icons/icon_dashboard.svg',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'assets/Icons/icon_manager.svg',
      label: 'User Management',
      route: 'management',
    },
    {
      icon: 'assets/Icons/icon_appointments.svg',
      label: 'Appointments',
      route: 'appointments',
    },
    {
      icon: 'assets/Icons/icon_billings.svg',
      label: 'Billings and Payments',
      route: 'billings',
    },
    {
      icon: 'assets/Icons/icon_reports.svg',
      label: 'Reports',
      route: 'reports',
    },
    {
      icon: 'assets/Icons/icon_settings.svg',
      label: 'Settings',
      route: 'settings',
    },
  ]);

}
