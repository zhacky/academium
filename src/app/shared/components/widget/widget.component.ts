import {Component, input} from '@angular/core';
import {Widget} from '../../../models/dashboard';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-widget',
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './widget.component.html',
  standalone: true,
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  data = input.required<Widget>();
}
