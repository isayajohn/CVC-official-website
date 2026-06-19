import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContentService } from "../../core/content.service";
import { TranslationService } from "../../core/translation.service";
import { ContentPage, ManagedContent, NewsArticle } from "../../core/types";

@Component({
  selector: "app-admin-content-page",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./admin-content.component.html",
  styleUrl: "./admin-content.component.scss",
})
export class AdminContentPageComponent {
  draft: ManagedContent | null = null;
  isSaving = false;
  statusMessage = "";
  statusType: "success" | "error" = "success";
  selectedPageIndex = 0;

  constructor(
    private readonly translation: TranslationService,
    private readonly content: ContentService,
  ) {
    void this.load();
  }

  get currentLocale() {
    return this.translation.locale();
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  async load(): Promise<void> {
    const content = await this.content.loadContent();
    this.draft = structuredClone(content);
  }

  updateFeatures(index: number, value: string): void {
    if (!this.draft) return;
    this.draft.services[this.currentLocale].items[index].features = value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  get selectedPage(): ContentPage | null {
    return (
      this.draft?.contentPages[this.currentLocale][this.selectedPageIndex] ??
      null
    );
  }

  selectPage(index: number): void {
    this.selectedPageIndex = index;
  }

  addContentPage(): void {
    if (!this.draft) return;
    const locale = this.currentLocale;
    const id = `page-${Date.now()}`;
    const page: ContentPage = {
      id,
      slug: id,
      status: "draft",
      navLabel: "New Page",
      title: "New Page",
      subtitle: "Short page introduction.",
      heroImage: this.draft.customization.heroImage,
      seoTitle: "New Page",
      seoDescription: "Short search description for this page.",
    };

    this.draft.contentPages[locale] = [
      ...this.draft.contentPages[locale],
      page,
    ];
    this.selectedPageIndex = this.draft.contentPages[locale].length - 1;
  }

  removeContentPage(index: number): void {
    if (!this.draft) return;
    this.draft.contentPages[this.currentLocale].splice(index, 1);
    this.selectedPageIndex = Math.max(0, this.selectedPageIndex - 1);
  }

  updatePageSlug(page: ContentPage): void {
    if (page.id === "home") {
      page.slug = "";
      return;
    }

    page.slug = this.slugify(page.title);
  }

  addNewsArticle(): void {
    if (!this.draft) return;
    const locale = this.currentLocale;
    const id = `news-${Date.now()}`;
    const article: NewsArticle = {
      id,
      slug: id,
      status: "draft",
      featured: false,
      publishedAt: new Date().toISOString().slice(0, 10),
      author: "CVC Team",
      category: "News",
      image: this.draft.customization.heroImage,
      title: "New article",
      excerpt: "Short summary for the news listing.",
      body: "Write the full news story here.",
    };

    this.draft.news[locale] = [article, ...this.draft.news[locale]];
  }

  removeNewsArticle(index: number): void {
    if (!this.draft) return;
    this.draft.news[this.currentLocale].splice(index, 1);
  }

  updateNewsSlug(article: NewsArticle): void {
    article.slug = this.slugify(article.title);
  }

  private slugify(value: string): string {
    return (
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || `news-${Date.now()}`
    );
  }

  async save(): Promise<void> {
    if (!this.draft) return;
    this.isSaving = true;
    try {
      await this.content.saveContent(this.draft);
      this.statusMessage = this.t("admin.saveSuccess");
      this.statusType = "success";
    } catch {
      this.statusMessage = this.t("admin.saveFailed");
      this.statusType = "error";
    } finally {
      this.isSaving = false;
    }
  }
}
