import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styles: ``
})
export class LabelComponent {
  @Input() for?: string;
  @Input() className = '';
  /** Shows a required-field asterisk after the label text. */
  @Input({ transform: booleanAttribute }) required = false;
}
