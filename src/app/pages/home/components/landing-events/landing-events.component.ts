import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { EVENTS } from "../../../../core/site.data";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-events",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./landing-events.component.html",
  styleUrl: "./landing-events.component.scss",
})
export class LandingEventsComponent {
  private readonly translation = inject(TranslationService);

  readonly events = EVENTS;

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }

  formatDate(value: string): string {
    return new Intl.DateTimeFormat(this.translation.locale(), {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  }
}
