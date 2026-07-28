import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Skeleton placeholder shown while data loads, instead of a spinner.
 * Variants cover the shapes used across the admin panel: table rows,
 * a generic card, and plain text lines.
 */
@Component({
  selector: 'app-loading-skeleton',
  imports: [CommonModule],
  template: `
    @if (variant === 'table-rows') {
      <div class="animate-pulse divide-y divide-gray-100 dark:divide-white/[0.05]">
        @for (row of rows; track $index) {
          <div class="flex items-center gap-4 px-5 py-4">
            <div class="size-10 shrink-0 rounded-full bg-gray-200 dark:bg-white/10"></div>
            <div class="flex-1 space-y-2">
              <div class="h-3 w-1/3 rounded bg-gray-200 dark:bg-white/10"></div>
              <div class="h-2.5 w-1/4 rounded bg-gray-200 dark:bg-white/10"></div>
            </div>
          </div>
        }
      </div>
    } @else if (variant === 'card') {
      <div class="animate-pulse space-y-3 rounded-xl border border-gray-200 p-5 dark:border-gray-800">
        <div class="h-4 w-1/2 rounded bg-gray-200 dark:bg-white/10"></div>
        <div class="h-3 w-full rounded bg-gray-200 dark:bg-white/10"></div>
        <div class="h-3 w-2/3 rounded bg-gray-200 dark:bg-white/10"></div>
      </div>
    } @else {
      <div class="animate-pulse space-y-2">
        @for (width of lineWidths; track $index) {
          <div class="h-3 rounded bg-gray-200 dark:bg-white/10" [style.width.%]="width"></div>
        }
      </div>
    }
  `,
})
export class LoadingSkeletonComponent {
  @Input() variant: 'text' | 'card' | 'table-rows' = 'text';
  @Input() rowCount = 5;
  @Input() lineWidths: number[] = [100, 92, 75];

  get rows(): unknown[] {
    return Array.from({ length: this.rowCount });
  }
}
