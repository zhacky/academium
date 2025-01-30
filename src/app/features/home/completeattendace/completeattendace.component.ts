import { Component } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-completeattendace',
  templateUrl: './completeattendace.component.html',
  styleUrls: ['./completeattendace.component.css'],
  imports: [NgClass, NgForOf, NgStyle],
  standalone: true,
})
export class CompleteattendaceComponent {
  semester: string = '1st Sem'; // Change based on semester system
  academicYear: string = '2023-2025';
  subjects: string[] = ['MAT01', 'SCI01', 'HIS02', 'GEO01', 'ART03'];

  daysOfWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  repeatedDays: string[] = [];
  daysInAugust: string[] = [];

  allMonths: string[] = [
    'June', 'July', 'August', 'September', 'October',
    'November', 'December', 'January', 'February', 'March', 'April', 'May'
  ];
  displayedMonths: string[] = [];

  // Define attendance status colors using hex codes
  attendanceColors: { [key: string]: string } = {
    present: '#6BBE75', // Green
    absent: '#E47E7E',  // Red
    late: '#F3C94A',    // Yellow
    excused: '#679AC7', // Blue
    noClasses: '#8C8C8C' // Gray
  };

  // Dummy attendance data
  dummyAttendance: { [key: string]: string[] } = {
    MAT01: ['present', 'absent', '', 'late', '', 'excused', '', '', 'present', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    SCI01: ['', 'present', '', '', 'absent', '', '', 'late', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    HIS02: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    GEO01: ['present', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ART03: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  };

  ngOnInit(): void {
    this.generateAugustDays();
    this.generateRepeatedDays();
    this.setDisplayedMonths();
  }

  generateAugustDays(): void {
    const totalDays = 31; // August has 31 days
    this.daysInAugust = Array.from({ length: totalDays }, (_, i) => (i + 1).toString());
  }

  generateRepeatedDays(): void {
    const totalDays = 31; // Repeat days for 31 days
    this.repeatedDays = Array.from({ length: totalDays }, (_, i) => this.daysOfWeek[i % 7]);
  }

  setDisplayedMonths(): void {
    const semesterCount = this.isThreeSemesterSystem() ? 4 : 5;
    this.displayedMonths = this.allMonths.slice(0, semesterCount);
  }

  isThreeSemesterSystem(): boolean {
    return this.academicYear.includes("3 Sem");
  }

  // Function to get attendance color for a specific subject and day
  getAttendanceColor(subject: string, dayIndex: number): string {
    const attendanceStatus = this.dummyAttendance[subject][dayIndex];
    return this.attendanceColors[attendanceStatus] || ''; // Return empty string for default (no color)
  }
}



