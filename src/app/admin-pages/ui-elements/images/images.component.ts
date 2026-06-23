import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../admin-shared/components/common/component-card/component-card.component';
import { ResponsiveImageComponent } from '../../../admin-shared/components/ui/images/responsive-image/responsive-image.component';
import { ThreeColumnImageGridComponent } from '../../../admin-shared/components/ui/images/three-column-image-grid/three-column-image-grid.component';
import { TwoColumnImageGridComponent } from '../../../admin-shared/components/ui/images/two-column-image-grid/two-column-image-grid.component';

@Component({
  selector: 'app-images',
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    ResponsiveImageComponent,
    ThreeColumnImageGridComponent,
    TwoColumnImageGridComponent,
  ],
  templateUrl: './images.component.html',
  styles: ``
})
export class ImagesComponent {

}
