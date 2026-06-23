
import { Component } from '@angular/core';
import { BarChartOneComponent } from '../../../admin-shared/components/charts/bar/bar-chart-one/bar-chart-one.component';
import { PageBreadcrumbComponent } from '../../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../admin-shared/components/common/component-card/component-card.component';

@Component({
  selector: 'app-bar-chart',
  imports: [
    ComponentCardComponent,
    PageBreadcrumbComponent,
    BarChartOneComponent
],
  templateUrl: './bar-chart.component.html',
  styles: ``
})
export class BarChartComponent {

}
