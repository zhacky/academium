import {Component, inject} from '@angular/core';
import {WidgetComponent} from '../../shared/components/widget/widget.component';
import {Widget} from '../../models/dashboard';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    WidgetComponent
  ],
  templateUrl: `./dashboard.component.html`,
  providers:[DashboardService],
  standalone: true,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 store = inject(DashboardService)
}
