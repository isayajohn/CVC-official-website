import { Component, inject } from "@angular/core";
import {
  CVC_INSTAGRAM_URL,
  HISTORY_MILESTONES,
} from "../../../../core/site.data";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-journey",
  standalone: true,
  templateUrl: "./landing-journey.component.html",
  styleUrl: "./landing-journey.component.scss",
})
export class LandingJourneyComponent {
  private readonly translation = inject(TranslationService);

  readonly milestones = HISTORY_MILESTONES;
  readonly instagramUrl = CVC_INSTAGRAM_URL;

  t(path: string): string {
    return this.translation.t(path);
  }
}
