import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContentService } from "../../core/content.service";
import { TranslationService } from "../../core/translation.service";
import { ManagedContent } from "../../core/types";

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
