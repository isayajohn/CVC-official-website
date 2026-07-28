import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipe/safe-html.pipe';

const DEFAULT_ICON = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 9.5L5.5 4h13l2 5.5M3.5 9.5v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8M3.5 9.5h5a.5.5 0 0 1 .5.5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a.5.5 0 0 1 .5-.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/**
 * Generic empty/no-results/permission-denied placeholder used across tables
 * and pages. Pass an SVG string via [icon] to customize, or use the default.
 */
@Component({
  selector: 'app-empty-state',
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <div class="flex flex-col items-center justify-center px-6 py-12 text-center">
      <div
        class="mb-4 flex size-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-gray-500"
        [innerHTML]="icon | safeHtml"
      ></div>
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">{{ title }}</h3>
      @if (description) {
        <p class="mt-1 max-w-sm text-sm text-gray-500 dark:text-gray-400">{{ description }}</p>
      }
      <div class="mt-5 flex items-center gap-3">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class EmptyStateComponent {
  @Input() title = 'Nothing here yet';
  @Input() description = '';
  @Input() icon = DEFAULT_ICON;
}
