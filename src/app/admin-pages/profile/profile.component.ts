
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { UserMetaCardComponent } from '../../admin-shared/components/user-profile/user-meta-card/user-meta-card.component';
import { UserInfoCardComponent } from '../../admin-shared/components/user-profile/user-info-card/user-info-card.component';
import { UserAddressCardComponent } from '../../admin-shared/components/user-profile/user-address-card/user-address-card.component';

@Component({
  selector: 'app-profile',
  imports: [
    PageBreadcrumbComponent,
    UserMetaCardComponent,
    UserInfoCardComponent,
    UserAddressCardComponent
],
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {

}
