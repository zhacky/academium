import {Component, input, signal} from '@angular/core';
import {Widget} from '../../../models/dashboard';
import {NgComponentOutlet} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {WidgetOptionsComponent} from './widget-options/widget-options.component';

@Component({
  selector: 'app-widget',
  imports: [
    NgComponentOutlet,
    MatIconButton,
    MatIcon,
    WidgetOptionsComponent
  ],
  templateUrl: './widget.component.html',
  standalone: true,
  styleUrl: './widget.component.css',
  host: {
    '[style.grid-area]': '"span " + (Math.max(data().rows ?? 1, 1)) + " / span " + (Math.max(data().columns ?? 1, 1))'
  }
})
export class WidgetComponent {
  data = input.required<Widget>();
  showOptions = signal(false)
  protected readonly Math = Math;
}
