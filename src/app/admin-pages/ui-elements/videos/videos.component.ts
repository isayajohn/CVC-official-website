import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../admin-shared/components/common/component-card/component-card.component';
// import { AspectRatioVideoComponent } from '../../../admin-shared/components/ui/videos/aspect-ratio-video/aspect-ratio-video.component';
import { SixteenIstoNineComponent } from '../../../admin-shared/components/ui/videos/sixteen-isto-nine/sixteen-isto-nine.component';
import { FourIstoThreeComponent } from '../../../admin-shared/components/ui/videos/four-isto-three/four-isto-three.component';
import { OneIstoOneComponent } from '../../../admin-shared/components/ui/videos/one-isto-one/one-isto-one.component';
import { TwentyoneIstoNineComponent } from "../../../admin-shared/components/ui/videos/twentyone-isto-nine/twentyone-isto-nine.component";

@Component({
  selector: 'app-videos',
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    // AspectRatioVideoComponent,
    SixteenIstoNineComponent,
    FourIstoThreeComponent,
    OneIstoOneComponent,
    TwentyoneIstoNineComponent
],
  templateUrl: './videos.component.html',
  styles: ``
})
export class VideosComponent {

}
