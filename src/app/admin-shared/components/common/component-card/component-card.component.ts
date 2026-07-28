
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-card',
  imports: [],
  templateUrl: './component-card.component.html',
  styles: ``
})
export class ComponentCardComponent {

  @Input() title!: string;
  @Input() desc: string = '';
  @Input() className: string = '';
  /** Adds hover elevation — for cards that act as a clickable tile (e.g. quick actions). */
  @Input() interactive = false;
}
