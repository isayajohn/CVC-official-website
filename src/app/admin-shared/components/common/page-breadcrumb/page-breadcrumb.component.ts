import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../../../core/translation.service';

/**
 * Page header used at the top of every admin page: breadcrumb trail,
 * bold page title, optional supporting description, and an actions slot
 * (projected content) for a primary action button / period selector.
 */
@Component({
  selector: 'app-page-breadcrumb',
  imports: [
    RouterModule,
  ],
  templateUrl: './page-breadcrumb.component.html',
  styles: ``
})
export class PageBreadcrumbComponent {
  private readonly translation = inject(TranslationService);

  @Input() pageTitle = '';
  @Input() description = '';

  get homeLink(): string {
    return this.translation.path('/admin');
  }
}
