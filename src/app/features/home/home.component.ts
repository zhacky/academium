import { Component,} from '@angular/core';
import {DailyattendanceComponent} from './dailyattendance/dailyattendance.component';
import {HistoryattendanceComponent} from './historyattendance/historyattendance.component';
import {CompleteattendaceComponent} from './completeattendace/completeattendace.component';
import {AnalyticsComponent} from './analytics/analytics.component';

@Component({
  selector: 'app-home',
  imports: [DailyattendanceComponent, HistoryattendanceComponent, CompleteattendaceComponent, AnalyticsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
