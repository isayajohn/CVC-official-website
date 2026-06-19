import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { DEFAULT_MANAGED_CONTENT } from "./site.data";
import { ManagedContent } from "./types";

@Injectable({ providedIn: "root" })
export class ContentService {
  private readonly http = inject(HttpClient);
  private readonly contentState = signal<ManagedContent | null>(null);

  readonly content = computed(() => this.contentState());
  readonly site = computed(
    () => this.contentState()?.site ?? DEFAULT_MANAGED_CONTENT.site,
  );

  async loadContent(force = false): Promise<ManagedContent> {
    if (!force && this.contentState()) {
      return this.contentState() as ManagedContent;
    }

    try {
      const content = await firstValueFrom(
        this.http.get<ManagedContent>("/api/content"),
      );
      const normalized = this.normalizeContent(content);
      this.contentState.set(normalized);
      return normalized;
    } catch {
      const fallback = this.normalizeContent(DEFAULT_MANAGED_CONTENT);
      this.contentState.set(fallback);
      return fallback;
    }
  }

  async saveContent(content: ManagedContent): Promise<void> {
    const normalized = this.normalizeContent(content);
    await firstValueFrom(this.http.put("/api/content", normalized));
    this.contentState.set(normalized);
  }

  private normalizeContent(content: Partial<ManagedContent>): ManagedContent {
    return {
      ...DEFAULT_MANAGED_CONTENT,
      ...content,
      site: {
        ...DEFAULT_MANAGED_CONTENT.site,
        ...content.site,
        socials: {
          ...DEFAULT_MANAGED_CONTENT.site.socials,
          ...content.site?.socials,
        },
      },
      customization: {
        ...DEFAULT_MANAGED_CONTENT.customization,
        ...content.customization,
      },
      contentPages: {
        en: content.contentPages?.en ?? DEFAULT_MANAGED_CONTENT.contentPages.en,
        sw: content.contentPages?.sw ?? DEFAULT_MANAGED_CONTENT.contentPages.sw,
      },
      news: {
        en: content.news?.en ?? DEFAULT_MANAGED_CONTENT.news.en,
        sw: content.news?.sw ?? DEFAULT_MANAGED_CONTENT.news.sw,
      },
      services: {
        en: content.services?.en ?? DEFAULT_MANAGED_CONTENT.services.en,
        sw: content.services?.sw ?? DEFAULT_MANAGED_CONTENT.services.sw,
      },
    };
  }
}
