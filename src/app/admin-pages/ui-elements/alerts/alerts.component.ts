import { Component } from '@angular/core';
import { AlertComponent } from '../../../admin-shared/components/ui/alert/alert.component';
import { ComponentCardComponent } from '../../../admin-shared/components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';

@Component({
  selector: 'app-alerts',
  imports: [
    AlertComponent,
    ComponentCardComponent,
    PageBreadcrumbComponent,
  ],
  templateUrl: './alerts.component.html',
  styles: ``
})
export class AlertsComponent {

}
