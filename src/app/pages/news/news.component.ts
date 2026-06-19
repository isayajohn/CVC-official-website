import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { ContentService } from "../../core/content.service";
import { DEFAULT_MANAGED_CONTENT } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-news-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news.component.html",
  styleUrl: "./news.component.scss",
})
export class NewsPageComponent {
  private readonly translation = inject(TranslationService);
  private readonly content = inject(ContentService);

  readonly locale = this.translation.locale;
  readonly news = computed(() =>
    (
      this.content.content()?.news[this.locale()] ??
      DEFAULT_MANAGED_CONTENT.news[this.locale()]
    )
      .filter((article) => article.status === "published")
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
  );

  constructor() {
    void this.content.loadContent();
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  formatDate(value: string): string {
    return new Intl.DateTimeFormat(this.locale(), {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  }
}
