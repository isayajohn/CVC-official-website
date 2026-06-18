import { Component, OnDestroy, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-hero",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./landing-hero.component.html",
  styleUrl: "./landing-hero.component.scss",
})
export class LandingHeroComponent implements OnDestroy {
  private readonly translation = inject(TranslationService);
  private autoplayTimer = window.setInterval(() => this.nextHeroImage(), 6000);
  private touchStartX = 0;

  readonly heroImages = [
    "/images/cvc/about-hero-choir.jpg",
    "/images/cvc/hero-singer.jpg",
    "/images/cvc/hero-vocalist.jpg",
    "/images/cvc/hero-worship.jpg",
  ];

  activeHeroImage = 0;

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }

  setHeroImage(index: number): void {
    this.activeHeroImage = index;
    this.restartAutoplay();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0]?.clientX ?? this.touchStartX;
    const distance = touchEndX - this.touchStartX;

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance < 0) {
      this.nextHeroImage();
    } else {
      this.previousHeroImage();
    }

    this.restartAutoplay();
  }

  ngOnDestroy(): void {
    window.clearInterval(this.autoplayTimer);
  }

  private nextHeroImage(): void {
    this.activeHeroImage = (this.activeHeroImage + 1) % this.heroImages.length;
  }

  private previousHeroImage(): void {
    this.activeHeroImage =
      (this.activeHeroImage - 1 + this.heroImages.length) %
      this.heroImages.length;
  }

  private restartAutoplay(): void {
    window.clearInterval(this.autoplayTimer);
    this.autoplayTimer = window.setInterval(() => this.nextHeroImage(), 6000);
  }
}
