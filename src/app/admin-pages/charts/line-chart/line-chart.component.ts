
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../admin-shared/components/common/component-card/component-card.component';
import { LineChartOneComponent } from '../../../admin-shared/components/charts/line/line-chart-one/line-chart-one.component';


@Component({
  selector: 'app-line-chart',
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    LineChartOneComponent
],
  templateUrl: './line-chart.component.html',
  styles: ``
})
export class LineChartComponent {

}
