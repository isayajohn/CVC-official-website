import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CVC_YOUTUBE_URL, YOUTUBE_VIDEOS } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";
import { YouTubeVideo } from "../../core/types";

@Component({
  selector: "app-music-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./music.component.html",
  styleUrl: "./music.component.scss",
})
export class MusicPageComponent {
  readonly pageSize = 6;
  readonly currentPage = signal(1);
  readonly youtubeUrl = CVC_YOUTUBE_URL;
  readonly videos = YOUTUBE_VIDEOS;
  readonly totalPages = computed(() =>
    Math.ceil(this.videos.length / this.pageSize),
  );
  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );
  readonly pagedVideos = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.videos.slice(start, start + this.pageSize);
  });

  constructor(
    private readonly translation: TranslationService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  t(path: string): string {
    return this.translation.t(path);
  }

  videoUrl(video: YouTubeVideo): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video.id}`,
    );
  }

  setPage(page: number): void {
    this.currentPage.set(Math.min(Math.max(page, 1), this.totalPages()));
  }

  nextPage(): void {
    this.setPage(this.currentPage() + 1);
  }

  previousPage(): void {
    this.setPage(this.currentPage() - 1);
  }
}
