import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { ContentService } from "../../core/content.service";
import { DEFAULT_MANAGED_CONTENT } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";
import { ServiceItem } from "../../core/types";

@Component({
  selector: "app-services-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.scss",
})
export class ServicesPageComponent {
  private readonly translation = inject(TranslationService);
  private readonly content = inject(ContentService);

  readonly locale = this.translation.locale;
  readonly serviceContent = computed(
    () =>
      this.content.content()?.services[this.locale()] ??
      DEFAULT_MANAGED_CONTENT.services[this.locale()],
  );

  constructor() {
    void this.content.loadContent();
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  iconFor(icon: ServiceItem["icon"]): string {
    switch (icon) {
      case "building2":
        return "apartment";
      case "calendarCheck":
        return "event_available";
      case "ticket":
        return "confirmation_number";
      default:
        return "mic";
    }
  }
}
