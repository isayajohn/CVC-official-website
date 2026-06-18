import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContentService } from "../../core/content.service";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-contact-page",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactPageComponent {
  private readonly content = inject(ContentService);
  private readonly translation = inject(TranslationService);

  readonly site = this.content.site;

  t(path: string): string {
    return this.translation.t(path);
  }
}
