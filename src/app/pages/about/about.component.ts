import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HISTORY_MILESTONES, LEADERS } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-about-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutPageComponent {
  readonly leaders = LEADERS;
  readonly milestones = HISTORY_MILESTONES;

  constructor(private readonly translation: TranslationService) {}

  t(path: string): string {
    return this.translation.t(path);
  }
}
