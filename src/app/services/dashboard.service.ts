import {computed, Injectable, signal} from '@angular/core';
import {Widget} from '../models/dashboard';
import {StudentComponent} from '../features/dashboard/widgets/student/student.component';
import {TeacherComponent} from '../features/dashboard/widgets/teacher/teacher.component';
import {ParentComponent} from '../features/dashboard/widgets/parent/parent.component';
import {StaffComponent} from '../features/dashboard/widgets/staff/staff.component';

@Injectable()
export class DashboardService {

  widgets = signal<Widget[]> ([
    {
      id: 1,
      label: "Student",
      content: StudentComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 2,
      label: "Teacher",
      content: TeacherComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 3,
      label: "Parents",
      content: ParentComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 4,
      label: "Staffs",
      content: StaffComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
  ])

  addedWidgets = signal<Widget[]>([
    {
      id: 1,
      label: "Student",
      content: StudentComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 2,
      label: "Teacher",
      content: TeacherComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
  ]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id))
  });

  addWidget(w: Widget){
    this.addedWidgets.set([...this.addedWidgets(), {...w}])
  }

  updateWidget(id: number, widget: Partial<Widget>){
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()]
      newWidgets[index] = {...newWidgets[index], ...widget}
      this.addedWidgets.set(newWidgets)
    }
  }

  moveWidgetToRight(id: number){
    const index = this.addedWidgets().findIndex(w=> w.id == id);
    if (index === this.addedWidgets().length - 1){
      return ;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, { ...newWidgets[index]}];

    this.addedWidgets.set(newWidgets)
  }

  moveWidgetToLeft(id: number){
    const index = this.addedWidgets().findIndex(w=> w.id == id);
    if (index === 0){
      return ;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, { ...newWidgets[index]}];

    this.addedWidgets.set(newWidgets)
  }

  removeWidget (id: number) {
    this.addedWidgets.set(this.addedWidgets().filter(w => w.id !== id))
  }

  constructor() { }
}
