import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AttendanceDay {
  date: number;
  present: boolean;
}

interface MonthData {
  name: string;
  days: AttendanceDay[];
}

interface AttendanceRecord {
  [key: string]: { // month
    [key: string]: { // subject
      [key: number]: boolean; // date: present
    };
  };
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  months: MonthData[] = [];
  subjects: string[] = ['BIO 1', 'CHEM 1', 'PHYSICS 1', 'MATH 1'];
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  attendance: AttendanceRecord = {};

  ngOnInit() {
    this.initializeMonths();
    this.initializeAttendance();
  }

  private initializeMonths() {
    const monthNames = ['August', 'September', 'October'];
    
    this.months = monthNames.map(monthName => {
      const daysInMonth = this.getDaysInMonth(monthName);
      return {
        name: monthName,
        days: Array.from({ length: daysInMonth }, (_, i) => ({
          date: i + 1,
          present: false
        }))
      };
    });
  }

  private initializeAttendance() {
    this.months.forEach(month => {
      this.attendance[month.name] = {};
      this.subjects.forEach(subject => {
        this.attendance[month.name][subject] = {};
        month.days.forEach(day => {
          this.attendance[month.name][subject][day.date] = false;
        });
      });
    });
  }

  private getDaysInMonth(monthName: string): number {
    const year = 2024;
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  toggleAttendance(monthName: string, subject: string, date: number) {
    this.attendance[monthName][subject][date] = !this.attendance[monthName][subject][date];
  }

  getAttendance(monthName: string, subject: string, date: number): boolean {
    return this.attendance[monthName][subject][date];
  }
}