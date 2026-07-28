import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from './badge.component';

type BadgeColor = 'primary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark';

/**
 * Maps common business statuses to a consistent color so the same word
 * ("Pending", "Cancelled", ...) always renders the same way everywhere,
 * without callers having to know which BadgeComponent color to pick.
 */
const STATUS_COLOR_MAP: Record<string, BadgeColor> = {
  draft: 'light',
  pending: 'warning',
  'in progress': 'info',
  inprogress: 'info',
  submitted: 'info',
  approved: 'success',
  rejected: 'error',
  completed: 'success',
  complete: 'success',
  success: 'success',
  cancelled: 'error',
  canceled: 'error',
  cancel: 'error',
  failed: 'error',
  active: 'success',
  inactive: 'light',
  paid: 'success',
  unpaid: 'warning',
  overdue: 'error',
  delivered: 'success',
  shipped: 'info',
  refunded: 'light',
};

@Component({
  selector: 'app-status-badge',
  imports: [CommonModule, BadgeComponent],
  template: `
    <app-badge [color]="resolvedColor" [size]="size">
      <span class="size-1.5 rounded-full bg-current"></span>
      {{ status }}
    </app-badge>
  `,
})
export class StatusBadgeComponent {
  @Input() status = '';
  @Input() size: 'sm' | 'md' = 'sm';
  /** Override the auto-detected color when a status string isn't in the map. */
  @Input() color?: BadgeColor;

  get resolvedColor(): BadgeColor {
    if (this.color) {
      return this.color;
    }
    return STATUS_COLOR_MAP[this.status.trim().toLowerCase()] ?? 'light';
  }
}
