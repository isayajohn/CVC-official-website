
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { EmptyStateComponent } from '../../admin-shared/components/common/empty-state/empty-state.component';
import { ButtonComponent } from '../../admin-shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blank',
  imports: [
    PageBreadcrumbComponent,
    EmptyStateComponent,
    ButtonComponent,
    RouterLink,
],
  templateUrl: './blank.component.html',
  styles: ``
})
export class BlankComponent {

}
