import { Component } from '@angular/core';
import { AuthPageLayoutComponent } from '../../../admin-shared/layout/auth-page-layout/auth-page-layout.component';
import { SigninFormComponent } from '../../../admin-shared/components/auth/signin-form/signin-form.component';

@Component({
  selector: 'app-sign-in',
  imports: [
    AuthPageLayoutComponent,
    SigninFormComponent,
  ],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent {

}
