import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf} from '@angular/common';
import {provideNativeDateAdapter} from '@angular/material/core';

export interface PresentSubject {
  semester: number;
  subCode: string;
  section: string;
  description: string;
  schedule: string;
  room: string;
  teacher: string;
  present: number;
  absent: number;
  late: number;
  excused: number;
}

const SubjectData: PresentSubject[] = [
  {
    semester: 1,
    subCode: 'CCC-123',
    section: 'WV',
    description: 'Introduction to Computer Science',
    schedule: '1:30 PM - 9:00 PM SMTWThF',
    room: 'CSC Rm 231',
    teacher: 'Tina Perkins',
    present: 20,
    absent: 3,
    late: 5,
    excused: 1,
  },
  {
    semester: 1,
    subCode: 'CCC-123',
    section: 'WV',
    description: 'Introduction to Computer Science',
    schedule: '1:30 PM - 9:00 PM SMTWThF',
    room: 'CSC Rm 231',
    teacher: 'Tina Perkins',
    present: 20,
    absent: 3,
    late: 5,
    excused: 1,
  },
  {
    semester: 1,
    subCode: 'CCC-123',
    section: 'WV',
    description: 'Introduction to Computer Science',
    schedule: '1:30 PM - 9:00 PM SMTWThF',
    room: 'CSC Rm 231',
    teacher: 'Tina Perkins',
    present: 20,
    absent: 3,
    late: 5,
    excused: 1,
  },
];

@Component({
  selector: 'app-historyattendance',
  imports: [MatCardModule, MatDatepickerModule, MatTableModule, MatInputModule, MatSelectModule, MatFormFieldModule, NgForOf],
  templateUrl: './historyattendance.component.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './historyattendance.component.css'
})
export class HistoryattendanceComponent {
  displayedColumns: string[] = ['semester', 'subCode', 'section', 'description', 'schedule', 'room', 'teacher', 'summary'];
  dataSource = SubjectData;

  years = ['2023-2024', '2024-2025', '2025-2026'];
}
