import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-story",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./landing-story.component.html",
  styleUrl: "./landing-story.component.scss",
})
export class LandingStoryComponent {
  private readonly translation = inject(TranslationService);

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }
}
