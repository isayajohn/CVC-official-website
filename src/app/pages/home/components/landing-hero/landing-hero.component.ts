import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-hero",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./landing-hero.component.html",
  styleUrl: "./landing-hero.component.scss",
})
export class LandingHeroComponent {
  private readonly translation = inject(TranslationService);

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }
}
