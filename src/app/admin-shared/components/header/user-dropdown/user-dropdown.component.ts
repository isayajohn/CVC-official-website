import { Component, inject } from '@angular/core';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DropdownItemTwoComponent } from '../../ui/dropdown/dropdown-item/dropdown-item.component-two';
import { AuthService } from '../../../../core/auth.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  imports: [CommonModule, RouterModule, DropdownComponent, DropdownItemTwoComponent]
})
export class UserDropdownComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  isOpen = false;

  get username(): string {
    return this.auth.username() ?? 'Admin';
  }

  get userInitial(): string {
    return this.username.slice(0, 1).toUpperCase();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  async logout() {
    this.closeDropdown();
    await this.auth.logout();
    await this.router.navigateByUrl('/admin/login');
  }
}
