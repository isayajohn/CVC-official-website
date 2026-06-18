import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SONGS } from "../../../../core/site.data";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-music",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./landing-music.component.html",
  styleUrl: "./landing-music.component.scss",
})
export class LandingMusicComponent {
  private readonly translation = inject(TranslationService);

  readonly songs = SONGS.slice(0, 3);

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }
}
