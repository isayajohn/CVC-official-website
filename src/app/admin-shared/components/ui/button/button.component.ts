import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipe/safe-html.pipe';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive';

@Component({
  selector: 'app-button',
  imports: [
    CommonModule,
    SafeHtmlPipe,
  ],
  templateUrl: './button.component.html',
  styles: ``,
  host: {

  },
})
export class ButtonComponent {

  @Input() size: 'sm' | 'md' = 'md';
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() className = '';
  @Input() startIcon?: string; // SVG or icon class, or use ng-content for more flexibility
  @Input() endIcon?: string;

  @Output() btnClick = new EventEmitter<Event>();

  get sizeClasses(): string {
    return this.size === 'sm'
      ? 'px-4 py-2.5 text-sm min-h-9'
      : 'px-5 py-3 text-sm min-h-11';
  }

  get variantClasses(): string {
    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
      secondary:
        'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:text-gray-400 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10',
      outline:
        'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
      ghost:
        'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5',
      destructive:
        'bg-error-500 text-white shadow-theme-xs hover:bg-error-600 disabled:bg-error-300',
    };
    return variants[this.variant];
  }

  get disabledClasses(): string {
    return this.disabled || this.loading ? 'cursor-not-allowed opacity-60' : '';
  }

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  onClick(event: Event) {
    if (!this.isDisabled) {
      this.btnClick.emit(event);
    }
  }
}
