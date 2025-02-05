import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxChartsModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  viewBar: [number, number] = [500, 300]; // Chart size

  // Sample data
  barChartData = [
    { name: '0', value: 30 },
    { name: '1', value: 70 },
    { name: '2', value: 25 },
    { name: '3', value: 65 },
  ];

  // Custom colors
  barColorScheme: any = {
    domain: ['#679AC7', '#6BBE75', '#E47E7E', '#F3C94A']
  };

  barShowXAxis = true;
  barShowYAxis = true;
  barShowLegend = false;
  barShowXAxisLabel = true;
  barShowYAxisLabel = true;
  BarxAxisLabel = 'Categories';
  BaryAxisLabel = 'Values';

  lineChartData: any[] = [
    {
      name: 'Series 1',
      series: [
        { name: '0', value: 10 },
        { name: '10', value: 20 },
        { name: '20', value: 70 },
        { name: '30', value: 50 },
        { name: '40', value: 60 },
        { name: '50', value: 30 },
        { name: '60', value: 20 },
        { name: '70', value: 40 },
        { name: '80', value: 50 },
        { name: '90', value: 80 },
        { name: '100', value: 100 },
      ],
    },
  ];

  viewLine: [number, number] = [500, 300]; // Chart size

  // Chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'X Axis';
  yAxisLabel = 'Y Axis';

  LineColorScheme: any = {
    domain: ['#c00000'],
  };
}
