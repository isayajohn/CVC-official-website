import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { EVENTS } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-events-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./events.component.html",
  styleUrl: "./events.component.scss",
})
export class EventsPageComponent {
  readonly events = EVENTS;

  constructor(private readonly translation: TranslationService) {}

  t(path: string): string {
    return this.translation.t(path);
  }

  formatDate(value: string, style: "short" | "long"): string {
    return new Intl.DateTimeFormat(this.translation.locale(), {
      month: style === "short" ? "short" : "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  }
}
