import {Component, inject} from '@angular/core';
import {WidgetComponent} from '../../shared/components/widget/widget.component';
import {Widget} from '../../models/dashboard';
import {DashboardService} from '../../services/dashboard.service';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  imports: [
    WidgetComponent,
    MatButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: `./dashboard.component.html`,
  providers:[DashboardService],
  standalone: true,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 store = inject(DashboardService)
}
