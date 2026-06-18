import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { AudioPlayerComponent } from "../../shared/audio-player.component";
import { ALBUMS, SONGS } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-music-page",
  standalone: true,
  imports: [CommonModule, AudioPlayerComponent],
  templateUrl: "./music.component.html",
  styleUrl: "./music.component.scss",
})
export class MusicPageComponent {
  readonly tab = signal<"songs" | "albums">("songs");
  readonly songs = SONGS;
  readonly albums = ALBUMS;

  constructor(private readonly translation: TranslationService) {}

  t(path: string): string {
    return this.translation.t(path);
  }
}
