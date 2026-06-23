
import { Component, inject } from '@angular/core';
import { LabelComponent } from '../../form/label/label.component';
import { CheckboxComponent } from '../../form/input/checkbox.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/auth.service';
import { TranslationService } from '../../../../core/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin-form',
  imports: [
    CommonModule,
    LabelComponent,
    CheckboxComponent,
    ButtonComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent {
  private readonly auth = inject(AuthService);
  private readonly translation = inject(TranslationService);
  private readonly router = inject(Router);

  showPassword = false;
  isChecked = false;
  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onSignIn() {
    if (!this.email || !this.password) return;
    this.isLoading = true;
    this.errorMessage = '';
    const result = await this.auth.login(this.email, this.password);
    this.isLoading = false;
    if (result.ok) {
      await this.router.navigateByUrl(this.translation.path('/admin'));
    } else {
      this.errorMessage = result.message ?? 'Login failed';
    }
  }
}
