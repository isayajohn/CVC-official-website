import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  signal,
} from "@angular/core";

@Component({
  selector: "app-audio-player",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="audio-player">
      <audio #audioElement [src]="src" preload="metadata"></audio>
      <button
        type="button"
        class="icon-button accent-button"
        (click)="togglePlayback()"
      >
        <span class="material-symbols-outlined icon">{{
          isPlaying() ? "pause" : "play_arrow"
        }}</span>
      </button>
      <div class="audio-details">
        <div class="audio-meta">
          <span>{{ title }}</span>
          <span
            >{{ formatTime(currentTime()) }} /
            {{ formatTime(duration()) }}</span
          >
        </div>
        <input
          type="range"
          class="slider"
          [max]="duration()"
          [value]="currentTime()"
          min="0"
          step="0.1"
          (input)="seek($event)"
        />
      </div>
    </div>
  `,
})
export class AudioPlayerComponent implements AfterViewInit {
  @ViewChild("audioElement") private audioRef?: ElementRef<HTMLAudioElement>;
  @Input({ required: true }) src = "";
  @Input({ required: true }) title = "";
  @Input() maxDuration = 30;

  readonly isPlaying = signal(false);
  readonly currentTime = signal(0);
  readonly duration = signal(0);

  ngAfterViewInit(): void {
    const audio = this.audioRef?.nativeElement;
    if (!audio) return;

    audio.addEventListener("loadedmetadata", () => {
      this.duration.set(
        Math.min(audio.duration || this.maxDuration, this.maxDuration),
      );
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.currentTime >= this.maxDuration) {
        audio.pause();
        audio.currentTime = 0;
        this.isPlaying.set(false);
        this.currentTime.set(0);
        return;
      }

      this.currentTime.set(audio.currentTime);
    });

    audio.addEventListener("ended", () => {
      this.isPlaying.set(false);
      this.currentTime.set(0);
    });
  }

  togglePlayback(): void {
    const audio = this.audioRef?.nativeElement;
    if (!audio) return;

    if (this.isPlaying()) {
      audio.pause();
      this.isPlaying.set(false);
      return;
    }

    void audio.play();
    this.isPlaying.set(true);
  }

  seek(event: Event): void {
    const audio = this.audioRef?.nativeElement;
    const value = Number((event.target as HTMLInputElement).value);
    if (!audio) return;

    audio.currentTime = value;
    this.currentTime.set(value);
  }

  formatTime(seconds: number): string {
    const safeSeconds = Number.isFinite(seconds) ? seconds : 0;
    const minutes = Math.floor(safeSeconds / 60);
    const remainder = Math.floor(safeSeconds % 60);
    return `${minutes}:${remainder.toString().padStart(2, "0")}`;
  }
}
