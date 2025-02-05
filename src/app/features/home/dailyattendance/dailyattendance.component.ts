import {ChangeDetectionStrategy, Component, model, ViewChild} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCalendar, MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf} from '@angular/common';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIcon} from '@angular/material/icon';

export interface PresentSubject {
  subCode: string;
  description: string;
  schedule: string;
  teacher: string;
  status: string;
  statusColor: string;
}

const SubjectData: PresentSubject[] = [
  {
    subCode: 'CSc988',
    description: 'Advance Machine Learning and Artificial Intelligence',
    schedule: '1:30 PM - 9:00 PM SMTWThF',
    teacher: 'Tina Perkins',
    status: 'Present',
    statusColor: '#6BBE75' // Green for present
  },
  {
    subCode: 'Math124',
    description: 'Extreme Calculus for Beginners',
    schedule: '9:00 PM - 11:30 PM SW',
    teacher: 'Thomas Vincent',
    status: 'No Class',
    statusColor: '#8C8C8C' // Gray for no class
  },
  {
    subCode: 'Eng245',
    description: 'Shakespearian English Application',
    schedule: '11:30 PM - 1:00 AM STTh',
    teacher: 'Albert Gonzalez',
    status: 'Present',
    statusColor: '#6BBE75' // Green for present
  },
  {
    subCode: 'PE72',
    description: 'Strategic Physical Deployment',
    schedule: '1:00 AM - 6:30 AM S',
    teacher: 'Samantha Jenkins',
    status: 'Late',
    statusColor: '#F3C94A' // Yellow for late
  },
];


@Component({
  selector: 'app-dailyattendance',
  imports: [MatCardModule, MatDatepickerModule, MatTableModule, MatInputModule, MatSelectModule, MatFormFieldModule, NgForOf, MatIcon],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dailyattendance.component.html',
  styleUrl: './dailyattendance.component.css'
})
export class DailyattendanceComponent {
  selected = model<Date | null>(null);

  displayedColumns: string[] = ['subCode', 'description', 'teacher', 'status',];
  dataSource = SubjectData;

  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;

  selectedDate: Date = new Date();

  ngAfterViewInit() {
    this.calendar.activeDate = this.selectedDate; // Set default active date
  }

  setToday() {
    this.selectedDate = new Date(); // Set today's date
    this.calendar.activeDate = this.selectedDate; // Navigate to today's month
    this.calendar.updateTodaysDate(); // Refresh calendar view
  }
}
