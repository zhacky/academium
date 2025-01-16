import {Injectable, signal} from '@angular/core';
import {Widget} from '../models/dashboard';
import {StudentComponent} from '../features/dashboard/widgets/student/student.component';
import {TeacherComponent} from '../features/dashboard/widgets/teacher/teacher.component';

@Injectable()
export class DashboardService {

  widgets = signal<Widget[]> ([
    {
      id: 1,
      label: "Student",
      content: StudentComponent
    },
    {
      id: 2,
      label: "Teacher",
      content: TeacherComponent
    }
  ])
  constructor() { }
}
