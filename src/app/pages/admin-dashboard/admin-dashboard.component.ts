import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ContentService } from "../../core/content.service";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-admin-dashboard-page",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./admin-dashboard.component.html",
  styleUrl: "./admin-dashboard.component.scss",
})
export class AdminDashboardPageComponent {
  private readonly translation = inject(TranslationService);
  private readonly content = inject(ContentService);

  readonly site = this.content.site;
  readonly locale = this.translation.locale;
  readonly servicesCount = computed(
    () => this.content.content()?.services[this.locale()]?.items.length ?? 0,
  );
  readonly pagesCount = computed(
    () => this.content.content()?.contentPages[this.locale()]?.length ?? 0,
  );
  readonly publishedNewsCount = computed(
    () =>
      this.content
        .content()
        ?.news[
          this.locale()
        ]?.filter((article) => article.status === "published").length ?? 0,
  );
  readonly featuredNews = computed(
    () =>
      this.content
        .content()
        ?.news[this.locale()]?.filter((article) => article.featured)
        .slice(0, 3) ?? [],
  );

  constructor() {
    void this.content.loadContent();
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }
}
