import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-widget',
  template: `
    <div
      class="mx-auto mb-8 w-full max-w-60 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-center dark:border-gray-800 dark:bg-white/[0.03]"
    >
      <p class="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
        Quick tip
      </p>
      <p class="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">
        Press
        <kbd
          class="mx-0.5 rounded border border-gray-300 bg-white px-1.5 py-0.5 font-sans text-theme-xs dark:border-gray-700 dark:bg-gray-800"
          >⌘K</kbd
        >
        to search anywhere.
      </p>
    </div>
  `
})
export class SidebarWidgetComponent {} 