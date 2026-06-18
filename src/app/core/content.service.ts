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
      this.contentState.set(content);
      return content;
    } catch {
      this.contentState.set(DEFAULT_MANAGED_CONTENT);
      return DEFAULT_MANAGED_CONTENT;
    }
  }

  async saveContent(content: ManagedContent): Promise<void> {
    await firstValueFrom(this.http.put("/api/content", content));
    this.contentState.set(content);
  }
}
